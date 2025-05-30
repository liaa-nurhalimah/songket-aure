import { Star } from "lucide-react";

export default function BestQualitySection() {
  const qualityImages = [
    {
      id: 1,
      src: "t1.jpeg",
      alt: "Benang Tekstil Berkualitas Tinggi"
    },
    {
      id: 2,
      src: "t2.jpeg",
      alt: "Benang Emas Premium"
    },
    {
      id: 3,
      src: "t3.jpeg",
      alt: "Gulungan Benang Berkualitas"
    },
    {
      id: 4,
      src: "t4.jpeg",
      alt: "Proses Pembuatan Tekstil"
    }
  ];

  return (
    <section id="kualitas"
    className="relative py-16 bg-gradient-to-b from-yellow-600 to-yellow-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-yellow-50 opacity-90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Stars */}
          <div className="flex justify-center items-center gap-2 mb-6">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-8 h-8 ${
                  index === 2 ? 'w-12 h-12' : ''
                } fill-yellow-300 text-yellow-300 drop-shadow-lg`}
              />
            ))}
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-950 mb-2 drop-shadow-lg tracking-wide">
            BEST QUALITY
          </h2>
          
          {/* Divider Line */}
          <div className="w-32 h-1 bg-yellow-300 mx-auto mb-8 rounded-full"></div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-yellow-950font-medium drop-shadow-md font-serif">
            Kami Sangat Menjaga Kualitas yang Terbaik
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {qualityImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
            
              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-4 border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-white/60 rounded-full"></div>
            <div className="w-12 h-1 bg-white rounded-full"></div>
            <div className="w-8 h-1 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
    </section>
  );
}