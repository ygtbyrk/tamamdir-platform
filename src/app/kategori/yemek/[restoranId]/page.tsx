"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Star, MapPin, Clock, ShoppingCart, X } from "lucide-react";

const restoranVerileri: any = {
  "mudavim-doner": {
    ad: "Müdavim Döner",
    aciklama: "Ankara'nın en eski ve popüler dönercisi. %100 dana, hızlı servis.",
    logo: "/mudavim-doner.png",
    puan: 4.8,
    yorumSayisi: 321,
    acik: true,
    minSepet: "200 TL",
    adres: "Kızılay Mah. Meşrutiyet Cad. No:26/A",
    saat: "10:00 - 22:00",
    etiketler: ["Vegan", "Çocuk Dostu"],
    menu: [
      { id: 1, isim: "Et Döner Dürüm", aciklama: "220 gr dana döner, lavaş, köz biber", fiyat: 180, img: "/doner.jpg", ekstra: ["Cheddar +10 TL", "Soğan koyma", "Acı sos +5 TL"] },
      { id: 2, isim: "Pilavüstü Döner", aciklama: "300 gr pilav, 120 gr döner", fiyat: 210, img: "/pilavustu.jpg", ekstra: ["Çoban Salata +40 TL", "Sos fazla"] },
      { id: 3, isim: "Ayran (Büyük)", aciklama: "400 ml buz gibi ayran", fiyat: 40, img: "/ayran.jpg", ekstra: [] },
      { id: 4, isim: "Çoban Salata", aciklama: "Domates, salatalık, biber, soğan", fiyat: 60, img: "/salata.jpg", ekstra: ["Limon +5 TL"] },
      { id: 5, isim: "Fıstıklı Baklava", aciklama: "3 dilim Antep baklavası", fiyat: 90, img: "/baklava.jpg", ekstra: [] },
    ],
    yorumlar: [
      { ad: "Ayşe K.", puan: 5, metin: "Hızlı geldi, döner harika! Tekrar sipariş vereceğim." },
      { ad: "Burak T.", puan: 4, metin: "Lezzetli ama porsiyon biraz küçük geldi." },
      { ad: "Nermin E.", puan: 5, metin: "Hijyen, lezzet ve fiyat muazzam, teşekkürler." }
    ]
  },
  "sofra-kebap": {
    ad: "Sofra Kebap",
    aciklama: "Odun ateşinde kebaplar ve lahmacun.",
    logo: "/sofra-kebap.png",
    puan: 4.6,
    yorumSayisi: 290,
    acik: true,
    minSepet: "150 TL",
    adres: "Bahçelievler Cad. No:45",
    saat: "11:00 - 23:00",
    etiketler: ["Aile Dostu", "Oturma Alanı"],
    menu: [
      { id: 1, isim: "Adana Kebap", aciklama: "Acılı kıyma kebap, lavaş", fiyat: 160, img: "/adana-kebap.jpg", ekstra: ["Soğan +5 TL", "Ezme Salata +10 TL"] },
      { id: 2, isim: "Lahmacun", aciklama: "İnce hamur, bol kıyma", fiyat: 70, img: "/lahmacun.jpg", ekstra: ["Nar Ekşili", "Acı Sos +5 TL"] },
      { id: 3, isim: "İçecek (Ayran)", aciklama: "Buz gibi ayran", fiyat: 20, img: "/ayran.jpg", ekstra: [] },
    ],
    yorumlar: [
      { ad: "Mehmet D.", puan: 5, metin: "Kebaplar çok lezzetli ve servis hızlı." },
      { ad: "Selin K.", puan: 4, metin: "Fiyat performans iyi." }
    ]
  },
  "tatlici-fiko": {
    ad: "Tatlıcı Fiko",
    aciklama: "Baklava ve yöresel tatlılar.",
    logo: "/tatlici-fiko.png",
    puan: 4.9,
    yorumSayisi: 180,
    acik: true,
    minSepet: "100 TL",
    adres: "Sıhhiye Cad. No:12",
    saat: "09:00 - 21:00",
    etiketler: ["Tatlı", "Kahve"],
    menu: [
      { id: 1, isim: "Baklava", aciklama: "Antep fıstıklı baklava, 3 dilim", fiyat: 120, img: "/baklava.jpg", ekstra: [] },
      { id: 2, isim: "Künefe", aciklama: "Sıcak künefe, dondurma ile", fiyat: 110, img: "/kunefe.jpg", ekstra: [] },
      { id: 3, isim: "Türk Kahvesi", aciklama: "Taze çekilmiş kahve", fiyat: 30, img: "/turk-kahvesi.jpg", ekstra: [] },
    ],
    yorumlar: [
      { ad: "Fatma Y.", puan: 5, metin: "Tatlılar çok taze ve lezzetli." },
      { ad: "Ahmet B.", puan: 5, metin: "Künefe muhteşemdi." }
    ]
  },
};

