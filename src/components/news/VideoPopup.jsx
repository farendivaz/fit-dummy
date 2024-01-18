import React, { useState } from "react";

const VideoPopup = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <div className="text-center flex justify-center gap-8 w-11/12 mt-8">
      <div className="relative aspect-video w-96">
        <img
          className=" aspect-video w-96"
          onClick={openModal}
          src="https://img.youtube.com/vi/4UZrsTqkcW4/maxresdefault.jpg"
          alt="Youtube Thumbnail"
        />
        <h1
          onClick={openModal}
          className="absolute inset-0 flex items-center justify-center text-6xl"
        >
          ▶️
        </h1>
      </div>
      <div className="relative aspect-video w-96">
        <img
          className=" aspect-video w-96"
          onClick={openModal}
          src="https://img.youtube.com/vi/4UZrsTqkcW4/maxresdefault.jpg"
          alt="Youtube Thumbnail"
        />
        <h1
          onClick={openModal}
          className="absolute inset-0 flex items-center justify-center text-6xl"
        >
          ▶️
        </h1>
      </div>
      <div className="relative aspect-video w-96">
        <img
          className=" aspect-video w-96"
          onClick={openModal}
          src="https://img.youtube.com/vi/4UZrsTqkcW4/maxresdefault.jpg"
          alt="Youtube Thumbnail"
        />
        <h1
          onClick={openModal}
          className="absolute inset-0 flex items-center justify-center text-6xl"
        >
          ▶️
        </h1>
      </div>

      {modal ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75">
          <div className="rounded">
            <div className="relative">
              <h1
                onClick={openModal}
                className="absolute top-0 border text-xl bg-white border-white rounded-full p-1 -right-10 text-gray-800 cursor-pointer"
              >
                ❌
              </h1>
              <iframe
                loading="lazy"
                width="800"
                height="500"
                src="https://www.youtube.com/embed/4UZrsTqkcW4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default VideoPopup;
