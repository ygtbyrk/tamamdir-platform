"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, ShoppingCart, X, MapPin, Clock } from "lucide-react";

type Hizmet = {
  id: number;
  isim: string;
  aciklama: string;
  fiyat: number;
};

type Yorum = {
  ad: string;
  puan: number;
  metin: string;
};

type UstaDetay = {
  ad: string;
  aciklama: string;
  logo?: string;
  puan: number;
  yorumSayisi: number;
  acik: boolean;
  adres: string;
  saat: string;
  etiketler: string[];
  hizmetler: Hizmet[];
  yorumlar: Yorum[];
};

const ustaDetaylari: Record<string, UstaDetay> = {
  "usta-ahmet": {
    ad: "Usta Ahmet",
    aciklama: "Elektrik, su, tesisat ve boya işleri konusunda deneyimli usta.",
    logo: "/icons/tools.png",
    puan: 4.9,
    yorumSayisi: 95,
    acik: true,
    adres: "Kızılay Mah. Tadilat Sok. No:12",
    saat: "08:00 - 20:00",
    etiketler: ["Elektrik", "Su", "Boya"],
    hizmetler: [
      { id: 1, isim: "Elektrik Tesisatı", aciklama: "Ev ve iş yeri elektrik tesisatı kurulumu", fiyat: 400 },
      { id: 2, isim: "Su Tesisatı Tamiri", aciklama: "Tesisat arızaları ve onarımı", fiyat: 350 },
      { id: 3, isim: "Boya Badana", aciklama: "Duvar boyama ve badana işleri", fiyat: 500 },
    ],
    yorumlar: [
      { ad: "Ali V.", puan: 5, metin: "Çok profesyonel ve hızlı çalıştı." },
      { ad: "Fatma K.", puan: 4, metin: "İşçilik çok iyi, fiyatlar makul." },
    ],
  },
  // Diğer ustalar buraya eklenebilir
};

type Props = {
  params: {
    ustaId: string;
  };
};

