"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Search, ChevronRight, ChevronLeft } from "lucide-react";

const categories = [
  { icon: "/icons/fast-food.png", label: "Yemek", url: "/kategori/yemek" },
  { icon: "/icons/vegetable.png", label: "Market", url: "/kategori/market" },
  { icon: "/icons/products.png", label: "Temizlik", url: "/kategori/temizlik" },
  { icon: "/icons/tools.png", label: "Usta", url: "/kategori/usta" },
  { icon: "/icons/maintenance.png", label: "Oto", url: "/kategori/oto" },
  { icon: "/icons/key-set.png", label: "Çilingir", url: "/kategori/cilingir" },
  { icon: "/icons/laundry.png", label: "Ev İçi Hizmetler", url: "/kategori/ev-ici-hizmetler" },
  { icon: "/icons/pet.png", label: "Pet", url: "/kategori/pet" },
  { icon: "/icons/barber.png", label: "Kuaför / Berber", url: "/kategori/kuafor-berber" },
  { icon: "/icons/courier.png", label: "Kurye / Kargo", url: "/kategori/kurye-kargo" },
  { icon: "/icons/education.png", label: "Özel Ders", url: "/kategori/ozel-ders" },
  { icon: "/icons/event.png", label: "Etkinlik / Düğün", url: "/kategori/etkinlik-dugun" },
  { icon: "/icons/moving-truck.png", label: "Nakliyat", url: "/kategori/nakliyat" }
];

const marketSloganGradient = "bg-gradient-to-r from-[#005555] via-[#007a7a] to-[#00b3b3]";

