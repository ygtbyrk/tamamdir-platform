"use client";

import Link from "next/link";
import { Star, ChevronLeft } from "lucide-react";

const otoGradient = "bg-gradient-to-r from-[#2a3b4d] via-[#405a77] to-[#1e2e43]"; // Dayanıklı, koyu mavi-gri tonları

interface Oto {
  id: string;
  isim: string;
  aciklama: string;
  logo: string;
  puan: number;
  yorumSayisi: number;
  kapali?: boolean;
}

const otolar: Oto[] = [
  {
    id: "oto-kurtarma",
    isim: "Oto Kurtarma",
    aciklama: "7/24 yol yardım ve kurtarma hizmeti.",
    logo: "/oto-kurtarma.png",
    puan: 4.9,
    yorumSayisi: 37,
  },
  {
    id: "oto-boyama",
    isim: "Oto Boyama",
    aciklama: "Profesyonel araç boyama ve kaporta.",
    logo: "/oto-boyama.png",
    puan: 4.7,
    yorumSayisi: 29,
  },
];

export default function OtoPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] py-10 px-6 flex flex-col items-center">
      {/* Geri Dön */}
      <div className="max-w-[1280px] w-full mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#405a77] font-semibold hover:text-[#2a3b4d] transition-colors"
          aria-label="Ana sayfaya geri dön"
        >
          <ChevronLeft size={24} />
          <span className="ml-2">Geri Dön</span>
        </Link>
      </div>

      {/* Slogan Kutusu */}
      <header
        className={`${otoGradient} w-full mb-16 py-8 px-6 sm:px-16 rounded-3xl shadow-2xl flex justify-center select-none`}
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight tracking-tight max-w-[900px] text-center"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Ankara’da bugün{" "}
          <span className="text-[#b3c7d9] font-extrabold">neye ihtiyacın var?</span>
        </h1>
      </header>

      {/* Kartlar */}
      <div className="max-w-[1280px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-0">
        {otolar.map((oto) => (
          <Link
            key={oto.id}
            href={`/kategori/oto/${oto.id}`}
            className={`
              relative flex flex-col items-center p-5 rounded-2xl
              bg-gradient-to-br from-white to-[#f7f9fc]
              shadow-lg border border-transparent
              cursor-pointer
              transition-transform duration-400 ease-in-out
              hover:shadow-2xl hover:border-[#b3c7d9]
              hover:-translate-y-2 hover:scale-[1.05]
              max-w-full
              mx-auto
              min-w-[180px]
              focus:outline-none focus-visible:ring-4 focus-visible:ring-[#b3c7d9]/70
            `}
            aria-label={`${oto.isim} detay sayfası`}
          >
            <div
              className="relative w-20 h-20 mb-5 rounded-xl border border-[#c4d0dd] bg-[#eff5fb] flex justify-center items-center
              transition-transform duration-300 ease-in-out group-hover:scale-110"
            >
              <img
                src={oto.logo}
                alt={`${oto.isim} logosu`}
                className="w-16 h-16 object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>

            <h2 className="text-xl font-extrabold text-[#405a77] mb-1 text-center truncate w-full">
              {oto.isim}
            </h2>
            <p className="text-[#6e829e] text-sm text-center line-clamp-3 min-h-[45px] mb-3 px-3">
              {oto.aciklama}
            </p>
            <div className="flex items-center gap-1 text-[#b3c7d9] font-semibold select-none justify-center mb-3">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-lg">{oto.puan.toFixed(1)}</span>
              <span className="text-gray-400 text-xs">({oto.yorumSayisi} yorum)</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full max-w-[1280px] mt-auto border-t border-gray-300 py-5 text-center text-sm text-gray-600 font-light select-none">
        © {new Date().getFullYear()} Tamamdır | Powered by TamamdırApp
      </footer>
    </main>
  );
}
