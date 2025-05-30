import { useState } from "react";

export default function CommitmentSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="produk"
  className="relative h-[80dvh] flex justify-center items-center overflow-hidden ">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        src="/vidioooo.mp4"
      />
      <div className="relative z-10 max-w-[90%] md:max-w-[600px] text-center text-white bg-black/40 p-4 rounded-lg backdrop-blur-sm shadow-lg">
        <div className="relative z-20 text-center max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-semibold font-serif  drop-shadow-sm">
            AURÈ adalah brand yang memadukan warisan tekstil Indonesia dengan
            gaya modern, menonjolkan kualitas, keaslian, dan keindahan budaya
            Palembang.
          </h1>

          {!showMore && (
            <a
              href="/produk"
              className="btn btn-warning mt-6 bg-yellow-500 rounded-lg text-yellow-950 font-serif px-4 py-2 hover:bg-yellow-400 transition-colors duration-300"
            >
              Produk Kami
            </a>
          )}

        </div>
      </div>
    </section>
  );
}
