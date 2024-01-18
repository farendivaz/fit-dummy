import React from "react";
import Sorotan from "../components/news/Sorotan";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Features from "../components/news/Features";

const News = () => {
  return (
    <>
      <NavBar />
      <Sorotan />
      <Features />
      <Footer />
    </>
  );
};

export default News;
