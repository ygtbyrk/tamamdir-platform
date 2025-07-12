"use client";

import Link from "next/link";
import { Star, ChevronLeft } from "lucide-react";

const sloganGradient = "bg-gradient-to-r from-[#093028] via-[#237a57] to-[#43cea2]";

interface Cilingir {
  id: string;
  isim: string;
  aciklama: string;
  logo: string;
  puan: number;
  yorumSayisi: number;
  kapali?: boolean;
}

const cilingirler: Cilingir[] = [
  {
    id: "cilingir-usta",
    isim: "Çilingir Usta",
    aciklama: "Acil kapı açma ve güvenlik sistemleri.",
    logo: "/cilingir-usta.png",
    puan: 4.7,
    yorumSayisi: 29,
  },
  {
    id: "anahtarci",
    isim: "Anahtarcı",
    aciklama: "Hızlı ve güvenilir anahtar hizmetleri.",
    logo: "/anahtarci.png",
    puan: 4.5,
    yorumSayisi: 18,
    kapali: true,
  },
];

export default function CilingirPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] py-10 px-6 flex flex-col items-center">
      {/* Geri Dön */}
      <div className="max-w-[1280px] w-full mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#195946] font-semibold hover:text-[#134a3b] transition-colors"
          aria-label="Ana sayfaya geri dön"
        >
          <ChevronLeft size={24} />
          <span className="ml-2">Geri Dön</span>
        </Link>
      </div>

      {/* Slogan Kutusu */}
      <header
        className={`${sloganGradient} w-full mb-16 py-10 px-6 sm:px-16 rounded-3xl shadow-2xl flex justify-center select-none`}
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight tracking-tight max-w-[900px] text-center"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Ankara’da bugün <span className="text-[#ffb901]">neye ihtiyacın var?</span>
        </h1>
      </header>

      {/* Kartlar */}
      <div className="max-w-[1280px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-0">
        {cilingirler.map((cilingir) => (
          <Link
            key={cilingir.id}
            href={`/kategori/cilingir/${cilingir.id}`}
            className={`
              relative flex flex-col items-center p-5 rounded-2xl
              bg-gradient-to-br from-white to-[#f0fcfc]
              shadow-lg border border-transparent
              cursor-pointer
              transition-transform duration-400 ease-in-out
              hover:shadow-2xl hover:border-[#43cea2]
              hover:-translate-y-2 hover:scale-[1.05]
              max-w-full
              mx-auto
              min-w-[180px]
              focus:outline-none focus-visible:ring-4 focus-visible:ring-[#43cea2]/70
            `}
            aria-label={`${cilingir.isim} detay sayfası`}
          >
            <div
              className="relative w-20 h-20 mb-5 rounded-xl border border-[#3dbd94] bg-[#bbf0db] flex justify-center items-center
              transition-transform duration-300 ease-in-out group-hover:scale-110"
            >
              <img
                src={cilingir.logo}
                alt={`${cilingir.isim} logosu`}
                className="w-16 h-16 object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>

            <h2 className="text-xl font-extrabold text-[#195946] mb-1 text-center truncate w-full">
              {cilingir.isim}
            </h2>
            <p className="text-[#134a3b] text-sm text-center line-clamp-3 min-h-[45px] mb-3 px-3">
              {cilingir.aciklama}
            </p>
            <div className="flex items-center gap-1 text-[#43cea2] font-semibold select-none justify-center mb-3">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-lg">{cilingir.puan.toFixed(1)}</span>
              <span className="text-gray-400 text-xs">({cilingir.yorumSayisi} yorum)</span>
            </div>

            {/* Kapalı Etiketi */}
            {cilingir.kapali && (
              <div className="absolute top-3 right-3 bg-[#c20d0d] text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg select-none z-20">
                Kapalı
              </div>
            )}
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
