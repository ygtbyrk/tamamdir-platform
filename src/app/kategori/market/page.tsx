"use client";

import Link from "next/link";
import { Star, ChevronLeft } from "lucide-react";

const sloganGradient = "bg-gradient-to-r from-[#a0e9d8] via-[#bdf3e9] to-[#f9f7e8]";

interface Market {
  id: string;
  isim: string;
  aciklama: string;
  logo: string;
  puan: number;
  yorumSayisi: number;
  kapali?: boolean;
  urunGorselleri?: string[];
}

const marketler: Market[] = [
  {
    id: "anadolubakkal",
    isim: "Anadolu Bakkal",
    aciklama: "Mahallenizin samimi bakkalı. Hızlı servis, uygun fiyat.",
    logo: "/anadolu-bakkal.png",
    puan: 4.7,
    yorumSayisi: 88,
    urunGorselleri: ["/sut.jpg", "/cola.jpg", "/ekmek.jpg"],
  },
  {
    id: "yesilmanav",
    isim: "Yeşil Manav",
    aciklama: "Taze meyve ve sebze, organik ürünler.",
    logo: "/yesil-manav.png",
    puan: 4.9,
    yorumSayisi: 54,
    urunGorselleri: ["/elma.jpg", "/domates.jpg", "/muz.jpg"],
  },
  {
    id: "sutlukayali",
    isim: "Sütlü Kayalı",
    aciklama: "Süt, yoğurt ve sütlü atıştırmalıklar.",
    logo: "/sutlu-kayali.png",
    puan: 4.8,
    yorumSayisi: 23,
    kapali: true,
    urunGorselleri: ["/sut.jpg", "/yogurt.jpg", "/peynir.jpg"],
  },
];

export default function MarketListe() {
  return (
    <main className="min-h-screen bg-[#f8fafc] py-10 px-4 flex flex-col items-center">
      {/* Geri Dön */}
      <div className="max-w-[1280px] w-full mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#037d77] font-semibold hover:text-[#025a56] transition-colors"
          aria-label="Ana sayfaya geri dön"
        >
          <ChevronLeft size={24} />
          <span className="ml-2">Geri Dön</span>
        </Link>
      </div>

      {/* Slogan Kutusu */}
      <header
        className={`${sloganGradient} w-full mb-16 py-10 px-6 sm:px-16 rounded-3xl shadow-lg flex justify-center select-none`}
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#037d77] leading-tight tracking-tight max-w-[900px] text-center"
          style={{ fontFamily: "'League Spartan', sans-serif" }}
        >
          Ankara’da bugün <span className="text-[#ffb901]">neye ihtiyacın var?</span>
        </h1>
      </header>

      {/* Market Kartları */}
      <div className="max-w-[1280px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-0">
        {marketler.map((market) => (
          <Link
            key={market.id}
            href={`/kategori/market/${market.id}`}
            className={`
              relative flex flex-col items-center p-5 rounded-2xl
              bg-white shadow-md border border-[#b7ded7]
              cursor-pointer
              transition-transform duration-300 ease-in-out
              hover:shadow-xl hover:border-[#49c9b5]
              hover:-translate-y-1 hover:scale-[1.04]
              max-w-full
              mx-auto
              min-w-[180px]
              focus:outline-none focus-visible:ring-4 focus-visible:ring-[#49c9b5]/60
            `}
            aria-label={`${market.isim} market detay sayfası`}
          >
            <div
              className="relative w-20 h-20 mb-5 rounded-xl border border-[#b7ded7] bg-[#d2f0e7] flex justify-center items-center
              transition-transform duration-300 ease-in-out group-hover:scale-110"
            >
              <img
                src={market.logo}
                alt={`${market.isim} logosu`}
                className="w-16 h-16 object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>

            <h2 className="text-xl font-extrabold text-[#037d77] mb-1 text-center truncate w-full">
              {market.isim}
            </h2>
            <p className="text-[#025a56] text-sm text-center line-clamp-3 min-h-[45px] mb-3 px-3">
              {market.aciklama}
            </p>
            <div className="flex items-center gap-1 text-[#49c9b5] font-semibold select-none justify-center mb-3">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-lg">{market.puan.toFixed(1)}</span>
              <span className="text-gray-400 text-xs">({market.yorumSayisi} yorum)</span>
            </div>

            {/* Ürün Görselleri */}
            {market.urunGorselleri && (
              <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-thin scrollbar-thumb-[#49c9b5] scrollbar-track-[#d2f0e7]">
                {market.urunGorselleri.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${market.isim} ürün ${i + 1}`}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    loading="lazy"
                    draggable={false}
                  />
                ))}
              </div>
            )}

            {/* Kapalı Etiketi */}
            {market.kapali && (
              <div className="absolute inset-0 bg-[#025a56cc] rounded-2xl flex justify-center items-center">
                <span className="text-white font-bold text-lg select-none">
                  Kapalı
                </span>
              </div>
            )}

            {/* Tamamdır Öneriyor Rozeti */}
            <div className="absolute top-3 left-3 bg-[#ffb901] text-[#035e65] font-bold px-3 py-1 rounded-full text-sm shadow-md select-none z-20">
              Tamamdır Öneriyor
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