export default function Home() {
  const [aramaMetni, setAramaMetni] = useState("");
  const router = useRouter();
  const scrollRef = useRef(null);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".autocomplete-container")) {
        setSearchSuggestions([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filtrelenmisKategoriler = aramaMetni === ""
    ? categories
    : categories.filter(cat =>
        cat.label.toLowerCase().includes(aramaMetni.toLowerCase())
      );

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const hedef = filtrelenmisKategoriler[0];
      if (hedef) router.push(hedef.url);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setAramaMetni(value);
    if (value.length > 0) {
      setSearchSuggestions(categories.filter(cat =>
        cat.label.toLowerCase().includes(value.toLowerCase())
      ));
    } else {
      setSearchSuggestions([]);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const isSearching = aramaMetni.trim() !== "";

  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col overflow-x-hidden overflow-y-visible">
      <Navbar />

      <section className={`relative flex flex-col items-center justify-center pt-14 pb-10 overflow-visible ${marketSloganGradient} w-full`}>
        <div className="flex flex-col items-center z-10 w-full max-w-6xl px-4 sm:px-6">
          <h1 className="text-6xl md:text-7xl font-black text-white text-center leading-tight" style={{ letterSpacing: "-0.02em", lineHeight: 1.1, fontFamily: "'League Spartan', sans-serif" }}>
            Ankara’da bugün <br className="hidden md:block" />
            <span className="font-extrabold text-[#ffb901]" style={{ filter: "drop-shadow(0 0 3px rgba(0,0,0,0.3))" }}>
              neye ihtiyacın var?
            </span>
          </h1>
          <div className="w-full max-w-lg mx-auto mt-8 flex flex-col gap-2 relative autocomplete-container">
            <div className="flex items-center bg-white rounded-3xl shadow-lg px-5 py-3 gap-3 border-2 border-[#e3e8f4] focus-within:border-[#008080] focus-within:shadow-[0_0_12px_#008080aa] hover:shadow-[0_0_12px_#00808055] transition-shadow duration-300">
              <Search className="text-[#008080]" size={24} />
              <input
                type="text"
                className="w-full outline-none bg-transparent text-base font-semibold text-[#273042] font-spartan"
                placeholder="Hizmet ara: Temizlik, yemek, oto, çilingir..."
                value={aramaMetni}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
              />
            </div>
       
          </div>

          <div className="relative w-full mt-6 px-4" style={{ overflow: "visible" }}>
            <div
              className="absolute left-[-44px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition"
              onClick={scrollLeft}
            >
              <ChevronLeft className="text-[#008080]" size={24} />
            </div>

            <div
              ref={scrollRef}
              className={`flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide min-w-0 snap-x snap-mandatory ${
                isSearching ? "justify-center" : "justify-start"
              }`}
              style={{ scrollPaddingInline: "2rem" }}
            >
              {filtrelenmisKategoriler.map((cat) => (
                <Link
                  key={cat.label}
                  href={cat.url}
                  className="flex flex-col items-center justify-center px-5 py-4 rounded-3xl bg-white border border-[#edf3f8] shadow-md hover:shadow-xl text-[#374151] hover:bg-[#f2f7fa] text-sm font-semibold focus:outline-none transform transition-transform duration-300 hover:scale-105 hover:-translate-y-[4px] flex-shrink-0 snap-center hover:z-20"
                  style={{ width: 100, height: 100 }}
                >
                  <img
                    src={cat.icon}
                    alt={cat.label}
                    className="mb-2 w-10 h-10 object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                  <span>{cat.label}</span>
                </Link>
              ))}
            </div>

            <div
              className="absolute right-[-44px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md cursor-pointer hover:scale-110 transition"
              onClick={scrollRight}
            >
              <ChevronRight className="text-[#008080]" size={24} />
            </div>
          </div>

          <div className="relative w-full overflow-hidden mt-6 h-10">
  <div className="marquee whitespace-nowrap flex gap-12">
    {[
      "112 Aktif Restoran Partneri",
      "14 Yerel Market İş Ortağı",
      "21 Uzman Servis Ekibi",
      "11 Temizlik Ekibi",
      "7 Acil Çözüm Ortağı",
      "8 Sertifikalı Eğitmen",
      "5 Oto Destek Uzmanı",
      "9 Kurye & Kargo İş Ortağı",
      "4 Ev İçi Bakım Ekibi",
      "3 Düğün Organizasyon Hizmeti"
    ].concat([
      "112 Aktif Restoran Partneri",
      "14 Yerel Market İş Ortağı",
      "21 Uzman Servis Ekibi",
      "11 Temizlik Ekibi",
      "7 Acil Çözüm Ortağı",
      "8 Sertifikalı Eğitmen",
      "5 Oto Destek Uzmanı",
      "9 Kurye & Kargo İş Ortağı",
      "4 Ev İçi Bakım Ekibi",
      "3 Düğün Organizasyon Hizmeti"
    ]).map((text, index) => (
      <span key={index} className="inline-block px-6 py-2 rounded-xl bg-[#007a7a]/80 shadow-md text-white text-sm font-spartan">
        {text}
      </span>
    ))}
  </div>
</div>
        </div>
      </section>
            {/* ESNAF CTA */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-8 mb-12 max-w-6xl mx-auto font-league">
{/* Esnaf mısın Kartı */}
<div className="group relative px-8 py-10 rounded-3xl text-white shadow-2xl overflow-hidden border border-white/30 bg-gradient-to-br from-[#e8a800] via-[#ffc107] to-[#ffe066] transition-transform duration-200 ease-out transform hover:scale-[1.05] hover:shadow-[0_0_40px_rgba(255,193,7,0.25)] sm:col-span-2 lg:col-span-1">
  <span className="absolute top-3 left-3 bg-white text-[#008080] text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
    İş Ortağı
  </span>
  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out">
    <img src="/icons/megaphone.png" alt="Duyuru" className="w-60 h-60 opacity-7 group-hover:scale-[1.05]" />
  </div>
  <div className="relative z-10 flex flex-col items-center text-center space-y-5 justify-center h-full">
    <div className="text-4xl font-black tracking-tight text-[#008080] drop-shadow flex items-center gap-3">
      <img src="/icons/megaphone.png" alt="Megafon" className="w-8 h-8" />
      <span>Esnaf mısın?</span>
    </div>
    <p className="text-base text-[#444444] font-medium leading-snug max-w-sm">
    <p className="text-[25px] font-medium">Tamamdır'a katıl.</p>
    </p>
    <a
      href="https://forms.gle/fAbC1apUN2yrSAPC6"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-gradient-to-r from-[#f4c430] to-[#ffb800] text-[#333] px-12 py-4 rounded-full font-semibold text-base shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
    >
      Hemen Başvur
    </a>
  </div>
</div>
{/* WhatsApp Kartı */}
<div className="group relative px-8 py-10 rounded-3xl text-white shadow-xl overflow-hidden border border-white/20 bg-gradient-to-br from-[#155e4b] via-[#1e7c5a] to-[#2fa472] transition-transform duration-200 ease-out hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,255,200,0.2)]">
  <span className="absolute top-2 left-2 bg-white text-[#1f9d55] text-[11px] font-bold px-3 py-1 rounded-full shadow-md z-20">
    1.0
  </span>
  <div className="absolute inset-0 flex items-center justify-center">
    <img src="/icons/whatsapp-big.png" alt="WP" className="w-60 h-60 opacity-15 blur-sm group-hover:scale-[1.05] transition-transform duration-300" />
  </div>
  <div className="relative z-10 flex flex-col items-center text-center space-y-5 justify-center h-full">
    <div className="text-4xl font-black tracking-tight drop-shadow flex items-center gap-3">
      <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-15 h-15" />
      <span>  TamamdırApp WhatsApp’ta!</span>
    </div>
    <p className="text-base text-white/100 font-medium leading-snug max-w-sm">
      Web'den daha hızlı deneyim.
    </p>
    <a
      href="https://wa.me/905451164506?text=WhatsApp%20Üzerinden%20Devam%20Etmek%20İstiyorum !"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#1c8066] hover:bg-[#249c7f] text-white px-12 py-4 rounded-full font-semibold text-base shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
    >
      Hemen Başla
    </a>
  </div>
</div>
{/* Tamamdır İlanlar */}
<div className="group relative px-6 py-8 rounded-3xl text-white shadow-xl overflow-hidden border border-white/20 bg-white/0 backdrop-blur-xl transition-transform duration-200 ease-out hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]">
  <span className="absolute top-3 left-3 bg-white text-[#bab6b6] text-[12px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
    Yeni
  </span>
  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out">
    <img
      src="/icons/tag.png"
      alt="İlan"
      className="w-52 h-52 opacity-900 blur-sm animate-pulse drop-shadow-[0_0_20px_#bab6b6] group-hover:scale-[1.15] transition-transform duration-500"
    />
  </div>
  <div className="relative z-10 flex flex-col items-center text-center space-y-5 justify-center h-full">
    <div className="text-[30px] font-semibold tracking-tight drop-shadow flex items-center gap-2">
      <img src="/icons/tag.png" alt="İlan" className="w-6 h-6" />
      <span>Tamamdır İlanlar</span>
    </div>
    <p className="text-[15px] font-medium">Paylaş, değerlendir, kazan!</p>
    <button
      disabled
      className="inline-block bg-gray-300 text-gray-400 px-6 py-3 rounded-full font-light text-base shadow-sm cursor-not-allowed"
    >
      Yakında Aktif
    </button>
  </div>
</div>
</div>



{/* FOOTER */}
<footer className="bg-gray-100 py-6 mt-auto text-center text-sm text-gray-700 flex flex-col md:flex-row justify-center items-center gap-6 border-t border-gray-300">
<div>© {new Date().getFullYear()} Tamamdır | Powered by TamamdırApp Başkentin Hizmet Platformu</div>
<nav className="flex gap-6">
  <Link href="/cerezler" className="hover:text-[#058d92] transition-colors duration-300">Çerezler ve Gizlilik</Link>
  <Link href="/kvkk" className="hover:text-[#058d92] transition-colors duration-300">KVKK</Link>
  <Link href="/sartlar" className="hover:text-[#058d92] transition-colors duration-300">Kullanım Şartları</Link>
</nav>
<div className="flex gap-4 items-center justify-center">
  <a href="https://instagram.com/tamamdirapp" target="_blank" rel="noopener noreferrer">
    <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6 hover:opacity-70 transition" />
  </a>
  <a href="https://tiktok.com/@tamamdirapp" target="_blank" rel="noopener noreferrer">
    <img src="/icons/tiktok.png" alt="TikTok" className="w-6 h-6 hover:opacity-70 transition" />
  </a>
  <a href="https://x.com/tamamdirapp" target="_blank" rel="noopener noreferrer">
    <img src="/icons/x.png" alt="X" className="w-6 h-6 hover:opacity-70 transition" />
  </a>
</div>
</footer>
</main>
);
}

