"use client";
import { useState } from "react";
import Link from "next/link";
import { Star, ShoppingCart, X, MapPin, Clock } from "lucide-react";

const marketVerileri: any = {
  "anadolubakkal": {
    ad: "Anadolu Bakkal",
    aciklama: "Mahallenizin samimi bakkalı. Hızlı servis, uygun fiyat.",
    logo: "/anadolu-bakkal.png",
    puan: 4.7,
    yorumSayisi: 88,
    acik: true,
    minSepet: "75 TL",
    adres: "Yıldız Mah. Göztepe Sok. No:14/A",
    saat: "08:00 - 23:00",
    etiketler: ["Bakkal", "İçecek", "Çocuk Dostu"],
    urunler: [
      { id: 1, isim: "Sütaş Süt 1L", aciklama: "Günlük taze süt", fiyat: 42, img: "/sut.jpg" },
      { id: 2, isim: "Coca-Cola 1L", aciklama: "Soğuk içecek", fiyat: 39, img: "/cola.jpg" },
      { id: 3, isim: "Pınar Beyaz 180g", aciklama: "Kahvaltılık sürme", fiyat: 45, img: "/pinarbeyaz.jpg" },
      { id: 4, isim: "Lay’s Patates Cipsi", aciklama: "Sade, 107g", fiyat: 37, img: "/cips.jpg" },
      { id: 5, isim: "UNO Ekmek", aciklama: "Taze fırın ekmeği", fiyat: 19, img: "/ekmek.jpg" },
    ],
    yorumlar: [
      { ad: "Eren B.", puan: 5, metin: "Siparişim hızlı geldi, ürünler taze." },
      { ad: "Tuğba G.", puan: 4, metin: "Çalışanlar çok ilgili, fiyatlar uygun." },
      { ad: "Mehmet E.", puan: 5, metin: "Her şey eksiksiz ve güzel paketlenmişti." }
    ]
  },
  "yesilmanav": {
    ad: "Yeşil Manav",
    aciklama: "Taze meyve, sebze. Uygun fiyatlar ve organik ürünler.",
    logo: "/yesil-manav.png",
    puan: 4.9,
    yorumSayisi: 54,
    acik: true,
    minSepet: "50 TL",
    adres: "Kavaklı Mah. Sebze Sok. No:3",
    saat: "07:00 - 21:00",
    etiketler: ["Manav", "Organik", "Sağlıklı"],
    urunler: [
      { id: 1, isim: "Elma (1 kg)", aciklama: "Taze ve organik", fiyat: 25, img: "/elma.jpg" },
      { id: 2, isim: "Domates (1 kg)", aciklama: "Kırmızı, lezzetli", fiyat: 20, img: "/domates.jpg" },
      { id: 3, isim: "Salatalık (1 kg)", aciklama: "Yeşil ve taze", fiyat: 18, img: "/salatalik.jpg" },
      { id: 4, isim: "Muz (1 kg)", aciklama: "Tropikal ve tatlı", fiyat: 30, img: "/muz.jpg" },
    ],
    yorumlar: [
      { ad: "Fatma S.", puan: 5, metin: "Ürünler taptaze, teslimat çok hızlıydı." },
      { ad: "Ali K.", puan: 4, metin: "Kaliteli ve güvenilir market." }
    ]
  },
  "sutlukayali": {
    ad: "Sütlü Kayalı",
    aciklama: "Süt, yoğurt ve sütlü atıştırmalıklar.",
    logo: "/sutlu-kayali.png",
    puan: 4.8,
    yorumSayisi: 23,
    acik: false,
    minSepet: "40 TL",
    adres: "Merkez Mah. Süt Sok. No:7",
    saat: "08:00 - 20:00",
    etiketler: ["Süt", "Şarküteri"],
    urunler: [
      { id: 1, isim: "Günlük Süt 1L", aciklama: "Taze süt ürünü", fiyat: 35, img: "/sut.jpg" },
      { id: 2, isim: "Yoğurt 500g", aciklama: "Doğal yoğurt", fiyat: 28, img: "/yogurt.jpg" },
      { id: 3, isim: "Peynir 250g", aciklama: "Beyaz peynir", fiyat: 50, img: "/peynir.jpg" },
    ],
    yorumlar: [
      { ad: "Canan Y.", puan: 5, metin: "Ürünler taze ve lezzetli." },
      { ad: "Murat D.", puan: 4, metin: "Servis biraz yavaş ama ürünler iyi." }
    ]
  },
};

