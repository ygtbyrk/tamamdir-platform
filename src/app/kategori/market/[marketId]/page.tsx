"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ChevronLeft } from "lucide-react";

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
    urunGorselleri: ["/sut.png", "/cola.png", "/ekmek.png"],
  },
  {
    id: "yesilmanav",
    isim: "Yeşil Manav",
    aciklama: "Taze meyve ve sebze, organik ürünler.",
    logo: "/yesil-manav.png",
    puan: 4.9,
    yorumSayisi: 54,
    urunGorselleri: ["/elma.png", "/domates.png", "/muz.png"],
  },
  {
    id: "sutlukayali",
    isim: "Sütlü Kayalı",
    aciklama: "Süt, yoğurt ve sütlü atıştırmalıklar.",
    logo: "/sutlu-kayali.png",
    puan: 4.8,
    yorumSayisi: 23,
    kapali: true,
    urunGorselleri: ["/sut.png", "/yogurt.png", "/peynir.png"],
  },
];

interface Props {
  params: {
    marketId: string;
  };
}

export default async function MarketDetail({ params }: Props) {
  const { marketId } = params;

  const market = marketler.find((m) => m.id === marketId);

  if (!market) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-10">
        <p className="text-xl font-semibold">Market bulunamadı.</p>
        <Link href="/kategori/market" className="mt-4 text-blue-600 underline">
          Geri dön
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] py-10 px-6 flex flex-col items-center">
      {/* Geri Dön */}
      <div className="max-w-[1280px] w-full mb-8">
        <Link
          href="/kategori/market"
          className="inline-flex items-center text-[#037d77] font-semibold hover:text-[#025a56] transition-colors"
          aria-label="Market listesine geri dön"
        >
          <ChevronLeft size={24} />
          <span className="ml-2">Marketler</span>
        </Link>
      </div>

      {/* Detay */}
      <div className="max-w-[1280px] w-full bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        <div className="relative w-40 h-40 rounded-xl border border-[#b7ded7] bg-[#d2f0e7]">
          <Image
            src={market.logo}
            alt={`${market.isim} logosu`}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-[#037d77] mb-4">{market.isim}</h1>
          <p className="text-[#025a56] text-lg mb-4">{market.aciklama}</p>
          <div className="flex items-center gap-2 text-[#49c9b5] font-semibold">
            <Star className="h-6 w-6 fill-current" />
            <span className="text-2xl">{market.puan.toFixed(1)}</span>
            <span className="text-gray-400 text-sm">({market.yorumSayisi} yorum)</span>
          </div>

          {/* Ürün Görselleri */}
          {market.urunGorselleri && (
            <div className="flex gap-2 mt-4 justify-center w-full px-3">
              {market.urunGorselleri.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${market.isim} ürün ${i + 1}`}
                  width={48}
                  height={48}
                  className="rounded-lg object-cover shadow-sm border border-gray-200"
                  loading="lazy"
                  draggable={false}
                />
              ))}
            </div>
          )}

          {market.kapali && (
            <div className="absolute inset-0 bg-[#025a56cc] rounded-2xl flex justify-center items-center z-10">
              <span className="text-white font-bold text-lg select-none">
                Kapalı
              </span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
