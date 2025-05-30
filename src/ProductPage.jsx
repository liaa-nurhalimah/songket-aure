import React from "react";
import { Link } from "react-router";

export default function ProductPage() {
  const images = [
  { src: "p1.jpeg", label: "Songket Lepus", harga: "Rp850.000" },
  { src: "p2.jpeg", label: "Songket Limar", harga: "Rp900.000" },
  { src: "p3.jpeg", label: "Songket Bunga", harga: "Rp950.000" },
  { src: "p5.jpeg", label: "Songket Rupak", harga: "Rp990.000" },
  { src: "p6.jpeg", label: "Songket Tretes", harga: "Rp920.000" },
  { src: "p7.jpeg", label: "Songket Tabur", harga: "Rp930.000" },
];
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-yellow-950 text-white p-4 gap-6 space-y-24">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
       {images.map(({ src, label, harga }, i) => (
  <a
    key={i}
    href={src}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center"
  >
    <img
      src={src}
      alt={label}
      className="object-cover w-full h-64 rounded-lg shadow-md"
    />
    <p className="mt-2 text-center text-white text-sm font-semibold">{label}</p>
    <p className="text-center text-yellow-300 text-sm">{harga}</p>
  </a>
))}
      </div>

      {/* Daftar Jenis Produk */}
   <div className="flex flex-col justify-center items-start p-6 bg-yellow-950 rounded-lg shadow-lg text-base font-semibold space-y-4 w-full lg:w-1/3">
    <p className="text-yellow-300 tracking-wide font-serif">
     AURÈ menjual beragam jenis songket Palembang yang 
    terkenal dan memiliki nilai budaya tinggi. 
  </p>
</div>
    </div>

  );
}
