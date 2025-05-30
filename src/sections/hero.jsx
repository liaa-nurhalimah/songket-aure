import { useEffect, useState } from "react";

export default function HeroSection() {
  return (
    <div className="bg-yellow-950">
    <div className="carousel w-full h-[80dvh]">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="poto44.jpeg"
      className="w-full " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full h-[80vh]">
    <img
      src="p67.jpeg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
</div>
  );
}
