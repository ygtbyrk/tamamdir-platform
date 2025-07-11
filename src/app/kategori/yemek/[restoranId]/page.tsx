"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft } from "lucide-react";

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

interface Props {
  params: {
    restoranId: string;
  };
}

export default function RestoranDetail({ params }: Props) {
  const { restoranId } = params;

  const restoran = yemekler.find((r) => r.id === restoranId);

  if (!restoran) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-10">
        <p className="text-xl font-semibold">Restoran bulunamadı.</p>
        <Link href="/kategori/yemek" className="mt-4 text-blue-600 underline">
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
          href="/kategori/yemek"
          className="inline-flex items-center text-[#a60e2b] font-semibold hover:text-[#7a071a] transition-colors"
          aria-label="Yemek listesine geri dön"
        >
          <ChevronLeft size={24} />
          <span className="ml-2">Yemekler</span>
        </Link>
      </div>

      {/* Detay */}
      <div className="max-w-[1280px] w-full bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        <div className="relative w-40 h-40 rounded-xl border border-[#fcd299] bg-[#fff7ea]">
          <Image
            src={restoran.logo}
            alt={`${restoran.isim} logosu`}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-[#a60e2b] mb-4">{restoran.isim}</h1>
          <p className="text-[#7a0b20] text-lg mb-4">{restoran.aciklama}</p>
          <div className="flex items-center gap-2 text-[#fbb03b] font-semibold">
            <Star className="h-6 w-6 fill-current" />
            <span className="text-2xl">{restoran.puan.toFixed(1)}</span>
            <span className="text-gray-400 text-sm">({restoran.yorumSayisi} yorum)</span>
          </div>
        </div>
      </div>
    </main>
  );
}
