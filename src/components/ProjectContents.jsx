import React, { useEffect, useRef, useState } from "react";
import { db } from "../../firebaseConfig";
import { onValue, ref } from "firebase/database";
import { Play } from "lucide-react";
import { easeInOut, easeOut, motion } from "framer-motion";

const ProjectContents = () => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [videos, setVideos] = useState([]);
  const [reels, setReels] = useState([]);

  const handleClick = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      // Clicking the active video → pause it
      video.pause();
      setPlayingIndex(null);
    } else {
      // Pause all other videos
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) {
          v.pause();
        }
      });
      // Play the clicked one
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Video play error:", error);
        });
      }
      setPlayingIndex(index);
    }
  };

  useEffect(() => {
    const videosRef = ref(db, "videos");
    onValue(videosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const videoList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setVideos(videoList);
      } else {
        setVideos([]);
      }
    });

    const reelsRef = ref(db, "reels");
    onValue(reelsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const reelList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setReels(reelList);
      } else {
        setReels([]);
      }
    });
  }, []);

  return (
    <div className="mt-10 space-y-16">
      {/* ── Films & Ads ── */}
      <div>
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-white/50 font-satoshi text-xs tracking-[0.35em] uppercase shrink-0"
          >
            Films &amp; Ads
          </motion.span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Responsive grid: 1 col → 2 col (md) → 3 col (lg+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.slice(0, 3).map((video, i) => {
            const isPlaying = playingIndex === i;
            return (
              <div
                key={video.id}
                className="relative group overflow-hidden bg-[#111] aspect-video rounded-sm "
              >
                <motion.video
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: easeInOut }}
                  viewport={{ once: true }}
                  playsInline
                  preload="metadata"
                  ref={(el) => (videoRefs.current[i] = el)}
                  loop
                  controls={isPlaying}
                  className={`w-full object-cover select-none transition-all duration-500 ${
                    isPlaying ? "grayscale-0" : "grayscale-100"
                  }`}
                  src={video.videoUrl}
                />

                {/* Dark overlay + play button */}
                <div
                  onClick={() => handleClick(i)}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    isPlaying
                      ? "bg-transparent pointer-events-none"
                      : "bg-black/25 group-hover:bg-black/10 cursor-pointer"
                  }`}
                >
                  {!isPlaying && (
                    <div
                      className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30
                        flex items-center justify-center
                        opacity-100 scale-100
                        transition-all duration-300"
                    >
                      <Play
                        size={22}
                        className="text-white ml-1"
                        fill="white"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Reels ── */}
      <div>
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: easeInOut }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white/50 font-satoshi text-xs tracking-[0.35em] uppercase shrink-0"
          >
            Reels
          </motion.span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Responsive grid: 2 col (sm) → 3 col (md) → 4 col (lg) → 5 col (xl) → 6 col (2xl) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
          {reels.slice(0, 6).map((reel, i) => {
            const globalIndex = i + 3; // reels start at index 3 (after 3 videos)
            const isPlaying = playingIndex === globalIndex;
            return (
              <div
                key={reel.id}
                className="relative group overflow-hidden bg-[#111] aspect-[9/16] rounded-sm"
              >
                <motion.video
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: easeOut }}
                  viewport={{ once: true, amount: 0.3 }}
                  playsInline
                  preload="auto"
                  ref={(el) => (videoRefs.current[globalIndex] = el)}
                  loop
                  controls={isPlaying}
                  className={`w-full h-full object-cover select-none transition-all duration-500 ${
                    isPlaying ? "grayscale-0" : "grayscale-100"
                  }`}
                  src={reel.videoUrl}
                />

                {/* Dark overlay + play button */}
                <div
                  onClick={() => handleClick(globalIndex)}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    isPlaying
                      ? "bg-transparent pointer-events-none"
                      : "bg-black/25 group-hover:bg-black/10 cursor-pointer"
                  }`}
                >
                  {!isPlaying && (
                    <div
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/30
                        flex items-center justify-center
                        opacity-100 scale-100
                        transition-all duration-300"
                    >
                      <Play
                        size={16}
                        className="text-white ml-0.5"
                        fill="white"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectContents;
