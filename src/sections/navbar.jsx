'use client';

import { useState } from "react";
import { Globe, Instagram } from "lucide-react";

export default function Navbar() {
  const [language, setLanguage] = useState("id"); // 'id' for Indonesian, 'en' for English

  const translations = {
    id: {
      menu: "Menu",
      about: "Tentang Kami",
      product: "Produk",
      contact: "Hubungi Kami",
      testimoni: "Testimoni",
      kualitas: "Kualitas",
      language: "Indonesian",
      flag: "🇮🇩",
    },
    en: {
      menu: "Menu",
      about: "About Us",
      product: "Products",
      contact: "Contact Us",
      testimoni: "Testimonials",
      kualitas: "Quality",
      language: "English",

      flag: "🇬🇧",
    },
  };

  const t = translations[language];

  return (
    <div className="navbar fixed top-0 z-50 bg-yellow-950 text-white backdrop-blur-md px-6">
      {/* Menu kiri */}
      <div className="flex-none">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost normal-case text-md md:text-lg font-medium"
          >
            {t.menu}
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
          >
            <li><a href="#tentang">{t.about}</a></li>
            <li><a href="#produk">{t.product}</a></li>
            <li><a href="#hubungi">{t.contact}</a></li>
            <li><a href="#testimoni">{t.testimoni}</a></li>
            <li><a href="#kualitas">{t.kualitas}</a></li>
          </ul>
        </div>
      </div>

      {/* Menu tengah */}
      <div className="hidden md:flex flex-1 justify-center space-x-6">
        <a href="#tentang" className="hover:text-orange-300 transition-colors">{t.about}</a>
        <a href="#produk" className="hover:text-orange-300 transition-colors">{t.product}</a>
        <a href="#hubungi" className="hover:text-orange-300 transition-colors">{t.contact}</a>
        <a href="#testimoni" className="hover:text-orange-300 transition-colors">{t.testimoni}</a>
        <a href="#kualitas" className="hover:text-orange-300 transition-colors">{t.kualitas}</a>
      </div>

      {/* Ikon kanan */}
      <div className="flex items-center space-x-4">
        {/* Instagram */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 hover:text-orange-300 transition-colors" />
        </a>

        {/* Pemilih Bahasa */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm"
          >
            <span className="flex items-center space-x-1">
              <span>{t.flag}</span>
              <span className="text-sm">{t.language}</span>
            </span>
          </div>
         
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 text-black mt-2 w-40 rounded-box shadow"
          >
            <li>
              <button onClick={() => setLanguage("en")}>🇬🇧 English</button>
            </li>
            <li>
              <button onClick={() => setLanguage("id")}>🇮🇩 Indonesian</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}