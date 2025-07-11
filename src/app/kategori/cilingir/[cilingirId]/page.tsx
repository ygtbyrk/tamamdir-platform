"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft } from "lucide-react";

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
    id: "anahtarci",
    isim: "Anahtarcı Usta",
    aciklama: "Kapı açma, kilit değiştirme hizmetleri.",
    logo: "/anahtarci.png",
    puan: 4.7,
    yorumSayisi: 40,
  },
  {
    id: "kilitci-usta",
    isim: "Kilitçi Usta",
    aciklama: "Acil çilingir hizmetleri.",
    logo: "/cilingir-usta.png",
    puan: 4.6,
    yorumSayisi: 28,
    kapali: true,
  },
];

interface Props {
  params: {
    cilingirId: string;
  };
}

export default function CilingirDetail({ params }: Props) {
  const { cilingirId } = params;

  const cilingir = cilingirler.find((c) => c.id === cilingirId);

  if (!cilingir) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-10">
        <p className="text-xl font-semibold">Çilingir bulunamadı.</p>
        <Link href="/kategori/cilingir" className="mt-4 text-blue-600 underline">
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
          href="/kategori/cilingir"
          className="inline-flex items-center text-[#556ee6] font-semibold hover:text-[#2e3bb5] transition-colors"
          aria-label="Çilingir listesine geri dön"
        >
          <ChevronLeft size={24} />
          <span className="ml-2">Çilingirler</span>
        </Link>
      </div>

      {/* Detay */}
      <div className="max-w-[1280px] w-full bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        <div className="relative w-40 h-40 rounded-xl border border-[#afbfff] bg-[#d7dbff]">
          <Image
            src={cilingir.logo}
            alt={`${cilingir.isim} logosu`}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-[#556ee6] mb-4">{cilingir.isim}</h1>
          <p className="text-[#4051a0] text-lg mb-4">{cilingir.aciklama}</p>
          <div className="flex items-center gap-2 text-[#6c7efd] font-semibold">
            <Star className="h-6 w-6 fill-current" />
            <span className="text-2xl">{cilingir.puan.toFixed(1)}</span>
            <span className="text-gray-400 text-sm">({cilingir.yorumSayisi} yorum)</span>
          </div>
        </div>
      </div>
    </main>
  );
}
