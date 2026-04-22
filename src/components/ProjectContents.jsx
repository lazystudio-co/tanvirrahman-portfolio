import React, { useRef, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";

const ProjectContents = () => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handleClick = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    video.muted = false;

    if (video.paused) {
      video.play();
      setPlayingIndex(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <div className=" mt-15">
      <div className="flex flex-row gap-6 mt-10 ">
        <div className="flex flex-row gap-6">
          <div className="relative">
            <video
              playsInline
              loading="lazy"
              ref={(el) => (videoRefs.current[3] = el)}
              loop
              className={` ${playingIndex === 3 ? " grayscale-0! " : ""} grayscale-100  w-full cursor-pointer select-none`}
              src="reel/r2.mp4"
              onClick={() => handleClick(3)}
            />
            <div
              className={`absolute inset-0 flex flex-col justify-start items-start pointer-events-none text-white text-[20px] bg-black/70 p-8 ${playingIndex === 3 ? "hidden" : ""}`}
            >
              <b className=" text-lg mb-4 ">Title</b>
              <p className=" text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                delectus nihil, dignissimos repellat, fuga ipsum inventore
                laborum ea corrupti debitis consectetur, mollitia dolor
                architecto cum perferendis rerum. Deserunt quo asperiores sunt
                dolorum saepe vitae ad aliquid animi laborum omnis culpa minus
                non dolore optio, tempore mollitia delectus dolores maxime
                consequatur.
              </p>
            </div>
            <div
              className={` ${playingIndex === 3 ? "hidden" : ""}  text-[24px] font-bold text-redd font-patung absolute right-4 bottom-4 `}
            >
              Click to play
            </div>
          </div>

          <div className="relative">
            <video
              playsInline
              loading="lazy"
              ref={(el) => (videoRefs.current[4] = el)}
              loop
              className={` ${playingIndex === 4 ? " grayscale-0! " : ""} grayscale-100  w-full cursor-pointer select-none`}
              src="reel/r2.mp4"
              onClick={() => handleClick(4)}
            />
            <div
              className={`absolute inset-0 flex flex-col justify-start items-start pointer-events-none text-white text-[20px] bg-black/70 p-8 ${playingIndex === 4 ? "hidden" : ""}`}
            >
              <b className=" text-lg mb-4 ">Title</b>
              <p className=" text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                delectus nihil, dignissimos repellat, fuga ipsum inventore
                laborum ea corrupti debitis consectetur, mollitia dolor
                architecto cum perferendis rerum. Deserunt quo asperiores sunt
                dolorum saepe vitae ad aliquid animi laborum omnis culpa minus
                non dolore optio, tempore mollitia delectus dolores maxime
                consequatur.
              </p>
            </div>
            <div
              className={` ${playingIndex === 4 ? "hidden" : ""}  text-[24px] font-bold text-redd font-patung absolute right-4 bottom-4 `}
            >
              Click to play
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-6 ">
          <div className="relative">
            <video
              playsInline
              loading="lazy"
              ref={(el) => (videoRefs.current[5] = el)}
              loop
              className={` ${playingIndex === 5 ? " grayscale-0! " : ""} grayscale-100  w-full cursor-pointer select-none`}
              src="reel/r2.mp4"
              onClick={() => handleClick(5)}
            />
            <div
              className={`absolute inset-0 flex flex-col justify-start items-start pointer-events-none text-white text-[20px] bg-black/70 p-8 ${playingIndex === 5 ? "hidden" : ""}`}
            >
              <b className=" text-lg mb-4 ">Title</b>
              <p className=" text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                delectus nihil, dignissimos repellat, fuga ipsum inventore
                laborum ea corrupti debitis consectetur, mollitia dolor
                architecto cum perferendis rerum. Deserunt quo asperiores sunt
                dolorum saepe vitae ad aliquid animi laborum omnis culpa minus
                non dolore optio, tempore mollitia delectus dolores maxime
                consequatur.
              </p>
            </div>
            <div
              className={` ${playingIndex === 5 ? "hidden" : ""}  text-[24px] font-bold text-redd font-patung absolute right-4 bottom-4 `}
            >
              Click to play
            </div>
          </div>

          <div className="relative">
            <video
              playsInline
              loading="lazy"
              ref={(el) => (videoRefs.current[6] = el)}
              loop
              className={` ${playingIndex === 6 ? " grayscale-0! " : ""} grayscale-100  w-full cursor-pointer select-none`}
              src="reel/r2.mp4"
              onClick={() => handleClick(6)}
            />
            <div
              className={`absolute inset-0 flex flex-col justify-start items-start pointer-events-none text-white text-[20px] bg-black/70 p-8 ${playingIndex === 6 ? "hidden" : ""}`}
            >
              <b className=" text-lg mb-4 ">Title</b>
              <p className=" text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                delectus nihil, dignissimos repellat, fuga ipsum inventore
                laborum ea corrupti debitis consectetur, mollitia dolor
                architecto cum perferendis rerum. Deserunt quo asperiores sunt
                dolorum saepe vitae ad aliquid animi laborum omnis culpa minus
                non dolore optio, tempore mollitia delectus dolores maxime
                consequatur.
              </p>
            </div>
            <div
              className={` ${playingIndex === 6 ? "hidden" : ""}  text-[24px] font-bold text-redd font-patung absolute right-4 bottom-4 `}
            >
              Click to play
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-6 mt-6 ">
        <div className="relative">
          <video
            playsInline
            loading="lazy"
            ref={(el) => (videoRefs.current[0] = el)}
            loop
            className={` ${playingIndex === 0 ? " grayscale-0! " : ""} grayscale-100  w-full cursor-pointer select-none`}
            src="video/v2.mp4"
            onClick={() => handleClick(0)}
          />
          <div
            className={`absolute inset-0 flex flex-col justify-start items-start pointer-events-none text-white text-[20px] bg-black/70 p-8 ${playingIndex === 0 ? "hidden" : ""}`}
          >
            <b className=" text-lg mb-4 ">Title</b>
            <p className=" text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              delectus nihil, dignissimos repellat, fuga ipsum inventore laborum
              ea corrupti debitis consectetur, mollitia dolor architecto cum
              perferendis rerum. Deserunt quo asperiores sunt dolorum saepe
              vitae ad aliquid animi laborum omnis culpa minus non dolore optio,
              tempore mollitia delectus dolores maxime consequatur.
            </p>
          </div>
          <div
            className={` ${playingIndex === 0 ? "hidden" : ""}  text-[24px] font-bold text-redd font-patung absolute right-4 bottom-4 `}
          >
            Click to play
          </div>
        </div>

        <div className="relative">
          <video
            playsInline
            loading="lazy"
            ref={(el) => (videoRefs.current[1] = el)}
            loop
            className={` ${playingIndex === 1 ? " grayscale-0! " : ""} grayscale-100  w-full cursor-pointer select-none`}
            src="video/v2.mp4"
            onClick={() => handleClick(1)}
          />
          <div
            className={`absolute inset-0 flex flex-col justify-start items-start pointer-events-none text-white text-[20px] bg-black/70 p-8 ${playingIndex === 1 ? "hidden" : ""}`}
          >
            <b className=" text-lg mb-4 ">Title</b>
            <p className=" text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              delectus nihil, dignissimos repellat, fuga ipsum inventore laborum
              ea corrupti debitis consectetur, mollitia dolor architecto cum
              perferendis rerum. Deserunt quo asperiores sunt dolorum saepe
              vitae ad aliquid animi laborum omnis culpa minus non dolore optio,
              tempore mollitia delectus dolores maxime consequatur.
            </p>
          </div>
          <div
            className={` ${playingIndex === 1 ? "hidden" : ""}  text-[24px] font-bold text-redd font-patung absolute right-4 bottom-4 `}
          >
            Click to play
          </div>
        </div>

        <div className="relative">
          <video
            playsInline
            loading="lazy"
            ref={(el) => (videoRefs.current[2] = el)}
            loop
            className={` ${playingIndex === 2 ? " grayscale-0! " : ""} grayscale-100  w-full cursor-pointer select-none`}
            src="video/v2.mp4"
            onClick={() => handleClick(2)}
          />
          <div
            className={`absolute inset-0 flex flex-col justify-start items-start pointer-events-none text-white text-[20px] bg-black/70 p-8 ${playingIndex === 2 ? "hidden" : ""}`}
          >
            <b className=" text-lg mb-4 ">Title</b>
            <p className=" text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              delectus nihil, dignissimos repellat, fuga ipsum inventore laborum
              ea corrupti debitis consectetur, mollitia dolor architecto cum
              perferendis rerum. Deserunt quo asperiores sunt dolorum saepe
              vitae ad aliquid animi laborum omnis culpa minus non dolore optio,
              tempore mollitia delectus dolores maxime consequatur.
            </p>
          </div>
          <div
            className={` ${playingIndex === 2 ? "hidden" : ""}  text-[24px] font-bold text-redd font-patung absolute right-4 bottom-4 `}
          >
            Click to play
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContents;
