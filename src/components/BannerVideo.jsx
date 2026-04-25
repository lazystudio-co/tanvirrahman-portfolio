import React, { useEffect, useState, useRef } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebaseConfig";
import { Play } from "lucide-react";

const BannerVideo = () => {
  const [bannerUrl, setBannerUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
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
        src="images/bannerSec.png"
        className=" rounded-[20px] select-none w-full aspect-video object-cover "
        alt="Hero banner fallback"
      />
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-[20px] overflow-hidden">
      <video
        ref={videoRef}
        src={bannerUrl}
        poster={bannerUrl.replace(/\.[^/.]+$/, ".jpg")}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover cursor-pointer"
        onClick={handlePlayClick}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {!isPlaying && (
        <div
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/25"
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <Play size={32} className="text-white ml-1" fill="white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerVideo;
