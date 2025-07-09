"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SiparisSonucPage() {
  const [sepet, setSepet] = useState<any[]>([]);
  const [restoran, setRestoran] = useState<any>(null);

  useEffect(() => {
    const sepetData = localStorage.getItem("tamamdirSepet");
    const restoranData = localStorage.getItem("tamamdirRestoran");

    if (sepetData) setSepet(JSON.parse(sepetData));
    if (restoranData) setRestoran(JSON.parse(restoranData));
  }, []);

  const toplam = sepet.reduce((t, u) => t + u.fiyat, 0);

  if (!restoran) {
    return (
      <main className="min-h-screen flex flex-col justify-center items-center bg-[#f6faff] px-4">
        <div className="text-center text-[#058d92] text-xl mb-4">Sipariş bilgisi bulunamadı.</div>
        <Link href="/kategori/yemek" className="text-[#035e65] underline">
          Restoranlara geri dön
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6faff] py-10 px-6 flex flex-col items-center">
      <div className="bg-white rounded-3xl shadow-lg max-w-xl w-full p-8">
        <h1 className="text-3xl font-bold text-[#035e65] mb-6 text-center">Sipariş Onayı</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#058d92] mb-2">{restoran.ad}</h2>
          <p className="text-[#607281]">{restoran.adres}</p>
        </div>

        <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto mb-6">
          {sepet.map((urun, i) => (
            <li key={i} className="flex justify-between py-3 text-[#232832]">
              <span>{urun.isim}</span>
              <span className="font-semibold">{urun.fiyat} TL</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-between font-bold text-lg text-[#035e65] mb-6 border-t border-gray-300 pt-3">
          <span>Toplam</span>
          <span>{toplam} TL</span>
        </div>

        <button
          onClick={() => alert("Siparişiniz alındı! (Demo)")}
          className="w-full bg-[#058d92] hover:bg-[#035e65] text-white font-semibold py-3 rounded-full transition"
        >
          Siparişi Onayla
        </button>

        <Link href="/kategori/yemek" className="block mt-6 text-center text-[#058d92] underline">
          Restoranlara geri dön
        </Link>
      </div>
    </main>
  );
}
