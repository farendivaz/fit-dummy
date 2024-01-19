import React from "react";

const Gallery = () => {
  return (
    <section className="my-4 grid grid-cols-3 gap-4 w-full justify-center items-center">
      <div>
        <img src="/public/banner.jpg" alt="Banner Image"></img>
        <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-3xl xl:text-3xl text-primary-100">
          Judul Galeri
        </h1>
      </div>
      <div>
        <img src="/public/banner.jpg" alt="Banner Image"></img>
        <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-3xl xl:text-3xl text-primary-100">
          Judul Galeri
        </h1>
      </div>
      <div>
        <img src="/public/banner.jpg" alt="Banner Image"></img>
        <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-3xl xl:text-3xl text-primary-100">
          Judul Galeri
        </h1>
      </div>
    </section>
  );
};

export default Gallery;
