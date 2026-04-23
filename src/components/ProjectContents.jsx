import React, { useEffect, useRef, useState } from "react";
import { db } from "../../firebaseConfig";
import { onValue, ref } from "firebase/database";
import { Play } from "lucide-react";

const ProjectContents = () => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [videos, setVideos] = useState([]);
  const [reels, setReels] = useState([]);

  const handleClick = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      // Clicking the active video → mute it, deactivate
      video.muted = true;
      setPlayingIndex(null);
    } else {
      // Mute all other videos
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) v.muted = true;
      });
      // Unmute the clicked one
      video.muted = false;
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
          <span className="text-white/50 font-satoshi text-xs tracking-[0.35em] uppercase shrink-0">
            Films &amp; Ads
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Responsive grid: 1 col → 2 col (md) → 3 col (lg+) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.slice(0, 3).map((video, i) => {
            const isPlaying = playingIndex === i;
            return (
              <div
                key={video.id}
                className="relative group overflow-hidden cursor-pointer"
                onClick={() => handleClick(i)}
              >
                <video
                  playsInline
                  autoPlay
                  muted
                  loading="lazy"
                  ref={(el) => (videoRefs.current[i] = el)}
                  loop
                  className={`w-full object-cover select-none transition-all duration-500 ${
                    isPlaying ? "grayscale-0" : "grayscale-100"
                  }`}
                  src={video.videoUrl}
                />

                {/* Dark overlay + play button */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    isPlaying
                      ? "bg-transparent"
                      : "bg-black/25 group-hover:bg-black/10"
                  }`}
                >
                  {!isPlaying && (
                    <div
                      className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/30
                        flex items-center justify-center
                        opacity-0 scale-75
                        group-hover:opacity-100 group-hover:scale-100
                        transition-all duration-300"
                    >
                      <Play size={22} className="text-white ml-1" fill="white" />
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
          <span className="text-white/50 font-satoshi text-xs tracking-[0.35em] uppercase shrink-0">
            Reels
          </span>
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
                className="relative group overflow-hidden cursor-pointer aspect-[9/16]"
                onClick={() => handleClick(globalIndex)}
              >
                <video
                  playsInline
                  autoPlay
                  muted
                  loading="lazy"
                  ref={(el) => (videoRefs.current[globalIndex] = el)}
                  loop
                  className={`w-full h-full object-cover select-none transition-all duration-500 ${
                    isPlaying ? "grayscale-0" : "grayscale-100"
                  }`}
                  src={reel.videoUrl}
                />

                {/* Dark overlay + play button */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    isPlaying
                      ? "bg-transparent"
                      : "bg-black/25 group-hover:bg-black/10"
                  }`}
                >
                  {!isPlaying && (
                    <div
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/30
                        flex items-center justify-center
                        opacity-0 scale-75
                        group-hover:opacity-100 group-hover:scale-100
                        transition-all duration-300"
                    >
                      <Play size={16} className="text-white ml-0.5" fill="white" />
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
