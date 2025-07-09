"use client";
import Link from "next/link";

const temizlikFirmalari = [
  {
    id: "temiz-evim",
    ad: "Temiz Evim",
    aciklama: "Profesyonel ev ve ofis temizliği.",
    icon: "/icons/temizlik.png",
    puan: 4.7,
    yorum: 112,
    acik: true,
    etiketler: ["Ev", "Ofis", "Koltuk"],
  },
  {
    id: "hizli-temizlik",
    ad: "Hızlı Temizlik",
    aciklama: "Acil temizlik hizmetleri, hızlı ve güvenilir.",
    icon: "/icons/hizli-temizlik.png",
    puan: 4.9,
    yorum: 78,
    acik: true,
    etiketler: ["Acil", "Güvenilir"],
  },
  {
    id: "organik-temiz",
    ad: "Organik Temiz",
    aciklama: "Çevre dostu ve doğal temizlik ürünleriyle hizmet.",
    icon: "/icons/organik-temiz.png",
    puan: 4.8,
    yorum: 64,
    acik: false,
    etiketler: ["Organik", "Çevre Dostu"],
  },
];

export default function TemizlikKategori() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] pb-0">
      <section className="container mx-auto max-w-4xl px-4">
        <div className="my-4">
          <Link href="/" className="text-[#035e65] underline text-sm font-semibold">
            &larr; Ana Sayfa
          </Link>
        </div>
        <header className="text-center py-10 mb-7">
          <div className="text-4xl font-extrabold text-[#035e65] mb-1 tracking-tight">Temizlik Hizmetleri</div>
          <div className="text-[#058d92] text-lg font-semibold mb-2">Profesyonel temizlik firmalarını keşfet!</div>
          <div className="text-[#607281] text-base font-medium mb-2">
            Hizmet al, <span className="font-bold">hızlı ve güvenilir temizlik için talep oluştur</span>.
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mb-12">
          {temizlikFirmalari.map((firma) => (
            <Link href={`/kategori/temizlik/${firma.id}`} key={firma.id}>
              <div
                className="bg-white border border-[#e7edf4] rounded-2xl shadow-md px-7 py-8 flex flex-col items-center text-center transition-transform duration-150 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                style={{ color: "#232832" }}
              >
                <img src={firma.icon} alt={firma.ad} className="w-14 h-14 mb-3 rounded-xl object-contain border border-[#e7edf4]" />
                <div className="font-bold text-lg text-[#035e65] mb-1">{firma.ad}</div>
                <div className="text-sm text-[#444b54] mb-1">{firma.aciklama}</div>
                <div className="flex items-center gap-1 text-[#f7b500] text-xs font-semibold justify-center mb-2">
                  <span>★ {firma.puan}</span>
                  <span className="text-[#607281]">({firma.yorum})</span>
                  <span className={`ml-2 px-2 py-0.5 rounded ${firma.acik ? "bg-[#d0fae4] text-[#0aa360]" : "bg-[#ffe5e5] text-[#c20d0d]"}`}>
                    {firma.acik ? "Aktif" : "Kapalı"}
                  </span>
                </div>
                <div className="flex gap-1 flex-wrap justify-center">
                  {firma.etiketler.map((et, i) => (
                    <span key={i} className="bg-[#e0f7fa] text-[#007c91] rounded px-2 py-0.5 text-xs font-medium">{et}</span>
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
