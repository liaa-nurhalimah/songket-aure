import { Info } from "lucide-react";

export default function AboutSection() {
  return (
    <section 
      id="tentang"
      className="bg-yellow-950 text-white px-6 py-12"
>

      <div className="grid grid-cols-2 gap-8">
        <div className="h-full flex flex-col gap-4 items-start">
          <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg font-serif">
            Tentang AURÈ
          </div>
          <h1 className="text-xl font-bold">
            Songket Palembang adalah kain tenun tradisional yang berasal dari Sumatera Selatan, Indonesia. Dibuat dengan teknik menyungkit benang emas atau perak ke dalam kain dasar, songket telah menjadi bagian penting dari budaya Palembang sejak masa Kerajaan Sriwijaya. 
            Pada masa Kesultanan Palembang, kain ini digunakan oleh keluarga bangsawan sebagai simbol status, kehormatan, dan kemewahan. Hingga kini, songket tetap menjadi warisan budaya yang bernilai tinggi, sering dipakai dalam upacara adat, pernikahan, dan acara penting lainnya.
          </h1>
          <p className="text-xl font-serif">
            Motif-motif yang digunakan sarat akan makna filosofis, mencerminkan nilai budaya dan kearifan lokal masyarakat Palembang.
            Hingga kini, songket tetap menjadi bagian penting dari warisan budaya Sumatera Selatan. Kain ini sering digunakan dalam upacara adat, pernikahan, dan acara resmi. Selain menjadi identitas budaya lokal, songket Palembang juga telah dikenal secara nasional dan internasional sebagai salah satu kekayaan tekstil tradisional Indonesia yang patut dibanggakan dan terus dilestarikan.
          </p>
        </div>
        <div>
          <img src="gg.jpeg" className="shadow-lg rounded-lg" />
        </div>
      </div>
    </section>
  );
}