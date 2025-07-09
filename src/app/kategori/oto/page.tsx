"use client";
import Link from "next/link";

const otoHizmetleri = [
  {
    id: "oto-yikama-hizmet",
    ad: "Oto Yıkama Hizmet",
    aciklama: "Profesyonel oto yıkama ve bakım.",
    icon: "/icons/oto-yikama.png",
    puan: 4.6,
    yorum: 70,
    acik: true,
    etiketler: ["Oto Yıkama", "Bakım"],
  },
  {
    id: "hasar-tespit",
    ad: "Hasar Tespit",
    aciklama: "Araç hasar tespiti ve onarımı.",
    icon: "/icons/hasar.png",
    puan: 4.8,
    yorum: 55,
    acik: true,
    etiketler: ["Hasar", "Onarım"],
  },
  {
    id: "parca-degistirme",
    ad: "Parça Değiştirme",
    aciklama: "Araç parçaları değiştirme ve bakım.",
    icon: "/icons/parca.png",
    puan: 4.7,
    yorum: 40,
    acik: false,
    etiketler: ["Parça", "Bakım"],
  },
];

export default function OtoKategori() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] pb-0">
      <section className="container mx-auto max-w-4xl px-4">
        {/* Ana Sayfa'ya Dön Linki */}
        <div className="my-4">
          <Link href="/" className="text-[#035e65] underline text-sm font-semibold inline-flex items-center gap-1 hover:text-[#058d92] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Ana Sayfa
          </Link>
        </div>
        <header className="text-center py-10 mb-7">
          <div className="text-4xl font-extrabold text-[#035e65] mb-1 tracking-tight">Oto Hizmetleri</div>
          <div className="text-[#058d92] text-lg font-semibold mb-2">Aracın için profesyonel hizmetler burada!</div>
          <div className="text-[#607281] text-base font-medium mb-2">
            Araç bakım, yıkama, hasar ve daha fazlası.
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mb-12">
          {otoHizmetleri.map((oto) => (
            <Link href={`/kategori/oto/${oto.id}`} key={oto.id}>
              <div
                className="bg-white border border-[#e7edf4] rounded-2xl shadow-md px-7 py-8 flex flex-col items-center text-center transition-transform duration-150 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
                style={{ color: "#232832" }}
              >
                <img src={oto.icon} alt={oto.ad} className="w-14 h-14 mb-3 rounded-xl object-contain border border-[#e7edf4]" />
                <div className="font-bold text-lg text-[#035e65] mb-1">{oto.ad}</div>
                <div className="text-sm text-[#444b54] mb-1">{oto.aciklama}</div>
                <div className="flex items-center gap-1 text-[#f7b500] text-xs font-semibold justify-center mb-2">
                  <span>★ {oto.puan}</span>
                  <span className="text-[#607281]">({oto.yorum})</span>
                  <span className={`ml-2 px-2 py-0.5 rounded ${oto.acik ? "bg-[#d0fae4] text-[#0aa360]" : "bg-[#ffe5e5] text-[#c20d0d]"}`}>
                    {oto.acik ? "Aktif" : "Kapalı"}
                  </span>
                </div>
                <div className="flex gap-1 flex-wrap justify-center">
                  {oto.etiketler.map((et, i) => (
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
