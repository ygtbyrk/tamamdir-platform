"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ChevronLeft } from "lucide-react";

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
    id: "oto-boyama",
    isim: "Oto Boyama",
    aciklama: "Araç boya ve kaporta hizmetleri.",
    logo: "/oto-boyama.png",
    puan: 4.5,
    yorumSayisi: 27,
  },
  {
    id: "oto-kurtarma",
    isim: "Oto Kurtarma",
    aciklama: "Yol yardım ve kurtarma hizmetleri.",
    logo: "/oto-kurtarma.png",
    puan: 4.6,
    yorumSayisi: 35,
  },
];

interface Props {
  params: {
    otoId: string;
  };
}

export default async function OtoDetail({ params }: Props) {
  const { otoId } = params;

  const oto = otolar.find((o) => o.id === otoId);

  if (!oto) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-10">
        <p className="text-xl font-semibold">Oto hizmeti bulunamadı.</p>
        <Link href="/kategori/oto" className="mt-4 text-blue-600 underline">
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
          href="/kategori/oto"
          className="inline-flex items-center text-[#00474f] font-semibold hover:text-[#002a30] transition-colors"
          aria-label="Oto listesine geri dön"
        >
          <ChevronLeft size={24} />
          <span className="ml-2">Oto Hizmetleri</span>
        </Link>
      </div>

      {/* Detay */}
      <div className="max-w-[1280px] w-full bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        <div className="relative w-40 h-40 rounded-xl border border-[#a6d1da] bg-[#d6f0f5]">
          <Image
            src={oto.logo}
            alt={`${oto.isim} logosu`}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-[#00474f] mb-4">{oto.isim}</h1>
          <p className="text-[#003637] text-lg mb-4">{oto.aciklama}</p>
          <div className="flex items-center gap-2 text-[#00bcd4] font-semibold">
            <Star className="h-6 w-6 fill-current" />
            <span className="text-2xl">{oto.puan.toFixed(1)}</span>
            <span className="text-gray-400 text-sm">({oto.yorumSayisi} yorum)</span>
          </div>
        </div>
      </div>
    </main>
  );
}
