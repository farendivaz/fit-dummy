import { useState } from "react";
import Cerita from "../home/Cerita";
import VideoPopup from "./VideoPopup";

const Features = () => {
  const [tab, setTab] = useState("blog");

  return (
    <div className="features w-11/12 mx-auto">
      <div className="feature-options">
        <ul className="flex text-lg gap-4">
          <li
            className="bg-blue-500 py-2 px-4 rounded-xl text-white"
            onClick={() => setTab("blog")}
          >
            Blog
          </li>
          <li
            className="bg-blue-500 py-2 px-4 rounded-xl text-white"
            onClick={() => setTab("gallery")}
          >
            Gallery
          </li>
          <li
            className="bg-blue-500 py-2 px-4 rounded-xl text-white"
            onClick={() => setTab("video")}
          >
            Video
          </li>
        </ul>
        {tab === "blog" && <Cerita />}
        {tab === "gallery" && (
          <section>
            <div className="flex mx-20  gap-20">
              <div className="w-1/2">
                <h1 className="text-2xl mt-2 mb-4 font-semibold text-center md:text-3xl lg:text-3xl xl:text-4xl text-primary-100">
                  Sorotan Media
                </h1>
                <img
                  src="/public/banner.jpg"
                  alt="Banner Image"
                  className="w-full"
                ></img>
                <h1 className="text-2xl m-2 font-semibold text-center md:text-3xl lg:text-3xl xl:text-3xl text-primary-100">
                  Judul Galeri
                </h1>
              </div>
              <div className="w-1/2">
                <h1 className="text-2xl mt-2 mb-4 font-semibold text-center md:text-3xl lg:text-3xl xl:text-4xl text-primary-100">
                  Sorotan Media
                </h1>
                <img
                  src="/public/banner.jpg"
                  alt="Banner Image"
                  className="w-full"
                ></img>
                <h1 className="text-2xl m-2 font-semibold text-center md:text-3xl lg:text-3xl xl:text-3xl text-primary-100">
                  Judul Video
                </h1>
              </div>
            </div>
          </section>
        )}
        {tab === "video" && <VideoPopup />}
      </div>
    </div>
  );
};

export default Features;