export default function RestoranMenuPage({ params }: { params: { restoranId: string } }) {
  const router = useRouter();

  const data = restoranVerileri[params.restoranId] || null;
  const [sepet, setSepet] = useState<any[]>([]);
  const [sepetAcik, setSepetAcik] = useState(false);
  const [ekstraAcik, setEkstraAcik] = useState<number | null>(null);

  if (!data) {
    return (
      <main className="min-h-screen flex flex-col justify-center items-center bg-[#f6faff]">
        <div className="text-xl text-[#058d92]">Restoran bulunamadı.</div>
        <Link href="/kategori/yemek" className="text-[#035e65] mt-3 underline">Geri dön</Link>
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

  // 3. Sipariş Sonuç Sayfasına yönlendirme
  const handleSiparisOnayla = () => {
    if (sepet.length === 0) {
      alert("Lütfen önce sepete ürün ekleyin.");
      return;
    }
    // Sepet ve restoran bilgisini localStorage'a kaydet
    localStorage.setItem("tamamdirSepet", JSON.stringify(sepet));
    localStorage.setItem("tamamdirRestoran", JSON.stringify({ ad: data.ad, adres: data.adres }));

    // Sipariş sonuç sayfasına yönlendir
    router.push("/siparis/sonuc");
  };

  return (
    <main className="min-h-screen bg-[#f6faff] relative">
      {/* Sabit WhatsApp Butonu */}
      <a href="https://wa.me/905451164506" target="_blank" className="fixed bottom-8 right-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-105 transition z-50" rel="noreferrer">
        <ShoppingCart size={24} />
      </a>

      <div className="max-w-2xl mx-auto px-4 pt-8 pb-16">
        <Link href="/kategori/yemek" className="text-[#058d92] text-sm mb-3 inline-block">&larr; Tüm Restoranlar</Link>

        {/* Restoran Bilgisi */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex flex-col sm:flex-row gap-5 border border-[#e8ecee]">
          <img src={data.logo || "/logo-placeholder.png"} alt={data.ad} className="w-24 h-24 rounded-2xl object-cover border" />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-[#035e65]">{data.ad}</h1>
              <span className={`px-2 py-1 rounded-lg text-xs font-bold ${data.acik ? "bg-[#d0fae4] text-[#0aa360]" : "bg-[#ffe5e5] text-[#c20d0d]"}`}>
                {data.acik ? "Açık" : "Kapalı"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#f7b500] mb-2">
              <Star size={18} fill="#f7b500" strokeWidth={1} />
              <span className="font-semibold">{data.puan}</span>
              <span className="text-[#607281] text-xs ml-2">({data.yorumSayisi} yorum)</span>
            </div>
            <div className="flex items-center gap-2 text-[#058d92] text-sm mb-1">
              <MapPin size={16} /> {data.adres}
              <a href={`https://maps.google.com/?q=${encodeURIComponent(data.adres)}`} target="_blank" rel="noopener noreferrer" className="ml-2 underline text-xs">Haritada Aç</a>
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

        {/* Menü */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#035e65] mb-3">Menü</h2>
          <div className="grid grid-cols-1 gap-4">
            {data.menu.map((urun: any, idx: number) => (
              <div key={urun.id} className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border relative">
                <img src={urun.img || "/placeholder-food.png"} alt={urun.isim} className="w-16 h-16 rounded-lg object-cover border" />
                <div className="flex-1 ml-4">
                  <div className="font-bold text-[#035e65]">{urun.isim}</div>
                  <div className="text-xs text-[#607281]">{urun.aciklama}</div>
                  <div className="text-[#058d92] font-bold">{urun.fiyat} TL</div>
                  {/* Ekstra Seçimi */}
                  {urun.ekstra.length > 0 && (
                    <>
                      <button onClick={() => setEkstraAcik(idx)} className="text-xs text-[#058d92] underline mt-1">Ekstra Ekle</button>
                      {ekstraAcik === idx && (
                        <div className="absolute z-40 bg-white border p-3 rounded shadow top-20 left-10 min-w-[200px]">
                          {urun.ekstra.map((e: string, ei: number) => (
                            <label key={ei} className="block text-xs py-1">
                              <input type="checkbox" className="mr-2" />{e}
                            </label>
                          ))}
                          <button onClick={() => setEkstraAcik(null)} className="text-xs mt-2 block underline text-right w-full">Kapat</button>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <button onClick={() => sepeteEkle(urun)} className="ml-4 bg-[#058d92] hover:bg-[#035e65] text-white rounded-full px-3 py-2 text-xs font-bold flex items-center gap-1">
                  <ShoppingCart size={16} /> Sepete Ekle
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sepet Paneli */}
        {sepetAcik && (
          <div
            className="fixed top-20 right-4 w-80 max-w-full bg-white rounded-3xl shadow-2xl border border-gray-300 z-40 p-6"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-3">
              <h3 className="text-xl font-semibold text-[#035e65]">Sepetim</h3>
              <button
                onClick={() => setSepetAcik(false)}
                className="text-gray-500 hover:text-gray-800 transition p-1 rounded-full focus:outline-none"
                aria-label="Sepeti Kapat"
              >
                <X size={24} />
              </button>
            </div>
            {sepet.length === 0 ? (
              <div className="text-gray-600 text-center py-10">Sepetiniz boş.</div>
            ) : (
              <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
                {sepet.map((u, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center py-3 text-gray-800"
                  >
                    <span className="font-medium truncate max-w-[65%]">{u.isim}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#058d92]">{u.fiyat} TL</span>
                      <button
                        className="text-red-600 hover:text-red-800 transition rounded focus:outline-none"
                        onClick={() => sepettenKaldir(i)}
                        title="Kaldır"
                        aria-label={`Sepetten ${u.isim} ürününü kaldır`}
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex justify-between font-bold text-lg text-[#035e65] mt-5 border-t border-gray-200 pt-3">
              <span>Toplam</span>
              <span>{toplam} TL</span>
            </div>
            <button
              onClick={handleSiparisOnayla}
              className="w-full bg-[#058d92] hover:bg-[#035e65] text-white font-semibold py-3 rounded-full mt-6 transition"
            >
              Siparişi Onayla (Demo)
            </button>
            <div className="mt-3 text-sm text-red-600 font-semibold text-center">
              İlk siparişe %10 indirim fırsatı!
            </div>
          </div>
        )}

        {/* Müşteri Yorumları */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-[#035e65] mb-2">Son Yorumlar</h2>
          <div className="space-y-3">
            {data.yorumlar.map((y: any, i: number) => (
              <div key={i} className="bg-[#f9fafb] border border-[#e7edf4] rounded-xl p-4 shadow flex items-center gap-3" style={{ color: "#232832" }}>
                <img src={`https://randomuser.me/api/portraits/thumb/${i % 2 === 0 ? "women" : "men"}/${20 + i}.jpg`} className="w-10 h-10 rounded-full border border-[#e7edf4]" />
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
          <a href="https://instagram.com/tamamdirapp" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>
    </main>
  );
}
