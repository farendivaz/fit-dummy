import { useState } from "react";
import Cerita from "../home/Cerita";
import VideoPopup from "./VideoPopup";
import Gallery from "./Gallery";

const Features = () => {
  const [tab, setTab] = useState("blog");
  const [blogPosts, setBlogPosts] = useState(
    Array.from({ length: 2 }, (_, index) => index + 1)
  );
  const [videoPopup, setVideoPopup] = useState(
    Array.from({ length: 2 }, (_, index) => index + 1)
  );
  const [galleryPhotos, setGalleryPhotos] = useState(
    Array.from({ length: 2 }, (_, index) => index + 1)
  );
  const handleClick = () => {
    // Add 3 more blog posts when the button is clicked
    if (tab === "blog") {
      setBlogPosts((prevPosts) => [
        ...prevPosts,
        ...Array.from(
          { length: 2 },
          (_, index) => prevPosts.length + index + 1
        ),
      ]);
    } else if (tab === "video") {
      setVideoPopup((prevVideo) => [
        ...prevVideo,
        ...Array.from(
          { length: 2 },
          (_, index) => prevVideo.length + index + 1
        ),
      ]);
    } else if (tab === "gallery") {
      setGalleryPhotos((prevGallery) => [
        ...prevGallery,
        ...Array.from(
          { length: 2 },
          (_, index) => prevGallery.length + index + 1
        ),
      ]);
    }
  };
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
        {tab === "blog" &&
          blogPosts.map((postId) => <Cerita key={postId} postId={postId} />)}
        {tab === "gallery" &&
          galleryPhotos.map((galleryId) => (
            <Gallery key={galleryId} galleryId={galleryId} />
          ))}
        {tab === "video" &&
          videoPopup.map((videoId) => (
            <VideoPopup key={videoId} videoId={videoId} />
          ))}
        <div onClick={handleClick} className="flex justify-center my-4">
          <button className="mx-auto text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
