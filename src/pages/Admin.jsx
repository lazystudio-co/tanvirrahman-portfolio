import React, { useEffect, useState } from "react";
import axios from "axios";
import { ref, push, onValue, remove } from "firebase/database";
import { db } from "../../firebaseConfig";
import Container from "../components/Container";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [video, setVideo] = useState(null);
  const [reel, setReel] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [reelUrl, setReelUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingSec, setLoadingSec] = useState(false);
  const [error, setError] = useState("");
  const [authChecking, setAuthChecking] = useState(true);

  // Auth guard
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/auth");
      }
      setAuthChecking(false);
    });
    return unsubscribe;
  }, [navigate]);

  const handleUploadVideo = async () => {
    if (!video) return;

    setLoading(true);
    setError("");

    try {
      // Step 1: Try to write a placeholder to Firebase first
      const firebaseRef = ref(db, "videos");
      const newEntry = await push(firebaseRef, {
        videoUrl: "pending",
        createdAt: Date.now(),
      });

      if (newEntry) {
        // Step 2: Firebase succeeded — now upload to Cloudinary
        const formData = new FormData();
        formData.append("file", video);
        formData.append("upload_preset", "tanvirRahman");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dnm3tmkca/video/upload",
          formData,
        );

        const optimizedUrl = res.data.secure_url.replace(
          "/upload/",
          "/upload/q_auto,f_auto/",
        );

        // Step 3: Update the Firebase entry with the real Cloudinary URL
        const { set } = await import("firebase/database");
        await set(newEntry, {
          videoUrl: optimizedUrl,
          publicId: res.data.public_id,
          createdAt: Date.now(),
        });

        setVideoUrl(optimizedUrl);
      } else {
        // Firebase push returned nothing — skip Cloudinary upload
        setError("Firebase is not responding. Video upload skipped.");
      }
    } catch (err) {
      console.error(err);
      setError(
        "Upload failed. Firebase could not be reached. Please try again.",
      );
    } finally {
      setLoading(false);
      setVideo("");
    }
  };

  const handleUploadReel = async () => {
    if (!reel) return;

    setLoadingSec(true);
    setError("");

    try {
      // Step 1: Try to write a placeholder to Firebase first
      const firebaseRef = ref(db, "reels");
      const newEntry = await push(firebaseRef, {
        videoUrl: "pending",
        createdAt: Date.now(),
      });

      if (newEntry) {
        // Step 2: Firebase succeeded — now upload to Cloudinary
        const formData = new FormData();
        formData.append("file", reel);
        formData.append("upload_preset", "tanvirRahman");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dnm3tmkca/video/upload",
          formData,
        );

        const optimizedUrl = res.data.secure_url.replace(
          "/upload/",
          "/upload/q_auto,f_auto/",
        );

        // Step 3: Update the Firebase entry with the real Cloudinary URL
        const { set } = await import("firebase/database");
        await set(newEntry, {
          videoUrl: optimizedUrl,
          publicId: res.data.public_id,
          createdAt: Date.now(),
        });

        setReelUrl(optimizedUrl);
      } else {
        // Firebase push returned nothing — skip Cloudinary upload
        setError("Firebase is not responding. Video upload skipped.");
      }
    } catch (err) {
      console.error(err);
      setError(
        "Upload failed. Firebase could not be reached. Please try again.",
      );
    } finally {
      setLoadingSec(false);
      setReel(null);
    }
  };

  const handleDelete = async (id, publicId) => {
    try {
      // Step 1: Delete from Firebase
      await remove(ref(db, `videos/${id}`));

      // Step 2: Delete from Cloudinary using a signed destroy request
      const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
      const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;
      const timestamp = Math.round(Date.now() / 1000);

      // Generate SHA-1 signature: public_id=...&timestamp=...{apiSecret}
      const signatureString = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
      const encoder = new TextEncoder();
      const hashBuffer = await crypto.subtle.digest(
        "SHA-1",
        encoder.encode(signatureString),
      );
      const signature = Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      const formData = new FormData();
      formData.append("public_id", publicId);
      formData.append("signature", signature);
      formData.append("api_key", apiKey);
      formData.append("timestamp", timestamp);

      await axios.post(
        "https://api.cloudinary.com/v1_1/dnm3tmkca/video/destroy",
        formData,
      );
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleDeleteReel = async (id, publicId) => {
    try {
      // Step 1: Delete from Firebase reels path
      await remove(ref(db, `reels/${id}`));

      // Step 2: Delete from Cloudinary
      const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
      const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;
      const timestamp = Math.round(Date.now() / 1000);

      const signatureString = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
      const encoder = new TextEncoder();
      const hashBuffer = await crypto.subtle.digest(
        "SHA-1",
        encoder.encode(signatureString),
      );
      const signature = Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      const formData = new FormData();
      formData.append("public_id", publicId);
      formData.append("signature", signature);
      formData.append("api_key", apiKey);
      formData.append("timestamp", timestamp);

      await axios.post(
        "https://api.cloudinary.com/v1_1/dnm3tmkca/video/destroy",
        formData,
      );
    } catch (err) {
      console.error("Reel delete failed:", err);
    }
  };

  const [videos, setVideos] = useState([]);
  const [reels, setReels] = useState([]);

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
    <section className=" pb-40 ">
      <div className=" pt-20 grid grid-cols-2 ">
        <div className=" mx-auto flex flex-col gap-6 ">
          <h2 className=" font-anton text-3xl text-white mb-10 mx-auto ">
            Video
          </h2>
          <input
            type="file"
            required
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            className=" bg-white/50 text-white pl-5 py-2 rounded-md "
          />

          <button
            onClick={handleUploadVideo}
            disabled={loading}
            className=" bg-white px-4 py-1 rounded-full text-[16px] font-satoshi select-none cursor-pointer "
          >
            {loading ? "Uploading..." : "Upload "}
          </button>

          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </div>

        <div className=" mx-auto flex flex-col gap-6 ">
          <h2 className=" font-anton text-3xl text-white mb-10 mx-auto ">
            Reels
          </h2>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setReel(e.target.files[0])}
            className=" bg-white/50 text-white pl-5 py-2 rounded-md "
          />

          <button
            onClick={handleUploadReel}
            disabled={loadingSec}
            className=" bg-white px-4 py-1 rounded-full text-[16px] font-satoshi select-none cursor-pointer "
          >
            {loadingSec ? "Uploading..." : "Upload "}
          </button>
        </div>
      </div>
      {/* Videos Preview */}
      <Container className=" mt-20 ">
        <h3 className=" text-white font-anton text-4xl mb-10 ">
          Videos Preview
        </h3>
        <div className=" grid grid-cols-4 gap-6 ">
          {videos.map((item) => (
            <div key={item.id} style={{ marginTop: "20px" }}>
              <div className=" w-fit mb-5 relative ">
                <video
                  src={item.videoUrl}
                  controls
                  width="400"
                  height="200"
                  preload="metadata"
                  className=" relative "
                />
                <button
                  onClick={() => handleDelete(item.id, item.publicId)}
                  className=" text-red-500 text-md font-satoshi bg-white w-[50%] absolute left-[50%] translate-x-[-50%] -bottom-5 rounded-full z-50 select-none cursor-pointer "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Reels Preview */}
      <Container className=" mt-20 ">
        <h3 className=" text-white font-anton text-4xl mb-10 ">
          Reels Preview
        </h3>
        <div className=" grid grid-cols-5 gap-6 ">
          {reels.map((item) => (
            <div key={item.id} style={{ marginTop: "20px" }}>
              <div className=" w-fit mb-5 relative ">
                <video
                  src={item.videoUrl}
                  controls
                  width="400"
                  height="200"
                  preload="metadata"
                  className=" relative "
                />
                <button
                  onClick={() => handleDeleteReel(item.id, item.publicId)}
                  className=" text-red-500 text-md font-satoshi bg-white w-[50%] absolute left-[50%] translate-x-[-50%] -bottom-5 rounded-full z-50 select-none cursor-pointer "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Admin;
