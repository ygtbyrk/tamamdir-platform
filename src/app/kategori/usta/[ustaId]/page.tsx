"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ChevronLeft } from "lucide-react";

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

interface Props {
  params: {
    ustaId: string;
  };
}

export default async function UstaDetail({ params }: Props) {
  const { ustaId } = params;

  const usta = ustalar.find((u) => u.id === ustaId);

  if (!usta) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-10">
        <p className="text-xl font-semibold">Usta bulunamadı.</p>
        <Link href="/kategori/usta" className="mt-4 text-blue-600 underline">
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
          href="/kategori/usta"
          className="inline-flex items-center text-[#2c467d] font-semibold hover:text-[#1b305b] transition-colors"
          aria-label="Usta listesine geri dön"
        >
          <ChevronLeft size={24} />
          <span className="ml-2">Ustalar</span>
        </Link>
      </div>

      {/* Detay */}
      <div className="max-w-[1280px] w-full bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        <div className="relative w-40 h-40 rounded-xl border border-[#a9c8ff] bg-[#e7f0ff]">
          <Image
            src={usta.logo}
            alt={`${usta.isim} logosu`}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-[#2c467d] mb-4">{usta.isim}</h1>
          <p className="text-[#47649f] text-lg mb-4">{usta.aciklama}</p>
          <div className="flex items-center gap-2 text-[#7fb3ff] font-semibold">
            <Star className="h-6 w-6 fill-current" />
            <span className="text-2xl">{usta.puan.toFixed(1)}</span>
            <span className="text-gray-400 text-sm">({usta.yorumSayisi} yorum)</span>
          </div>
        </div>
      </div>
    </main>
  );
}
