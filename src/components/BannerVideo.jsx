import React, { useEffect, useState, useRef } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebaseConfig";
import { Play } from "lucide-react";

const BannerVideo = () => {
  const [bannerUrl, setBannerUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlayingWithSound, setIsPlayingWithSound] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (!isPlayingWithSound) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
        setIsPlayingWithSound(true);
      } else {
        videoRef.current.muted = true;
        setIsPlayingWithSound(false);
      }
    }
  };

  useEffect(() => {
    const bannersRef = ref(db, "banners");
    const unsubscribe = onValue(bannersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const bannerList = Object.values(data);
        // Sort to get the most recent banner
        bannerList.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

        if (bannerList.length > 0 && bannerList[0].videoUrl !== "pending") {
          setBannerUrl(bannerList[0].videoUrl);
        } else {
          setBannerUrl(null);
        }
      } else {
        setBannerUrl(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading || !bannerUrl) {
    return (
      <img
        loading="eager"
        src="images/heroimage.jpg"
        className=" rounded-[20px] select-none w-full aspect-video object-cover "
        alt="Hero banner fallback"
      />
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-[20px] overflow-hidden group">
      <img
        loading="eager"
        src={bannerUrl.replace(/\.[^/.]+$/, ".jpg")}
        className={`absolute inset-0 w-full h-full object-cover z-10 transition-all duration-1000 ease-in-out ${
          videoLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        } ${isPlayingWithSound ? "grayscale-0" : "grayscale"}`}
        alt="Video thumbnail"
      />
      <video
        ref={videoRef}
        src={bannerUrl}
        loop
        playsInline
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isPlayingWithSound ? "grayscale-0" : "grayscale"
        }`}
      />

      {/* Dark overlay + play button */}
      <div
        onClick={handlePlayClick}
        className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-all duration-300 z-20 ${
          isPlayingWithSound
            ? "bg-transparent"
            : "bg-black/25 "
        }`}
      >
        {!isPlayingWithSound && (
          <div
            className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/30
              flex items-center justify-center
              opacity-100 scale-100
              transition-all duration-300"
          >
            <Play size={32} className="text-white ml-2" fill="white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerVideo;