export default function UstaDetay({ params }: Props) {
  const data = ustaDetaylari[params.ustaId];

  const [sepet, setSepet] = useState<Hizmet[]>([]);
  const [sepetAcik, setSepetAcik] = useState(false);

  if (!data) {
    return (
      <main className="min-h-screen flex flex-col justify-center items-center bg-[#f5f8fc]">
        <div className="text-xl text-[#058d92]">Usta bulunamadı.</div>
        <Link href="/kategori/usta" className="text-[#035e65] mt-3 underline">
          Geri dön
        </Link>
      </main>
    );
  }

  const sepeteEkle = (hizmet: Hizmet) => {
    setSepet([...sepet, hizmet]);
    setSepetAcik(true);
  };

  const sepettenKaldir = (index: number) => {
    setSepet(sepet.filter((_, i) => i !== index));
  };

  const toplam = sepet.reduce((t, u) => t + u.fiyat, 0);

  return (
    <main className="min-h-screen bg-[#f5f8fc]">
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-16">
        <Link href="/kategori/usta" className="text-[#058d92] text-sm mb-3 inline-block">
          &larr; Tüm Ustalar
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex flex-col sm:flex-row gap-5 border border-[#e7edf4]">
          <img
            src={data.logo || "/icons/tools.png"}
            alt={data.ad}
            className="w-24 h-24 rounded-2xl object-contain border border-[#e7edf4]"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-[#035e65]">{data.ad}</h1>
              <span
                className={`px-2 py-1 rounded-lg text-xs font-bold ${
                  data.acik ? "bg-[#d0fae4] text-[#0aa360]" : "bg-[#ffe5e5] text-[#c20d0d]"
                }`}
              >
                {data.acik ? "Aktif" : "Kapalı"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#f7b500] mb-2">
              <Star size={18} fill="#f7b500" strokeWidth={1} />
              <span className="font-semibold">{data.puan}</span>
              <span className="text-[#607281] text-xs ml-2">({data.yorumSayisi} yorum)</span>
            </div>
            <div className="flex items-center gap-2 text-[#058d92] text-sm mb-1">
              <MapPin size={16} /> {data.adres}
            </div>
            <div className="flex items-center gap-2 text-[#6b7c91] text-xs">{data.saat}</div>
            <div className="flex gap-2 mt-1">
              {data.etiketler.map((et, i) => (
                <span
                  key={i}
                  className="bg-[#e0f7fa] text-[#007c91] rounded px-2 py-0.5 text-xs font-medium"
                >
                  {et}
                </span>
              ))}
            </div>
            <div className="text-[#607281] text-sm mt-2">{data.aciklama}</div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#035e65] mb-3">Hizmetler</h2>
          <div className="grid grid-cols-1 gap-4">
            {data.hizmetler.map((hizmet) => (
              <div
                key={hizmet.id}
                className="flex items-center justify-between bg-white border border-[#e7edf4] rounded-xl p-4 shadow-sm"
              >
                <div>
                  <div className="font-bold text-[#035e65]">{hizmet.isim}</div>
                  <div className="text-xs text-[#607281]">{hizmet.aciklama}</div>
                  <div className="text-[#058d92] font-bold">{hizmet.fiyat} TL</div>
                </div>
                <button
                  onClick={() => sepeteEkle(hizmet)}
                  className="ml-4 bg-[#058d92] hover:bg-[#035e65] text-white rounded-full px-3 py-2 text-xs font-bold flex items-center gap-1"
                >
                  <ShoppingCart size={16} /> Sepete Ekle
                </button>
              </div>
            ))}
          </div>
        </div>

        {sepetAcik && (
          <div className="fixed top-0 right-0 w-full sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#e7edf4] z-30 p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-[#035e65]">Sepetim</h3>
              <button onClick={() => setSepetAcik(false)} className="text-[#607281]">
                <X size={22} />
              </button>
            </div>
            {sepet.length === 0 ? (
              <div className="text-[#607281] text-sm text-center py-8">Sepetiniz boş.</div>
            ) : (
              <ul>
                {sepet.map((u, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center py-2 border-b last:border-b-0"
                  >
                    <span>{u.isim}</span>
                    <span>
                      <b>{u.fiyat} TL</b>
                      <button
                        className="ml-2 text-[#c20d0d]"
                        onClick={() => sepettenKaldir(i)}
                        title="Kaldır"
                      >
                        <X size={16} />
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex justify-between font-bold mt-2">
              <span>Toplam</span>
              <span>{toplam} TL</span>
            </div>
            <button className="w-full bg-[#058d92] text-white font-semibold py-2 rounded-full mt-1">
              Siparişi Onayla (Demo)
            </button>
          </div>
        )}

        <div className="mt-12">
          <h2 className="text-xl font-bold text-[#035e65] mb-2">Son Yorumlar</h2>
          <div className="space-y-3">
            {data.yorumlar.map((y, i) => (
              <div
                key={i}
                className="bg-white border border-[#e7edf4] rounded-xl p-4 shadow flex items-center gap-3"
                style={{ color: "#232832" }}
              >
                <img
                  src={`https://randomuser.me/api/portraits/thumb/${i % 2 === 0 ? "women" : "men"}/${
                    20 + i
                  }.jpg`}
                  className="w-10 h-10 rounded-full border border-[#e7edf4]"
                  alt="Kullanıcı avatar"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <Star size={14} fill="#f7b500" strokeWidth={1} />
                    <span className="font-bold">{y.puan}</span>
                    <span className="text-xs ml-2">{y.ad}</span>
                  </div>
                  <div className="text-sm">{y.metin}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="text-center mb-4 text-[#a1a6b3] text-xs border-t pt-3">
        <div>
          © {new Date().getFullYear()} Tamamdır | Powered by Tamamdır Teknoloji A.Ş.
          <span className="mx-2">|</span>
          <a href="/kvkk" className="underline">
            KVKK
          </a>
          <span className="mx-2">|</span>
          <a href="/sartlar" className="underline">
            Kullanım Şartları
          </a>
          <span className="mx-2">|</span>
          <a href="mailto:info@tamamdirapp.com" className="underline">
            Mail
          </a>
          <span className="mx-2">|</span>
          <a href="https://instagram.com/tamamdirapp" target="_blank">
            Instagram
          </a>
        </div>
      </footer>
    </main>
  );
}

