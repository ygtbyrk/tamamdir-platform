"use client";
import Link from "next/link";

const restoranlar = [
  {
    id: "mudavim-doner",
    ad: "Müdavim Döner",
    aciklama: "Meşhur Ankara dönercisi – %100 dana etinden.",
    icon: "🥙"
  },
  {
    id: "sofra-kebap",
    ad: "Sofra Kebap",
    aciklama: "Odun ateşinde kebaplar ve lahmacun.",
    icon: "🍢"
  },
  {
    id: "tatlici-fiko",
    ad: "Tatlıcı Fiko",
    aciklama: "Baklava ve yöresel tatlılar.",
    icon: "🍮"
  },
  {
    id: "mavi-balik",
    ad: "Mavi Balık",
    aciklama: "Taze balık ve deniz ürünleri restoranı.",
    icon: "🐟"
  },
  {
    id: "kahvecim",
    ad: "Kahvecim",
    aciklama: "Gurme kahveler, kruvasanlar, tatlılar.",
    icon: "☕"
  },
];

export default function KategoriYemek() {
  return (
    <main className="min-h-screen bg-[#f6faff] pb-0">
      <section className="container mx-auto max-w-4xl px-4">
        {/* Ana Sayfa'ya Dön Linki */}
        <div className="my-4">
          <Link href="/" className="text-[#058d92] font-semibold inline-flex items-center gap-1 hover:text-[#035e65] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Ana Sayfa
          </Link>
        </div>

        <header className="text-center py-10 mb-7">
          <div className="text-4xl font-extrabold text-[#035e65] mb-1 tracking-tight">Restoranlar</div>
          <div className="text-[#058d92] text-lg font-semibold mb-2">En popüler Ankara restoranlarını keşfet!</div>
          <div className="text-[#607281] text-base font-medium mb-2">
            Menüye göz at, <span className="font-bold">siparişini site üzerinden hazırla</span> ve ister webden ister WhatsApp’tan tamamla.
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mb-12">
          {restoranlar.map((rest) => (
            <Link href={`/kategori/yemek/${rest.id}`} key={rest.id}>
              <div className="bg-white border border-[#e8ecee] rounded-2xl shadow-lg px-7 py-8 flex flex-col items-center text-center transition hover:shadow-2xl hover:scale-105 cursor-pointer">
                <div className="text-5xl mb-2">{rest.icon}</div>
                <div className="font-bold text-lg text-[#035e65] mb-1">{rest.ad}</div>
                <div className="text-sm text-[#6b7c91]">{rest.aciklama}</div>
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