export default function MarketDetay({ params }: { params: { marketId: string } }) {
  const data = marketVerileri[params.marketId] || null;
  const [sepet, setSepet] = useState<any[]>([]);
  const [sepetAcik, setSepetAcik] = useState(false);

  if (!data) {
    return (
      <main className="min-h-screen flex flex-col justify-center items-center bg-[#f5f8fc]">
        <div className="text-xl text-[#058d92]">Market bulunamadı.</div>
        <Link href="/kategori/market" className="text-[#035e65] mt-3 underline">Geri dön</Link>
      </main>
    );
  }

  const sepeteEkle = (urun: any) => {
    setSepet([...sepet, urun]);
    setSepetAcik(true);
  };

  const sepettenKaldir = (index: number) => {
    setSepet(sepet.filter((_, i) => i !== index));
  };

  const toplam = sepet.reduce((t, u) => t + u.fiyat, 0);

  return (
    <main className="min-h-screen bg-[#f5f8fc]">
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-16">
        <Link href="/kategori/market" className="text-[#058d92] text-sm mb-3 inline-block">&larr; Tüm Marketler</Link>
        {/* Market Bilgisi */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex flex-col sm:flex-row gap-5 border border-[#e7edf4]">
          <img src={data.logo || "/placeholder-shop.png"} alt={data.ad} className="w-24 h-24 rounded-2xl object-cover border border-[#e7edf4]" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-[#035e65]">{data.ad}</h1>
              <span className={`px-2 py-1 rounded-lg text-xs font-bold ${data.acik ? "bg-[#d0fae4] text-[#0aa360]" : "bg-[#ffe5e5] text-[#c20d0d]"}`}>{data.acik ? "Açık" : "Kapalı"}</span>
            </div>
            <div className="flex items-center gap-2 text-[#f7b500] mb-2">
              <Star size={18} fill="#f7b500" strokeWidth={1} />
              <span className="font-semibold">{data.puan}</span>
              <span className="text-[#607281] text-xs ml-2">({data.yorumSayisi} yorum)</span>
            </div>
            <div className="flex items-center gap-2 text-[#058d92] text-sm mb-1">
              <MapPin size={16} /> {data.adres}
            </div>
            <div className="flex items-center gap-2 text-[#6b7c91] text-xs">
              <Clock size={14} /> {data.saat} <span className="mx-2">•</span> Min. Sepet: <b>{data.minSepet}</b>
            </div>
            <div className="flex gap-2 mt-1">
              {data.etiketler.map((et: string, i: number) => (
                <span key={i} className="bg-[#e0f7fa] text-[#007c91] rounded px-2 py-0.5 text-xs font-medium">{et}</span>
              ))}
            </div>
            <div className="text-[#607281] text-sm mt-2">{data.aciklama}</div>
          </div>
        </div>

        {/* Ürünler */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#035e65] mb-3">Ürünler</h2>
          <div className="grid grid-cols-1 gap-4">
            {data.urunler.map((urun: any, idx: number) => (
              <div key={urun.id} className="flex items-center justify-between bg-white border border-[#e7edf4] rounded-xl p-4 shadow-sm">
                <img src={urun.img || "/placeholder-product.png"} alt={urun.isim} className="w-16 h-16 rounded-lg object-cover border border-[#e7edf4]" />
                <div className="flex-1 ml-4">
                  <div className="font-bold text-[#035e65]">{urun.isim}</div>
                  <div className="text-xs text-[#607281]">{urun.aciklama}</div>
                  <div className="text-[#058d92] font-bold">{urun.fiyat} TL</div>
                </div>
                <button onClick={() => sepeteEkle(urun)} className="ml-4 bg-[#058d92] hover:bg-[#035e65] text-white rounded-full px-3 py-2 text-xs font-bold flex items-center gap-1 transition-colors">
                  <ShoppingCart size={16} /> Sepete Ekle
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sepet Paneli */}
        {sepetAcik && (
          <div className="fixed top-0 right-0 w-full sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#e7edf4] z-30 p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-[#035e65]">Sepetim</h3>
              <button onClick={() => setSepetAcik(false)} className="text-[#607281]"><X size={22} /></button>
            </div>
            {sepet.length === 0 ? (
              <div className="text-[#607281] text-sm text-center py-8">Sepetiniz boş.</div>
            ) : (
              <ul>
                {sepet.map((u, i) => (
                  <li key={i} className="flex justify-between items-center py-2 border-b last:border-b-0">
                    <span>{u.isim}</span>
                    <span>
                      <b>{u.fiyat} TL</b>
                      <button className="ml-2 text-[#c20d0d]" onClick={() => sepettenKaldir(i)} title="Kaldır">
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
            <button className="w-full bg-[#058d92] text-white font-semibold py-2 rounded-full mt-1">Siparişi Onayla (Demo)</button>
          </div>
        )}

        {/* Müşteri Yorumları */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-[#035e65] mb-2">Son Yorumlar</h2>
          <div className="space-y-3">
            {data.yorumlar.map((y: any, i: number) => (
              <div key={i} className="bg-white border border-[#e7edf4] rounded-xl p-4 shadow flex items-center gap-3" style={{ color: "#232832" }}>
                <img src={`https://randomuser.me/api/portraits/thumb/${i%2===0 ? "women" : "men"}/${20+i}.jpg`} className="w-10 h-10 rounded-full border border-[#e7edf4]" />
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
      {/* Footer */}
      <footer className="text-center mb-4 text-[#a1a6b3] text-xs border-t pt-3">
        <div>
          © {new Date().getFullYear()} Tamamdır | Powered by Tamamdır Teknoloji A.Ş.
          <span className="mx-2">|</span>
          <a href="/kvkk" className="underline">KVKK</a>
          <span className="mx-2">|</span>
          <a href="/sartlar" className="underline">Kullanım Şartları</a>
          <span className="mx-2">|</span>
          <a href="mailto:info@tamamdirapp.com" className="underline">Mail</a>
          <span className="mx-2">|</span>
          <a href="https://instagram.com/tamamdirapp" target="_blank">Instagram</a>
        </div>
      </footer>
    </main>
  );
}
