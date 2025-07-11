"use client";
import Link from "next/link";
import Image from "next/image"; // import eklendi
import { Search } from "lucide-react";
import { useState } from "react";

const categories = [
  { icon: "/icons/fast-food.png", label: "Yemek", url: "/kategori/yemek" },
  { icon: "/icons/vegetable.png", label: "Market", url: "/kategori/market" },
  { icon: "/icons/products.png", label: "Temizlik", url: "/kategori/temizlik" },
  { icon: "/icons/tools.png", label: "Usta", url: "/kategori/usta" },
  { icon: "/icons/maintenance.png", label: "Oto", url: "/kategori/oto" },
  { icon: "/icons/key-set.png", label: "Çilingir", url: "/kategori/cilingir" },
];

// Market sayfasından alınan renk geçişi ve font (turkuaz-sarı tonlar)
const marketSloganGradient = "bg-gradient-to-r from-[#005555] via-[#007a7a] to-[#00b3b3]";

export default function Home() {
  const [aramaMetni, setAramaMetni] = useState("");

  const filtrelenmisKategoriler = categories.filter(cat =>
    cat.label.toLowerCase().includes(aramaMetni.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col">
      {/* NAVBAR */}
      <nav className="w-full flex justify-between items-center px-8 py-5 bg-white shadow-sm sticky top-0 z-30">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/tamamdirlogo.png"
            alt="Tamamdır"
            width={56}
            height={56}
            className="rounded-xl border"
            priority
          />
          <span
            className="font-league font-light lowercase text-4xl tracking-tight"
            style={{ color: "#008080", letterSpacing: "-0.03em", lineHeight: 1 }}
          >
            tamamdır
          </span>
        </Link>
        {/* Sağ üst linkler */}
        <div className="flex gap-4 items-center font-semibold text-sm">
          <a
            href="https://wa.me/905451164506"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] hover:bg-[#25D366] hover:text-white px-4 py-2 rounded-lg transition duration-300 shadow-sm flex items-center gap-2"
            style={{ fontFamily: "inherit" }}
          >
            <Search className="text-white" size={20} />
            WhatsApp
          </a>

          <Link href="/giris" className="text-[#058d92] hover:bg-[#058d92] hover:text-white px-4 py-2 rounded-lg transition duration-300 shadow-sm">
            Üye Girişi
          </Link>

          <Link href="/kayit" className="text-[#ffb901] hover:bg-[#ffb901] hover:text-white px-4 py-2 rounded-lg transition duration-300 shadow-sm">
            Üye Ol
          </Link>

          <Link href="/esnaf" className="text-[#303036] hover:bg-[#303036] hover:text-white px-4 py-2 rounded-lg transition duration-300 shadow-sm">
            Esnaf Girişi
          </Link>
        </div>
      </nav>

      {/* ANA EKRAN - SLOGAN market renk geçişi ve fontu ile */}
      <section
        className={`
          relative flex flex-col items-center justify-center
          pt-14 pb-14 overflow-hidden
          ${marketSloganGradient}
          w-full
          min-h-[220px]
        `}
      >
        {/* Ankara şehir silüeti */}
        <Image
          src="/img/ankara-siluet.svg"
          alt="Ankara Silüeti"
          className="absolute left-1/2 top-0 -translate-x-1/2 opacity-10 w-[95vw] pointer-events-none select-none"
          width={1000}
          height={200}
          priority
        />

        {/* Başlık + Arama */}
        <div className="flex flex-col items-center z-10 w-full max-w-xl px-6">
          <h1
            className="text-4xl md:text-6xl font-black text-white text-center leading-tight"
            style={{ letterSpacing: "-0.02em", lineHeight: 1, fontFamily: "'League Spartan', sans-serif" }}
          >
            Ankara’da bugün{" "}
            <span
              className="font-extrabold text-[#ffb901]"
              style={{ filter: "drop-shadow(0 0 3px rgba(0,0,0,0.3))" }}
            >
              neye ihtiyacın var?
            </span>
          </h1>
          <div className="w-full mt-8 flex items-center bg-white rounded-3xl shadow-md px-6 py-5 gap-4 border-2 border-[#e3e8f4] focus-within:border-[#008080] focus-within:shadow-[0_0_10px_#008080aa] transition-shadow duration-300">
            <Search className="text-[#008080]" size={32} />
            <input
              type="text"
              className="w-full outline-none bg-transparent text-xl font-semibold text-[#273042]"
              placeholder="Hizmet ara: Temizlik, yemek, oto, çilingir..."
              value={aramaMetni}
              onChange={(e) => setAramaMetni(e.target.value)}
            />
          </div>
          <div className="flex gap-4 md:gap-6 mt-6">
            {filtrelenmisKategoriler.length > 0 ? (
              filtrelenmisKategoriler.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.url}
                  className="
                    flex flex-col items-center justify-center px-5 py-4 rounded-3xl
                    bg-white border border-[#edf3f8] shadow-md hover:shadow-xl transition
                    text-[#374151] hover:bg-[#f2f7fa] text-base font-bold
                    focus:outline-none
                    transform hover:-translate-y-1 hover:scale-105
                  "
                  style={{ minWidth: 90, minHeight: 90 }}
                >
                  <Image
                    src={cat.icon}
                    alt={cat.label}
                    width={48}
                    height={48}
                    className="mb-2 object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                  <span>{cat.label}</span>
                </Link>
              ))
            ) : (
              <div className="text-[#607281] font-semibold mt-3">Kategori bulunamadı.</div>
            )}
          </div>
        </div>
      </section>

      {/* Esnaf Katılım Kutusu */}
      <div className="mx-auto max-w-md mt-3 mb-8 px-8 py-6 rounded-3xl bg-gradient-to-r from-[#ffb901] to-[#f7b500] shadow-xl cursor-pointer hover:from-[#f7b500] hover:to-[#ffb901] transition-all duration-300 select-none">
        <a
          href="https://forms.gle/fAbC1apUN2yrSAPC6"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-[#232832] font-extrabold text-xl transition hover:underline"
        >
          Esnaf mısın? <span className="text-[#035e65]">Bize katıl!</span>
        </a>
      </div>

      {/* Ankara Fotoğrafı Alt Kısmı */}
      <div
        className="relative w-full max-w-6xl mx-auto mb-8 overflow-hidden rounded-3xl shadow-lg"
        style={{ height: 180 }}
      >
        <Image
          src="/img/ankara-photoo.jpg"
          alt="Ankara Fotoğrafı Alt Kısmı"
          fill
          style={{ objectFit: "cover", objectPosition: "center 90%" }}
          priority
        />
        <Image
          src="/img/ataturk.png"
          alt="Atatürk PNG"
          width={200}
          height={100}
          className="absolute bottom-0 left-5"
          style={{ filter: "drop-shadow(2px 4px 3px rgba(0,0,0,0.3))" }}
          priority
        />
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-6 mt-auto text-center text-sm text-gray-700 flex flex-col md:flex-row justify-center items-center gap-6 border-t border-gray-300">
        <div>© {new Date().getFullYear()} Tamamdır | Powered by TamamdırApp</div>
        <nav className="flex gap-6">
          <Link href="/cerezler" className="hover:text-[#058d92] transition-colors duration-300">Çerezler ve Gizlilik</Link>
          <Link href="/kvkk" className="hover:text-[#058d92] transition-colors duration-300">KVKK</Link>
          <Link href="/sartlar" className="hover:text-[#058d92] transition-colors duration-300">Kullanım Şartları</Link>
        </nav>
      </footer>
    </main>
  );
}
