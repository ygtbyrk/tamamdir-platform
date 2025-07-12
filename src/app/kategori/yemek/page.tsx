"use client";

import Link from "next/link";
import { Star, ChevronLeft } from "lucide-react";

const yemekGradient = "bg-gradient-to-r from-[#ff7e5f] via-[#feb47b] to-[#ffcc33]"; // Sıcak, iştah açan turuncu-sarı tonları

interface Yemek {
  id: string;
  isim: string;
  aciklama: string;
  logo: string;
  puan: number;
  yorumSayisi: number;
  kapali?: boolean;
}

const yemekler: Yemek[] = [
  {
    id: "pizza-hane",
    isim: "Pizza Hane",
    aciklama: "En lezzetli pizzalar tam zamanında kapınızda.",
    logo: "/pizza-hane.png",
    puan: 4.8,
    yorumSayisi: 120,
  },
  {
    id: "burger-durak",
    isim: "Burger Durak",
    aciklama: "Özel tariflerle hazırlanmış enfes burgerler.",
    logo: "/burger-durak.png",
    puan: 4.5,
    yorumSayisi: 98,
  },
];

export default function YemekPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] py-10 px-6 flex flex-col items-center">
      {/* Geri Dön */}
      <div className="max-w-[1280px] w-full mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#d35400] font-semibold hover:text-[#a24300] transition-colors"
          aria-label="Ana sayfaya geri dön"
        >
          <ChevronLeft size={24} />
          <span className="ml-2">Geri Dön</span>
        </Link>
      </div>

      {/* Slogan Kutusu */}
      <header
        className={`${yemekGradient} w-full mb-16 py-8 px-6 sm:px-16 rounded-3xl shadow-2xl flex justify-center select-none`}
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight tracking-tight max-w-[900px] text-center"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Tamamdır'ın Seçtiği            {"       "}
          <span
            className="font-extrabold text-[#4a2e00]"
            style={{ textShadow: "1px 1px 3px rgba(255,255,255,0.6)" }}
          >
                    En İyi Lezzetler...
          </span>
        </h1>
      </header>

      {/* Kartlar */}
      <div className="max-w-[1280px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-0">
        {yemekler.map((yemek) => (
          <Link
            key={yemek.id}
            href={`/kategori/yemek/${yemek.id}`}
            className={`
              relative flex flex-col items-center p-5 rounded-2xl
              bg-gradient-to-br from-white to-[#fff8f0]
              shadow-lg border border-transparent
              cursor-pointer
              transition-transform duration-400 ease-in-out
              hover:shadow-2xl hover:border-[#fbb03b]
              hover:-translate-y-2 hover:scale-[1.05]
              max-w-full
              mx-auto
              min-w-[180px]
              focus:outline-none focus-visible:ring-4 focus-visible:ring-[#fbb03b]/70
            `}
            aria-label={`${yemek.isim} detay sayfası`}
          >
            <div
              className="relative w-20 h-20 mb-5 rounded-xl border border-[#fcd299] bg-[#fff7ea] flex justify-center items-center
              transition-transform duration-300 ease-in-out group-hover:scale-110"
            >
              <img
                src={yemek.logo}
                alt={`${yemek.isim} logosu`}
                className="w-16 h-16 object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>

            <h2 className="text-xl font-extrabold text-[#a86000] mb-1 text-center truncate w-full">
              {yemek.isim}
            </h2>
            <p className="text-[#7a4e00] text-sm text-center line-clamp-3 min-h-[45px] mb-3 px-3">
              {yemek.aciklama}
            </p>
            <div className="flex items-center gap-1 text-[#fbb03b] font-semibold select-none justify-center mb-3">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-lg">{yemek.puan.toFixed(1)}</span>
              <span className="text-gray-400 text-xs">({yemek.yorumSayisi} yorum)</span>
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
