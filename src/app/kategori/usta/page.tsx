"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ustalar = [
  {
    id: "usta-ahmet",
    ad: "Usta Ahmet",
    aciklama: "Elektrik, su, tesisat ve boya işleri konusunda deneyimli usta.",
    icon: "/icons/tools.png",
    puan: 4.9,
    yorumSayisi: 95,
    acik: true,
    etiketler: ["Elektrik", "Su", "Boya"],
  },
  {
    id: "usta-mehmet",
    ad: "Usta Mehmet",
    aciklama: "Alanında uzman, güvenilir tadilat ustası.",
    icon: "/icons/tools2.png",
    puan: 4.7,
    yorumSayisi: 73,
    acik: true,
    etiketler: ["Tadilat", "Boyacı"],
  },
  // Daha fazla usta ekleyebilirsin
];

export default function UstaListesi() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] pb-8">
      <section className="container mx-auto max-w-4xl px-4">
        {/* Ana Sayfa butonu */}
        <div className="mb-6 flex justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#058d92] font-semibold hover:text-[#035e65] transition"
          >
            <ArrowLeft size={20} />
            Geri
          </Link>
        </div>

        <header className="text-center py-10 mb-7">
          <h1 className="text-4xl font-extrabold text-[#035e65] mb-1 tracking-tight">Ustalar</h1>
          <p className="text-[#058d92] text-lg font-semibold mb-2">Güvenilir ve deneyimli ustalar burada!</p>
          <p className="text-[#607281] text-base font-medium mb-2">
            İhtiyacınız olan ustayı seçin, iletişime geçin ve işinizi kolayca halledin.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mb-12">
          {ustalar.map((usta) => (
            <Link key={usta.id} href={`/kategori/usta/${usta.id}`}>
              <div
                className="bg-white border border-[#e7edf4] rounded-2xl shadow-md px-7 py-8 flex flex-col items-center text-center 
                transition-transform duration-150 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                style={{ color: "#232832" }}
              >
                <img
                  src={usta.icon || "/icons/tools.png"}
                  alt={usta.ad}
                  className="w-14 h-14 mb-3 rounded-xl object-contain border border-[#e7edf4]"
                  loading="lazy"
                  draggable={false}
                />
                <div className="font-bold text-lg text-[#035e65] mb-1">{usta.ad}</div>
                <div className="text-sm text-[#444b54] mb-1">{usta.aciklama}</div>
                <div className="flex items-center gap-1 text-[#f7b500] text-xs font-semibold justify-center mb-2">
                  <span>★ {usta.puan}</span>
                  <span className="text-[#607281]">({usta.yorumSayisi})</span>
                  <span
                    className={`ml-2 px-2 py-0.5 rounded ${
                      usta.acik ? "bg-[#d0fae4] text-[#0aa360]" : "bg-[#ffe5e5] text-[#c20d0d]"
                    }`}
                  >
                    {usta.acik ? "Aktif" : "Kapalı"}
                  </span>
                </div>
                <div className="flex gap-1 flex-wrap justify-center">
                  {usta.etiketler.map((et, i) => (
                    <span key={i} className="bg-[#e0f7fa] text-[#007c91] rounded px-2 py-0.5 text-xs font-medium">
                      {et}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-8 pb-4 text-center text-[#a1a6b3] text-xs border-t border-[#e8ecee] pt-3">
          <div>© {new Date().getFullYear()} Tamamdır | Powered by Tamamdır Teknoloji A.Ş. | info@tamamdirapp.com</div>
        </footer>
      </section>
    </main>
  );
}
