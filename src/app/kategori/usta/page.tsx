"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ChevronLeft } from "lucide-react";

const ustaGradient = "bg-gradient-to-r from-[#0d1f3c] via-[#1b305b] to-[#2c467d]";

interface Usta {
  id: string;
  isim: string;
  aciklama: string;
  logo: string;
  puan: number;
  yorumSayisi: number;
  kapali?: boolean;
}

const ustalar: Usta[] = [
  {
    id: "usta-ali",
    isim: "Usta Ali",
    aciklama: "Elektrik, tesisat ve tamirat işleri.",
    logo: "/usta-ali.png",
    puan: 4.9,
    yorumSayisi: 45,
  },
  {
    id: "usta-mehmet",
    isim: "Usta Mehmet",
    aciklama: "Mobilya ve dekorasyon ustası.",
    logo: "/usta-mehmet.png",
    puan: 4.6,
    yorumSayisi: 33,
  },
];

export default function UstaPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] py-10 px-6 flex flex-col items-center">
      {/* Geri Dön */}
      <div className="max-w-[1280px] w-full mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#2c467d] font-semibold hover:text-[#1b305b] transition-colors"
          aria-label="Ana sayfaya geri dön"
        >
          <ChevronLeft size={24} />
          <span className="ml-2">Geri Dön</span>
        </Link>
      </div>

      {/* Slogan Kutusu */}
      <header
        className={`${ustaGradient} w-full mb-16 py-8 px-6 sm:px-16 rounded-3xl shadow-2xl flex justify-center select-none`}
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight tracking-tight max-w-[900px] text-center"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Ankara’da bugün{" "}
          <span className="text-[#7fb3ff] font-extrabold">neye ihtiyacın var?</span>
        </h1>
      </header>

      {/* Kartlar */}
      <div className="max-w-[1280px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-0">
        {ustalar.map((usta) => (
          <Link
            key={usta.id}
            href={`/kategori/usta/${usta.id}`}
            className={`
              relative flex flex-col items-center p-5 rounded-2xl
              bg-gradient-to-br from-white to-[#f0f7ff]
              shadow-lg border border-transparent
              cursor-pointer
              transition-transform duration-400 ease-in-out
              hover:shadow-2xl hover:border-[#7fb3ff]
              hover:-translate-y-2 hover:scale-[1.05]
              max-w-full
              mx-auto
              min-w-[180px]
              focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7fb3ff]/70
            `}
            aria-label={`${usta.isim} detay sayfası`}
          >
            <div
              className="relative w-20 h-20 mb-5 rounded-xl border border-[#a9c8ff] bg-[#e7f0ff] flex justify-center items-center
              transition-transform duration-300 ease-in-out group-hover:scale-110"
            >
              <Image
                src={usta.logo}
                alt={`${usta.isim} logosu`}
                width={64}
                height={64}
                priority
                draggable={false}
              />
            </div>

            <h2 className="text-xl font-extrabold text-[#2c467d] mb-1 text-center truncate w-full">
              {usta.isim}
            </h2>
            <p className="text-[#47649f] text-sm text-center line-clamp-3 min-h-[45px] mb-3 px-3">
              {usta.aciklama}
            </p>
            <div className="flex items-center gap-1 text-[#7fb3ff] font-semibold select-none justify-center mb-3">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-lg">{usta.puan.toFixed(1)}</span>
              <span className="text-gray-400 text-xs">({usta.yorumSayisi} yorum)</span>
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
