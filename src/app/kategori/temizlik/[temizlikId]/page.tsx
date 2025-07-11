"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft } from "lucide-react";

interface Temizlik {
  id: string;
  isim: string;
  aciklama: string;
  logo: string;
  puan: number;
  yorumSayisi: number;
  kapali?: boolean;
}

const temizlikler: Temizlik[] = [
  {
    id: "temiz-ev",
    isim: "Temiz Ev",
    aciklama: "Ev temizliğinde profesyonel hizmet.",
    logo: "/temiz-ev.png",
    puan: 4.6,
    yorumSayisi: 45,
  },
  {
    id: "hizli-temizlik",
    isim: "Hızlı Temizlik",
    aciklama: "Hızlı ve güvenilir temizlik çözümleri.",
    logo: "/hizli-temizlik.png",
    puan: 4.7,
    yorumSayisi: 30,
    kapali: true,
  },
];

interface Props {
  params: {
    temizlikId: string;
  };
}

export default function TemizlikDetail({ params }: Props) {
  const { temizlikId } = params;

  const temizlik = temizlikler.find((t) => t.id === temizlikId);

  if (!temizlik) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-10">
        <p className="text-xl font-semibold">Temizlik hizmeti bulunamadı.</p>
        <Link href="/kategori/temizlik" className="mt-4 text-blue-600 underline">
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
          href="/kategori/temizlik"
          className="inline-flex items-center text-[#007ca5] font-semibold hover:text-[#005f7a] transition-colors"
          aria-label="Temizlik listesine geri dön"
        >
          <ChevronLeft size={24} />
          <span className="ml-2">Temizlik Hizmetleri</span>
        </Link>
      </div>

      {/* Detay */}
      <div className="max-w-[1280px] w-full bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        <div className="relative w-40 h-40 rounded-xl border border-[#9ee7ff] bg-[#e0f7ff]">
          <Image
            src={temizlik.logo}
            alt={`${temizlik.isim} logosu`}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-[#007ca5] mb-4">{temizlik.isim}</h1>
          <p className="text-[#005f7a] text-lg mb-4">{temizlik.aciklama}</p>
          <div className="flex items-center gap-2 text-[#00f2fe] font-semibold">
            <Star className="h-6 w-6 fill-current" />
            <span className="text-2xl">{temizlik.puan.toFixed(1)}</span>
            <span className="text-gray-400 text-sm">({temizlik.yorumSayisi} yorum)</span>
          </div>
        </div>
      </div>
    </main>
  );
}
