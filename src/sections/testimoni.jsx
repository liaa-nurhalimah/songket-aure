import React, { useState, useEffect } from 'react';
import { Quote, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      text: "Subhanallah, songket dari Aure Songket ini kualitasnya luar biasa! Benangnya halus, motifnya detail, dan warnanya tidak mudah pudar. Pakai ke acara resmi langsung dapat banyak pujian.",
      author: "Siti Aminah"
    },
    {
      id: 2,
      text: "Alhamdulillah, setelah cari songket asli Palembang dimana-mana, akhirnya ketemu Aure Songket. Pelayanannya ramah, bisa custom motif sesuai keinginan, dan hasilnya sangat memuaskan!",
      author: "Raden Fatimah"
    },
    {
      id: 3,
      text: "Masya Allah, songketnya bagus banget! Kombinasi warna emasnya elegan, cocok untuk kebaya pengantin. Harganya juga masih reasonable untuk kualitas premium seperti ini.",
      author: "Dewi Sartika"
    },
    {
      id: 4,
      text: "Pertama kali beli songket online, sempat ragu. Tapi setelah terima barangnya, sangat puas! Packagingnya rapi, motifnya sesuai foto, dan kualitasnya premium. Recommended!",
      author: "Nur Halimah"
    },
    {
      id: 5,
      text: "Songket Aure ini beneran berkualitas tinggi. Benang emasnya asli, tidak gampang kusut, dan motif tradisionalnya authentic. Cocok untuk koleksi atau hadiah special.",
      author: "Ratna Sari"
    },
    {
      id: 6,
      text: "Sebagai pecinta budaya Palembang, saya sangat puas dengan songket dari Aure. Motifnya masih original, pengerjaannya rapi, dan tetap mempertahankan nilai tradisional.",
      author: "Hj. Mariam"
    },
    {
      id: 7,
      text: "Pelayanan customer servicenya excellent! Sabar bantu pilih motif, kasih saran kombinasi warna, dan proses pembuatannya transparan. Hasilnya sesuai ekspektasi.",
      author: "Sarah Aulia"
    },
    {
      id: 8,
      text: "Songket untuk seragam keluarga di acara pernikahan, hasilnya kompak dan elegan. Semua keluarga besar puas dengan kualitas dan motifnya. Terima kasih Aure Songket!",
      author: "Pak Hendra"
    },
    {
      id: 9,
      text: "Beli songket untuk souvenir tamu undangan, responnya luar biasa! Semua tamu kagum dengan kualitas dan kemasan yang mewah. Jadi kebanggaan tersendiri.",
      author: "Umi Kalsum"
    },
    {
      id: 10,
      text: "Dari segi kualitas, motif, dan harga, Aure Songket juara! Udah langganan beberapa tahun, belum pernah kecewa. Selalu jadi pilihan utama untuk songket berkualitas.",
      author: "Dodi Rahman"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (window.innerWidth >= 768) {
          // Desktop: auto-advance by slides of 4
          const currentSlide = Math.floor(prevIndex / 4);
          const totalSlides = Math.ceil(testimonials.length / 4);
          const nextSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
          return nextSlide * 4;
        } else {
          // Mobile: auto-advance individual testimonials
          return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    if (window.innerWidth >= 768) {
      // Desktop: navigate by slides of 4
      const currentSlide = Math.floor(currentIndex / 4);
      const totalSlides = Math.ceil(testimonials.length / 4);
      const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
      setCurrentIndex(newSlide * 4);
    } else {
      // Mobile: navigate individual testimonials
      setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    }
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    if (window.innerWidth >= 768) {
      // Desktop: navigate by slides of 4
      const currentSlide = Math.floor(currentIndex / 4);
      const totalSlides = Math.ceil(testimonials.length / 4);
      const newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
      setCurrentIndex(newSlide * 4);
    } else {
      // Mobile: navigate individual testimonials
      setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    }
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (

    <div id="testimoni" 
    className="bg-yellow-950 min-h-screen">
              <section
        id="Testimonial Section"
        className="max-w-screen-xl mx-auto space-y-8 py-20 px-4"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg">
            Testimoni Aure Songket
          </div>
          <div className="flex items-center gap-2">
            <Award className="text-yellow-500" />
            <h2 className="text-3xl text-yellow-500 font-bold font-serif">Apa Kata Klien Kami</h2>
          </div>
          <p className="text-base text-white text-center">
           Dengarkan dari pelanggan yang menyukai songket Palembang asli kami.
          </p>
        </div>

        {/* Desktop View - Carousel with 4 cards per slide */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${Math.floor(currentIndex / 4) * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-4 gap-4">
                    {testimonials.slice(slideIndex * 4, slideIndex * 4 + 4).map((testimonial, cardIndex) => (
                      <div 
                        key={testimonial.id}
                        className={`bg-white rounded-lg border shadow-lg transition-all duration-300 ${
                          slideIndex * 4 + cardIndex === currentIndex ? 'ring-2 ring-yellow-500 scale-105' : 'hover:shadow-xl'
                        }`}
                      >
                        <div className="p-6 space-y-4">
                          <Quote className="text-amber-800 h-8 w-8" />
                          <p className="font-serif text-gray-700">
                            {testimonial.text}
                          </p>
                          <span className="block text-right font-bold font-mono text-amber-800">
                            - {testimonial.author}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white text-amber-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white text-amber-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-lg border shadow-lg">
                    <div className="p-6 space-y-4">
                      <Quote className="text-amber-800 h-8 w-8" />
                      <p className="font-serif text-gray-700">
                        {testimonial.text}
                      </p>
                      <span className="block text-right font-bold font-mono text-amber-800">
                        - {testimonial.author}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/90 hover:bg-white text-amber-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/90 hover:bg-white text-amber-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator - For all screen sizes */}
        <div className="flex justify-center space-x-2">
          {/* Mobile dots - individual testimonials */}
          <div className="flex space-x-2 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-yellow-500 scale-125' 
                    : 'bg-yellow-600/50 hover:bg-yellow-500/70'
                }`}
              />
            ))}
          </div>
          
          {/* Desktop dots - slide groups */}
          <div className="hidden md:flex space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 4) }).map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => goToSlide(slideIndex * 4)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 4) === slideIndex 
                    ? 'bg-yellow-500 scale-125' 
                    : 'bg-yellow-600/50 hover:bg-yellow-500/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex justify-center items-center">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-6 h-6 bg-orange-400 clip-path-star"
                style={{
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator (Mobile Only) */}
        <div className="text-center md:hidden">
          <div className="text-yellow-200 text-xs flex items-center justify-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </div>
        </div>
      </section>
    </div>
  );
}