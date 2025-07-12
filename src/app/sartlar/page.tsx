"use client";

import Link from "next/link";

export default function SartlarPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] px-6 py-12 text-[#232832] w-full">
      <div className="max-w-4xl mx-auto">
        {/* Geri dön butonu */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-block text-[#058d92] font-semibold hover:underline"
          >
            &larr; Ana Sayfa
          </Link>
        </div>

        <h1 className="text-4xl font-extrabold mb-10 text-[#035e65]">
          Tamamdır Platformu - Genel Kullanım Koşulları & Hukuki Şartlar
        </h1>

        <section className="space-y-6 text-sm leading-relaxed">
          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">1. Sorumluluk Reddi Beyanı</h2>
            <p>
              Tamamdır Platformu (“Platform”), kullanıcıları hizmet sağlayıcılar ve restoran işletmeleri ile buluşturan bir aracı hizmet sağlayıcıdır. Platform, kullanıcıların hizmet alımına aracılık eder ancak hizmetlerin kalitesi, doğruluğu ve güvenliği konusunda herhangi bir doğrudan garanti veya taahhüt vermez. Kullanıcılar, bu hizmetleri kendi riskleri dahilinde kullanmayı kabul eder.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">2. Taraflar ve Sözleşme Kapsamı</h2>
            <p>
              <b>Platform:</b> Tamamdır, hizmet verenler ve restoran işletmeleri ile hizmet almak isteyen bireysel ve kurumsal kullanıcıları bir araya getirir.<br />
              <b>Hizmet Verenler:</b> Platform üzerinden temizlik, tesisat, tamirat gibi hizmetler sunan bağımsız çalışanlar.<br />
              <b>Restoran İşletmeleri:</b> Platform aracılığıyla yemek siparişi kabul eden işletmeler.<br />
              <b>Hizmet Alanlar:</b> Platformdan hizmet veya yemek siparişi alan kullanıcılar.<br />
              Hizmet verenler ve restoran işletmeleri Platform’un çalışanı veya bayisi değildir. Platform yalnızca bir aracıdır ve hizmet sürecine doğrudan müdahil olmaz.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">3. Adres, Konum ve Sipariş Süreci</h2>
            <p>
              Kullanıcılar, sipariş vermeden önce konumlarını paylaşmak veya adreslerini manuel girmekle yükümlüdür.<br />
              Platform, yalnızca belirtilen adrese hizmet veya sipariş yönlendirmesi yapar.<br />
              Adres eksik veya yanlış verilirse, Platform sorumluluk kabul etmez ve iptal/iade süreçleri geçerli olabilir.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">4. Ödeme ve İptal Koşulları</h2>
            <p><b>4.1. Ödeme Yöntemleri</b></p>
            <p>
              Online kredi kartı, kapıda nakit veya POS cihazı ile ödeme yapılabilir.<br />
              Online ödemeler, güvenli ödeme sağlayıcıları aracılığıyla gerçekleştirilir.<br />
              Ödeme tamamlanmadan sipariş/hizmet işlemi başlatılamaz.
            </p>
            <p><b>4.2. İptal ve İade Politikası</b></p>
            <p><b>Yemek Siparişleri İçin:</b></p>
            <ul className="list-disc ml-6">
              <li>Sipariş restoran tarafından onaylanmadan önce iptal edilebilir.</li>
              <li>Onaylanan siparişlerde iade ve iptal politikası restoranın kendi politikalarına bağlıdır.</li>
              <li>Yemek siparişlerinde iade yalnızca siparişin eksik veya hatalı gelmesi durumunda geçerlidir.</li>
            </ul>
            <p><b>Hizmetler İçin:</b></p>
            <ul className="list-disc ml-6">
              <li>Hizmet başlamadan en az 12 saat önce iptal edilirse, ücret iade edilir.</li>
              <li>Son 12 saat içinde yapılan iptallerde hizmet bedelinin %50’si kesilerek iade edilir.</li>
              <li>Hizmet verenin iptal etmesi durumunda, ücret tam iade edilir veya farklı bir hizmet veren atanabilir.</li>
            </ul>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">5. Bağımsız Çalışan ve Restoran İşletmeleri İçin Yükümlülükler</h2>
            <p><b>5.1. Hizmet Verenlerin Sorumlulukları</b></p>
            <p>
              Hizmet verenler, verdikleri hizmetlerden bizzat sorumludur.<br />
              Vergi, sigorta ve yasal yükümlülükler hizmet verenin sorumluluğundadır.<br />
              Platform, hizmet veren adına vergi ödeme veya fatura kesme zorunluluğuna sahip değildir.
            </p>
            <p><b>5.2. Restoran İşletmelerinin Sorumlulukları</b></p>
            <p>
              Restoranlar, siparişin kalitesi, doğruluğu ve teslim süresi gibi konularda tam sorumluluk taşır.<br />
              Platform yalnızca siparişleri iletir, yemek içeriği ve kalite konularında sorumluluk restoran işletmesine aittir.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">6. Müşteri Memnuniyeti & Şikayet Yönetimi</h2>
            <p>
              Müşteriler, hizmet veya sipariş sonrası değerlendirme yapabilir.<br />
              Belirli sayıda olumsuz geri bildirim alan hizmet verenler ve restoranlar geçici olarak askıya alınabilir.<br />
              Şikayetler, Platform tarafından detaylı incelenerek uygun görülen çözümler sağlanır.<br />
              Önemli ihlallerde restoran veya hizmet veren kara listeye alınarak sistemden tamamen çıkarılabilir.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">7. Sigorta ve Zararın Karşılanması</h2>
            <p>
              Premium üyelik kapsamında hizmet sigortası sağlanabilir.<br />
              Yemek siparişlerinde restoranın sorumluluğunda olan hatalar için platform, çözüm sürecine destek sağlar ancak direkt tazmin yükümlülüğü bulunmaz.<br />
              Hizmet sırasında oluşabilecek maddi zararlar, sigorta kapsamı dışında ise hizmet verenin şahsi sorumluluğundadır.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">8. Vergi & Faturalandırma Süreci</h2>
            <p>
              Platform, yalnızca hizmet verenler adına faturalandırma desteği sağlayabilir ancak bağımsız çalışanlar kendi vergisel yükümlülüklerinden sorumludur.<br />
              Restoran işletmeleri, siparişler için müşterilere fatura sağlamakla yükümlüdür.<br />
              Platform üzerinden yapılan tüm ödemeler için komisyon oranları ve hizmet bedelleri açıkça belirtilir.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">9. Gizlilik Politikası & Veri Güvenliği</h2>
            <p>
              Kullanıcı bilgileri kesinlikle üçüncü şahıslarla paylaşılmaz.<br />
              Ödeme bilgileri, güvenli şifreleme teknikleriyle korunur.<br />
              KVKK ve GDPR kapsamında kullanıcıların kişisel verileri korunur ve gerekli yasal yükümlülükler yerine getirilir.<br />
              Kullanıcı verileri, hesap kapatıldıktan sonra 90 gün içinde silinir.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">10. Topluluk Kuralları ve Kara Liste Politikası</h2>
            <p>
              Hizmet verenler ve restoranlar, müşteri memnuniyetini gözetmek zorundadır.<br />
              Platform dışında ödeme talep eden, müşteriye zarar veren veya etik ihlalde bulunan hizmet verenler/restoranlar süresiz olarak kara listeye alınır.<br />
              Şikayet sürecine yanıt vermeyen hizmet sağlayıcılar platformdan kalıcı olarak çıkarılabilir.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">11. Uyuşmazlıkların Çözümü & Yetkili Mahkemeler</h2>
            <p>
              Platform üzerindeki işlemlerden doğabilecek uyuşmazlıklar öncelikle şirket içi destek birimi tarafından çözüme kavuşturulmaya çalışılacaktır.<br />
              Çözülemeyen durumlarda Ankara Mahkemeleri ve İcra Daireleri yetkilidir.
            </p>
          </article>

          <article>
            <h2 className="font-bold text-[#035e65] text-xl mb-2">12. Yürürlük ve Güncellemeler</h2>
            <p>
              Platform, bu sözleşmeyi güncelleme hakkına sahiptir ve değişiklikler kullanıcıya bildirilir.<br />
              Kullanıcıların platformu kullanmaya devam etmesi, güncellenmiş şartları kabul ettikleri anlamına gelir.<br />
              Bu sözleşme, platforma kayıt olan tüm kullanıcılar, hizmet verenler ve restoran işletmeleri tarafından kabul edilmiş sayılır.
            </p>
          </article>
        </section>

        <footer className="mt-12 text-xs text-[#607281] text-center pb-6">
          © {new Date().getFullYear()} Tamamdır | Powered by TamamdırApp
        </footer>
      </div>
    </main>
  );
}
