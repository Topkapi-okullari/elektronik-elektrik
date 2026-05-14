import { Mail, Phone, MapPin, BookOpen, Zap, Wrench, Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import { useState } from "react";

/**
 * Topkapı Okulları - Elektrik Elektronik Bölümü
 * Tasarım: Topkapı Okulları Resmi Tasarımı
 * Renk Şeması: Mavi (#0066CC), Yeşil (#7FBF3F), Turuncu (#FF6600)
 * Tipografi: Playfair Display (başlıklar), Poppins (gövde)
 * Logo: Dünya görselini içeren daire, renkli gradyan
 * Temrinler: Sınıf sınıf organize edilmiş (9-11. Sınıflar)
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [activeSubTab, setActiveSubTab] = useState("elektrik-temrin");
  const [activeSinif, setActiveSinif] = useState("9");
  const [activeTip, setActiveTip] = useState("elektrik");

  const tabs = [
    { id: "about", label: "Bölüm Hakkında", icon: "📚" },
    { id: "program", label: "Eğitim Programı", icon: "🎓" },
    { id: "temrinler", label: "Temrinler", icon: "⚙️" },
    { id: "labs", label: "Laboratuvarlar", icon: "🔬" },
    { id: "career", label: "Kariyer", icon: "💼" },
    { id: "university", label: "Üniversite", icon: "🎯" },
  ];

  const courses = {
    1: [
      "Temel Elektrik Bilgisi",
      "Devre Elemanları",
      "Programlayıcı Teknikleri",
      "İş Sağlığı ve Güvenliği",
      "El Aletlerinin Kullanımı",
      "Temel Tesisat Uygulamaları",
    ],
    2: [
      "Elektrik Tesisat Sistemleri",
      "Pano Montajı",
      "Kumanda ve Kontrol Devreleri",
      "Motor Bağlantıları",
      "Elektronik Devre Elemanları",
      "Lehimleme Uygulamaları",
    ],
    3: [
      "Elektrik Panosunu Kurma",
      "Arıza Tespiti ve Onarım",
      "Elektronik Devre Analizi",
      "Otomasyon Uygulamaları",
      "Beceri Eğitimi",
      "Sektör Deneyimi",
    ],
  };

  // 9. Sınıf Temrinleri
  const temrinler9Elektrik = [
    {
      no: "9.1",
      baslik: "Tek Damarlı İletkenin Düz Ek Yapılması",
      amac: "Elektrik kablolarının güvenli şekilde birleştirilmesi ve izolasyonunun yapılması.",
      malzemeler: "Tek damarlı iletken, ek yapma aletleri, izolasyon bandı",
      adimlar: "Kablonun dış kaplaması soyulur, iletkenler temizlenir, düz ek yapılır, izolasyon bandı sarılır.",
      guvenlik: "Elektrik bıçağı kullanırken dikkat edilmeli, keskin kenarlardan korunulmalı"
    },
    {
      no: "9.2",
      baslik: "Basit Seri Devre Kurulması",
      amac: "Seri devre bağlantısını anlamak ve kurabilmek, Ohm kanununu uygulamak.",
      malzemeler: "Güç kaynağı (12V DC), dirençler, LED, breadboard, bağlantı kabloları, multimetre",
      adimlar: "Devre şeması çizilir, breadboard üzerine bileşenler yerleştirilir, bağlantılar yapılır.",
      guvenlik: "Güç kaynağını doğru polaritede bağlayınız, LED'in uzun ayağı pozitif tarafa bağlı olmalı"
    },
    {
      no: "9.3",
      baslik: "Basit Paralel Devre Kurulması",
      amac: "Paralel devre bağlantısını anlamak, voltaj ve akım ilişkisini öğrenmek.",
      malzemeler: "Güç kaynağı (12V DC), dirençler (1kΩ, 1.5kΩ, 2.2kΩ), breadboard, multimetre",
      adimlar: "Paralel devre şeması çizilir, bileşenler yerleştirilir, paralel bağlantılar yapılır.",
      guvenlik: "Kısa devre oluşturmamaya dikkat ediniz, multimetre ölçüm modunu doğru seçiniz"
    },
  ];

  const temrinler9Elektronik = [
    {
      no: "9.4",
      baslik: "Lehimleme Uygulaması (Solder Yapma)",
      amac: "Elektronik bileşenleri lehim ile birleştirme tekniğini öğrenmek.",
      malzemeler: "Havya (25-40W), lehim teli, lehim temizleme sıvısı, bakır tel, elektronik bileşenler",
      adimlar: "Havya ısıtılır, lehim yapılacak noktalar temizlenir, lehim teli uygulanır.",
      guvenlik: "Havya çok sıcaktır, yanmamaya dikkat ediniz, lehim dumanını solumayınız"
    },
    {
      no: "9.5",
      baslik: "Röle Uçlarının Bulunması Uygulaması",
      amac: "Manyetik rölenin yapısını tanımak, rölenin uçlarını belirlemek ve test etmek.",
      malzemeler: "Röle, multimetre, devre şeması, bağlantı kabloları",
      adimlar: "Röle incelenir, bobin uçları bulunur, multimetre ile test edilir, kontakt uçları belirlenir.",
      guvenlik: "Yüksek voltaj uygulamadan önce test yapınız"
    },
    {
      no: "9.6",
      baslik: "Transistörün Anahtar Olarak Kullanımı",
      amac: "BJT transistörü anahtar olarak uygulamak ve LED kontrolü sağlamak.",
      malzemeler: "BJT Transistör (2N2222), LED, direnç, güç kaynağı, breadboard",
      adimlar: "Transistör pinleri belirlenir, devre tasarlanır, LED kontrol edilir.",
      guvenlik: "Transistör pinlerini doğru bağlayınız, aşırı akımdan korunuz"
    },
    {
      no: "9.7",
      baslik: "Zaman Gecikmeli Devre",
      amac: "555 Timer IC ile zaman gecikmesi uygulaması yapılması.",
      malzemeler: "555 Timer IC, kondansatör, direnç, LED, güç kaynağı",
      adimlar: "IC pinleri tanıtılır, devre tasarlanır, zaman ayarı yapılır.",
      guvenlik: "IC pinlerini doğru bağlayınız"
    },
    {
      no: "9.8",
      baslik: "MOSFET ile Motor Hız Kontrolü",
      amac: "PWM sinyali ile DC motorun hızını kontrol etmek.",
      malzemeler: "MOSFET, DC Motor, PWM sinyali kaynağı, güç kaynağı",
      adimlar: "MOSFET pinleri tanıtılır, motor devresine bağlanır, hız kontrolü yapılır.",
      guvenlik: "Motor yüksek akım çekebilir, uygun MOSFET seçiniz"
    },
  ];

  // 10. Sınıf Temrinleri
  const temrinler10Elektrik = [
    {
      no: "10.1",
      baslik: "Komütatör Anahtarlı Aydınlatma",
      amac: "İki yerden lamba kontrolü sağlamak",
      malzemeler: "Komütatör anahtarı, kablo, lamba, güç kaynağı",
      adimlar: "Devre şeması çizilir, kablolama yapılır, test edilir.",
      guvenlik: "Elektrik bıçağı kullanırken dikkat ediniz"
    },
    {
      no: "10.2",
      baslik: "Vaviyen Anahtarlı Aydınlatma",
      amac: "Üç yerden lamba kontrolü sağlamak",
      malzemeler: "Vaviyen anahtarı, kablo, lamba, güç kaynağı",
      adimlar: "Devre şeması çizilir, kablolama yapılır, test edilir.",
      guvenlik: "Kablolama sırasında dikkat ediniz"
    },
    {
      no: "10.3",
      baslik: "Merdiven Otomatiği",
      amac: "Hareket sensörü ile otomatik kontrol sağlamak",
      malzemeler: "Hareket sensörü, röle, lamba, güç kaynağı",
      adimlar: "Sensör bağlantısı yapılır, röle devresine entegre edilir.",
      guvenlik: "Sensör bağlantılarını doğru yapınız"
    },
    {
      no: "10.4",
      baslik: "Floresan Lamba Bağlantıları",
      amac: "Ballast ve starter ile floresan lamba bağlantısı yapılması",
      malzemeler: "Floresan lamba, ballast, starter, kablo",
      adimlar: "Ballast ve starter bağlantısı yapılır, lamba takılır.",
      guvenlik: "Yüksek voltaj dikkat ediniz"
    },
    {
      no: "10.5",
      baslik: "Karşılıklı Çağırma Tesisatı",
      amac: "İki yerden birbirini çağırma sistemi kurulması",
      malzemeler: "Zil, buton, kablo, güç kaynağı",
      adimlar: "Devre şeması çizilir, kablolama yapılır, test edilir.",
      guvenlik: "Kablolama sırasında dikkat ediniz"
    },
    {
      no: "10.6",
      baslik: "Kapı Kilidi Otomatiği",
      amac: "Kapı kilidi kontrolü sağlamak",
      malzemeler: "Elektrik kilit, röle, buton, güç kaynağı",
      adimlar: "Kilit bağlantısı yapılır, röle devresine entegre edilir.",
      guvenlik: "Yüksek akım dikkat ediniz"
    },
    {
      no: "10.7",
      baslik: "Numaratör Tesisatı",
      amac: "Apartman dairelerinin numaralandırması yapılması",
      malzemeler: "Numaratör, kablo, güç kaynağı",
      adimlar: "Numaratör bağlantısı yapılır, test edilir.",
      guvenlik: "Bağlantıları doğru yapınız"
    },
    {
      no: "10.8",
      baslik: "Diyafon Tesisatı",
      amac: "Sesli çağırma sistemi kurulması",
      malzemeler: "Diyafon, kablo, güç kaynağı",
      adimlar: "Diyafon bağlantısı yapılır, test edilir.",
      guvenlik: "Ses seviyesini kontrol ediniz"
    },
    {
      no: "10.9",
      baslik: "Elektrik Topraklama",
      amac: "Topraklama sisteminin kurulması",
      malzemeler: "Topraklama teli, topraklama panosu, bağlantı malzemeleri",
      adimlar: "Topraklama şeması çizilir, topraklama yapılır, test edilir.",
      guvenlik: "Topraklama çok önemlidir, doğru yapınız"
    },
    {
      no: "10.10",
      baslik: "Paratoner Tesisatı",
      amac: "Yıldırım koruması sistemi kurulması",
      malzemeler: "Paratoner, kablo, topraklama malzemeleri",
      adimlar: "Paratoner takılır, topraklama yapılır, test edilir.",
      guvenlik: "Yüksek voltaj dikkat ediniz"
    },
  ];

  const temrinler10Elektronik = [
    {
      no: "10.11",
      baslik: "Direnç Renk Kodları",
      amac: "Direnç değerlerini belirleme",
      malzemeler: "Dirençler, renk tablosu, multimetre",
      adimlar: "Dirençler incelenir, renk kodları okunur, değerler belirlenir.",
      guvenlik: "Multimetre ölçüm modunu doğru seçiniz"
    },
    {
      no: "10.12",
      baslik: "Kondansatör Değerleri",
      amac: "Kondansatör değerlerini tanımlama",
      malzemeler: "Kondansatörler, multimetre, değer tablosu",
      adimlar: "Kondansatörler incelenir, değerleri okunur, test edilir.",
      guvenlik: "Yüksek voltajlı kondansatörlere dikkat ediniz"
    },
    {
      no: "10.13",
      baslik: "Diyot Karakteristikleri",
      amac: "Diyot özelliklerini ölçme",
      malzemeler: "Diyotlar, multimetre, güç kaynağı",
      adimlar: "Diyot pinleri belirlenir, ileri ve geri yönde test edilir.",
      guvenlik: "Polariteyi doğru bağlayınız"
    },
    {
      no: "10.14",
      baslik: "Transistör Parametreleri",
      amac: "Transistör ölçmeleri yapılması",
      malzemeler: "Transistörler, multimetre, devre",
      adimlar: "Transistör pinleri belirlenir, kazanç ölçülür.",
      guvenlik: "Transistör pinlerini doğru bağlayınız"
    },
    {
      no: "10.15",
      baslik: "Operasyonel Amplifikatör",
      amac: "Op-Amp uygulamaları yapılması",
      malzemeler: "Op-Amp IC, dirençler, kondansatörler, güç kaynağı",
      adimlar: "Op-Amp pinleri tanıtılır, devre tasarlanır.",
      guvenlik: "Güç kaynağını doğru bağlayınız"
    },
    {
      no: "10.16",
      baslik: "Entegre Devre Pinleri",
      amac: "IC pinlerini tanımlama",
      malzemeler: "Çeşitli IC'ler, pinout diyagramları",
      adimlar: "IC'ler incelenir, pinler belirlenir.",
      guvenlik: "Statik elektrikten korunuz"
    },
    {
      no: "10.17",
      baslik: "Analog Devre Tasarımı",
      amac: "Analog devreler tasarlanması",
      malzemeler: "Op-Amp, dirençler, kondansatörler",
      adimlar: "Devre şeması tasarlanır, kurulur, test edilir.",
      guvenlik: "Bağlantıları doğru yapınız"
    },
    {
      no: "10.18",
      baslik: "Dijital Devre Tasarımı",
      amac: "Dijital devreler tasarlanması",
      malzemeler: "Logic IC'ler, LED, dirençler",
      adimlar: "Devre şeması tasarlanır, kurulur, test edilir.",
      guvenlik: "Güç kaynağını doğru bağlayınız"
    },
    {
      no: "10.19",
      baslik: "Sensör Uygulamaları",
      amac: "Çeşitli sensörlerin uygulanması",
      malzemeler: "Sensörler, multimetre, devre",
      adimlar: "Sensörler test edilir, devre tasarlanır.",
      guvenlik: "Sensör bağlantılarını doğru yapınız"
    },
    {
      no: "10.20",
      baslik: "Ölçüm Cihazları",
      amac: "Multimetre ve osiloskop kullanımı",
      malzemeler: "Multimetre, osiloskop, test sinyalleri",
      adimlar: "Cihazlar tanıtılır, ölçümler yapılır.",
      guvenlik: "Cihazları doğru kullanınız"
    },
  ];

  // 11. Sınıf Temrinleri
  const temrinler11Elektronik = [
    { no: "11.1", baslik: "Tristör (SCR) Uygulamaları", amac: "SCR ile güç kontrolü", malzemeler: "SCR, güç kaynağı, yük", adimlar: "SCR bağlantısı yapılır, güç kontrolü test edilir.", guvenlik: "Yüksek akım dikkat ediniz" },
    { no: "11.2", baslik: "TRIAC Kontrol Devreleri", amac: "TRIAC ile AC kontrolü", malzemeler: "TRIAC, AC kaynağı, yük", adimlar: "TRIAC bağlantısı yapılır, AC kontrolü test edilir.", guvenlik: "AC voltaj dikkat ediniz" },
    { no: "11.3", baslik: "Darlington Transistörü", amac: "Yüksek kazanç elde etme", malzemeler: "Darlington transistör, yük, güç kaynağı", adimlar: "Transistör bağlantısı yapılır, kazanç test edilir.", guvenlik: "Transistör pinlerini doğru bağlayınız" },
    { no: "11.4", baslik: "Fototransistör Uygulamaları", amac: "Işık algılama", malzemeler: "Fototransistör, LED, güç kaynağı", adimlar: "Fototransistör bağlantısı yapılır, ışık algılaması test edilir.", guvenlik: "Işık kaynağını doğru ayarlayınız" },
    { no: "11.5", baslik: "Optokoplar Uygulamaları", amac: "İzolasyon sağlama", malzemeler: "Optokoplar, devre elemanları", adimlar: "Optokoplar bağlantısı yapılır, izolasyon test edilir.", guvenlik: "Bağlantıları doğru yapınız" },
    { no: "11.6", baslik: "Zener Diyot Regülatörü", amac: "Voltaj regülasyonu", malzemeler: "Zener diyot, direnç, güç kaynağı", adimlar: "Zener bağlantısı yapılır, voltaj regülasyonu test edilir.", guvenlik: "Polariteyi doğru bağlayınız" },
    { no: "11.7", baslik: "Lineer Voltaj Regülatörü", amac: "IC regülatör kullanımı", malzemeler: "Regülatör IC, kondansatörler, güç kaynağı", adimlar: "Regülatör bağlantısı yapılır, çıkış voltajı test edilir.", guvenlik: "Güç kaynağını doğru bağlayınız" },
    { no: "11.8", baslik: "Komparatör Uygulamaları", amac: "Gerilim karşılaştırması", malzemeler: "Komparatör IC, dirençler, güç kaynağı", adimlar: "Komparatör bağlantısı yapılır, karşılaştırma test edilir.", guvenlik: "Bağlantıları doğru yapınız" },
    { no: "11.9", baslik: "Schmitt Trigger Devreleri", amac: "Histerezis elde etme", malzemeler: "Op-Amp, dirençler, kondansatörler", adimlar: "Devre tasarlanır, histerezis test edilir.", guvenlik: "Bağlantıları doğru yapınız" },
    { no: "11.10", baslik: "PLL Uygulamaları", amac: "Frekans senkronizasyonu", malzemeler: "PLL IC, devre elemanları", adimlar: "PLL bağlantısı yapılır, senkronizasyon test edilir.", guvenlik: "Bağlantıları doğru yapınız" },
  ];

  const careerFields = [
    "Elektrik Tesisatı ve Proje Firmaları",
    "Endüstriyel Otomasyon Sistemleri",
    "Elektrik Bakım-Onarım Birimleri",
    "Elektronik Devre Tasarım ve Üretim",
    "Asansör ve Pano Montaj Sistemleri",
    "Yenilenebilir Enerji Sistemleri",
    "Telekomünikasyon ve Haberleşme",
  ];

  const universities = [
    { name: "Elektrik-Elektronik Mühendisliği", advantage: "MTOK Kontenjanı" },
    { name: "Enerji Sistemleri Mühendisliği", advantage: "Ek Puan" },
    { name: "Endüstriyel Otomasyon Mühendisliği", advantage: "Özel Kontenjan" },
    { name: "Elektrik Teknisyenliği (Ön Lisans)", advantage: "Doğrudan Geçiş" },
  ];

  // İş ortakları (staj yapılan kurumlar)
  const internshipPartners = [
    { name: "Baykar", logo: "/baykar-logo.png" },
    { name: "Teksan", logo: "/teksan-logo.png" },
    { name: "Metro Istanbul", logo: "/metro-istanbul-logo.png" },
    { name: "Bedaş", logo: "/bedas-logo.png" },
    { name: "EAE Elektrik", logo: "/eae-elektrik-logo.png" },
    { name: "Arçelik", logo: "/arcelik-logo.png" },
    { name: "Mutlusan Elektrik", logo: "/mutlusan-elektrik-logo.png" },
    { name: "Yuki", logo: "/yuki-motor-logo.png" },
  ];

  const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`rounded-lg border border-gray-200 ${className}`}>{children}</div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Topkapı Okulları Logo" className="w-10 h-10 sm:w-14 sm:h-14 object-contain" />
            <div>
              <h1 className="text-sm sm:text-lg font-bold text-blue-700">TOPKAPI OKULLARI</h1>
              <p className="text-xs text-gray-600 italic hidden sm:block">"ayrıcalıklar bu okulda"</p>
            </div>
          </div>
          <nav className="hidden sm:flex gap-2 sm:gap-6 flex-wrap justify-end">
            <button onClick={() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); setActiveTab('about'); }} className="text-gray-700 hover:text-blue-700 font-medium cursor-pointer">
              Hakkında
            </button>
            <button onClick={() => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); setActiveTab('program'); }} className="text-gray-700 hover:text-blue-700 font-medium cursor-pointer">
              Program
            </button>
            <button className="text-gray-700 hover:text-blue-700 font-medium cursor-pointer">
              Arşiv
            </button>
            <button onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-700 hover:text-blue-700 font-medium cursor-pointer">
              İletişim
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Elektrik-Elektronik Teknolojisi Bölümü
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Geleceğin teknoloji uzmanlarını yetiştiren, enerji, otomasyon ve elektronik sistemlerde
            kapsamlı eğitim sunan bölümümüze hoş geldiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="https://www.topkapiokullari.com/on-kayit" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors inline-block text-sm sm:text-base">
              Ön Kayıt Yap
            </a>
            <button onClick={() => { document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Bölümün Özellikleri</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-xl font-bold text-blue-600 mb-3">Laboratuvar Destekli Eğitim</h4>
              <p className="text-gray-700">
                Gerçek sistemler üzerinde pratik yaparak mesleki becerilerinizi geliştirin.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-xl font-bold text-blue-600 mb-3">Sektör Deneyimi</h4>
              <p className="text-gray-700">
                İşletmelerde beceri eğitimi ile gerçek iş ortamında deneyim kazanın.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl font-bold text-blue-600 mb-3">Kariyer Olanakları</h4>
              <p className="text-gray-700">
                Geniş iş alanları ve üniversiteye geçiş imkanları ile gelecek güvence altında.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-16" id="about">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-600 hover:text-blue-700"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-lg p-8">
            {/* About Tab */}
            {activeTab === "about" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-700">Bölüm Hakkında</h3>
                <p className="text-gray-700 leading-relaxed">
                  Elektrik-Elektronik Teknolojisi Alanı, elektrik enerjisinin üretimi, şebeke
                  organizasyonu ve elektronik sistemlerin kurulumu, bakımı ve onarımı konularında
                  teknik eğitim sunan bir bölümdür. Günümüzde konutlardan sanayi tesislerine,
                  otomasyon sistemlerinden iletişim altyapılarına kadar pek çok alanda elektrik ve
                  elektronik teknolojileri temel bir rol oynamaktadır.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-orange-500 mb-3">Eğitim Süresi</h4>
                    <p className="text-gray-700">4 Yıl (9-12. Sınıflar)</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-bold text-green-500 mb-3">Eğitim Türü</h4>
                    <p className="text-gray-700">Uygulama Ağırlıklı Mesleki Eğitim</p>
                  </div>
                </div>
              </div>
            )}

            {/* Program Tab */}
            {activeTab === "program" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-700">Eğitim Programı</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((year) => (
                    <div key={year} className="bg-white p-6 rounded-lg border-l-4 border-blue-700">
                      <h4 className="text-lg font-bold text-blue-700 mb-4">{year}. Sınıf Dersleri</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {courses[year as 1 | 2 | 3].map((course, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Temrinler Tab */}
            {activeTab === "temrinler" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-700">Temrinler</h3>
                
                {/* Sınıf Seçimi */}
                <div className="flex gap-2 mb-6 border-b border-gray-300">
                  {["9", "10", "11"].map((sinif) => (
                    <button
                      key={sinif}
                      onClick={() => {
                        setActiveSinif(sinif);
                        setActiveTip("elektrik");
                      }}
                      className={`px-4 py-2 font-semibold transition-colors ${
                        activeSinif === sinif
                          ? "text-blue-700 border-b-2 border-blue-700"
                          : "text-gray-600 hover:text-blue-700"
                      }`}
                    >
                      {sinif}. Sınıf
                    </button>
                  ))}
                </div>

                {/* Elektrik/Elektronik Seçimi */}
                <div className="flex gap-2 mb-6 border-b border-gray-300">
                  <button
                    onClick={() => setActiveTip("elektrik")}
                    className={`px-4 py-2 font-semibold transition-colors ${
                      activeTip === "elektrik"
                        ? "text-blue-700 border-b-2 border-blue-700"
                        : "text-gray-600 hover:text-blue-700"
                    }`}
                  >
                    ⚡ Elektrik Temrinleri
                  </button>
                  <button
                    onClick={() => setActiveTip("elektronik")}
                    className={`px-4 py-2 font-semibold transition-colors ${
                      activeTip === "elektronik"
                        ? "text-blue-700 border-b-2 border-blue-700"
                        : "text-gray-600 hover:text-blue-700"
                    }`}
                  >
                    🔌 Elektronik Temrinleri
                  </button>
                </div>

                {/* Temrinler Listesi */}
                <div className="space-y-4">
                  {activeSinif === "9" && activeTip === "elektrik" && temrinler9Elektrik.map((temrin, idx) => (
                    <div key={idx} className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                      <h4 className="text-base sm:text-lg font-bold text-green-600 mb-2 sm:mb-3">{temrin.no}. {temrin.baslik}</h4>
                      <div className="space-y-1 sm:space-y-2 text-xs sm:text-base text-gray-700">
                        <p><strong>Amaç:</strong> {temrin.amac}</p>
                        <p><strong>Malzemeler:</strong> {temrin.malzemeler}</p>
                        <p><strong>Adımlar:</strong> {temrin.adimlar}</p>
                        <p><strong>Güvenlik:</strong> {temrin.guvenlik}</p>
                      </div>
                    </div>
                  ))}
                  {activeSinif === "9" && activeTip === "elektronik" && temrinler9Elektronik.map((temrin, idx) => (
                    <div key={idx} className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                      <h4 className="text-base sm:text-lg font-bold text-blue-600 mb-2 sm:mb-3">{temrin.no}. {temrin.baslik}</h4>
                      <div className="space-y-1 sm:space-y-2 text-xs sm:text-base text-gray-700">
                        <p><strong>Amaç:</strong> {temrin.amac}</p>
                        <p><strong>Malzemeler:</strong> {temrin.malzemeler}</p>
                        <p><strong>Adımlar:</strong> {temrin.adimlar}</p>
                        <p><strong>Güvenlik:</strong> {temrin.guvenlik}</p>
                      </div>
                    </div>
                  ))}
                  {activeSinif === "10" && activeTip === "elektrik" && temrinler10Elektrik.map((temrin, idx) => (
                    <div key={idx} className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                      <h4 className="text-base sm:text-lg font-bold text-green-600 mb-2 sm:mb-3">{temrin.no}. {temrin.baslik}</h4>
                      <div className="space-y-1 sm:space-y-2 text-xs sm:text-base text-gray-700">
                        <p><strong>Amaç:</strong> {temrin.amac}</p>
                        <p><strong>Malzemeler:</strong> {temrin.malzemeler}</p>
                        <p><strong>Adımlar:</strong> {temrin.adimlar}</p>
                        <p><strong>Güvenlik:</strong> {temrin.guvenlik}</p>
                      </div>
                    </div>
                  ))}
                  {activeSinif === "10" && activeTip === "elektronik" && temrinler10Elektronik.map((temrin, idx) => (
                    <div key={idx} className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                      <h4 className="text-base sm:text-lg font-bold text-blue-600 mb-2 sm:mb-3">{temrin.no}. {temrin.baslik}</h4>
                      <div className="space-y-1 sm:space-y-2 text-xs sm:text-base text-gray-700">
                        <p><strong>Amaç:</strong> {temrin.amac}</p>
                        <p><strong>Malzemeler:</strong> {temrin.malzemeler}</p>
                        <p><strong>Adımlar:</strong> {temrin.adimlar}</p>
                        <p><strong>Güvenlik:</strong> {temrin.guvenlik}</p>
                      </div>
                    </div>
                  ))}
                  {activeSinif === "11" && activeTip === "elektrik" && (
                    <div className="bg-white p-6 rounded-lg border-l-4 border-green-500 text-center text-gray-600">
                      <p>11. Sınıfta Elektrik temrinleri bulunmamaktadır.</p>
                    </div>
                  )}
                  {activeSinif === "11" && activeTip === "elektronik" && temrinler11Elektronik.map((temrin, idx) => (
                    <div key={idx} className="bg-white p-4 sm:p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                      <h4 className="text-base sm:text-lg font-bold text-blue-600 mb-2 sm:mb-3">{temrin.no}. {temrin.baslik}</h4>
                      <div className="space-y-1 sm:space-y-2 text-xs sm:text-base text-gray-700">
                        <p><strong>Amaç:</strong> {temrin.amac}</p>
                        <p><strong>Malzemeler:</strong> {temrin.malzemeler}</p>
                        <p><strong>Adımlar:</strong> {temrin.adimlar}</p>
                        <p><strong>Güvenlik:</strong> {temrin.guvenlik}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Labs Tab */}
            {activeTab === "labs" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-700">Laboratuvarlarımız</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "Elektrik Tesisat Laboratuvarı", desc: "Elektrik tesisatı, kablolama ve güvenlik sistemleri" },
                    { name: "Elektronik Devreler Laboratuvarı", desc: "Elektronik bileşenler, devre tasarımı ve analizi" },
                    { name: "Otomasyon Laboratuvarı", desc: "PLC, kumanda devreleri ve endüstriyel otomasyon" },
                    { name: "Motor Kontrol Laboratuvarı", desc: "Motor bağlantıları, kontrol sistemleri ve uygulamaları" },
                  ].map((lab, idx) => (
                    <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                      <h4 className="text-lg font-bold text-blue-600 mb-3">{lab.name}</h4>
                      <p className="text-gray-700">{lab.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Career Tab */}
            {activeTab === "career" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-700">Kariyer Olanakları</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {careerFields.map((field, idx) => (
                    <Card key={idx} className="p-4 hover:shadow-lg transition-shadow">
                      <p className="text-gray-700 font-medium">{field}</p>
                    </Card>
                  ))}
                </div>

                {/* Staj Yapılan Kurumlar */}
                <div className="mt-12 pt-8 border-t border-gray-300">
                  <h4 className="text-xl font-bold text-blue-700 mb-8">Staj Yapılan Kurumlar</h4>
                  <div className="bg-white rounded-lg p-8 overflow-x-auto">
                    <div className="flex items-center gap-16 min-w-min">
                      {internshipPartners.map((partner, idx) => (
                        <div key={idx} className="flex items-center justify-center p-2 flex-shrink-0 transition-transform duration-300 hover:scale-110">
                          <img src={partner.logo} alt={partner.name} className="h-24 w-auto object-contain grayscale" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* University Tab */}
            {activeTab === "university" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-700">Üniversiteye Geçiş</h3>
                <p className="text-gray-700">
                  Bölümümüzü başarıyla tamamlayan öğrenciler, MTOK kontenjanı ile doğrudan aşağıdaki mühendislik programlarına geçiş yapabilirler:
                </p>
                <div className="space-y-4">
                  {universities.map((uni, idx) => (
                    <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-bold text-blue-600 mb-2">{uni.name}</h4>
                        </div>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {uni.advantage}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-green-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Sizde Denemek İstermisiniz?</h2>
          <div className="bg-white rounded-lg p-8 border-2 border-blue-300 text-center">
            <p className="text-gray-700 text-lg mb-6">
              Mini Breadboard ile LED Yakıcı Oyunu
            </p>
            <div className="bg-gray-100 rounded-lg p-12 flex items-center justify-center min-h-64">
              <p className="text-gray-500 text-lg">Oyun İçeriği Yakında Eklenecek...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-950 text-white" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Bize Ulaşın</h2>
          <div className="grid md:grid-cols-3 gap-8">
              <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2 text-xl text-white uppercase tracking-wider">Adres</h4>
                <a
                  href="https://maps.google.com/?q=İkitelli+Osb+Süleyman+Demirel+Bulvarı+İpkas+Sanayi+Sitesi+No:12+Başakşehir+İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-50 hover:text-white transition-colors font-bold text-base cursor-pointer"
                >
                  İkitelli Osb Süleyman Demirel Bulvarı<br />
                  İpkas Sanayi Sitesi No:12<br />
                  Başakşehir/İstanbul
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2 text-xl text-white uppercase tracking-wider">Telefon</h4>
                <a
                  href="tel:+902124071718"
                  className="text-blue-50 hover:text-white transition-colors font-bold text-base"
                >
                  0 (212) 407 17 18
                </a>
                <p className="text-blue-100 text-sm mt-2">Pazartesi-Cuma: 08:00-17:00</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2 text-xl text-white uppercase tracking-wider">E-posta</h4>
                <a
                  href="mailto:info@topkapiokullari.com"
                  className="text-blue-50 hover:text-white transition-colors font-bold text-base"
                >
                  info@topkapiokullari.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-12 pt-8 border-t border-blue-800 text-center">
            <h4 className="font-bold mb-4 text-xl text-white uppercase tracking-wider">Sosyal Medya</h4>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://www.facebook.com/TopkapiOkullari/?locale=tr_TR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-50 hover:text-white transition-colors font-bold text-lg"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/elektrik_topkapiokullari/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-50 hover:text-white transition-colors font-bold text-lg"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@topkapiokullari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-50 hover:text-white transition-colors font-bold text-lg"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-100 py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © 2026 Topkapı Okulları - Elektrik Elektronik Bölümü. Tüm hakları saklıdır.
          </p>
          <p className="text-sm mt-2 text-green-400 italic font-semibold">"Ayrıcalıklar bu okulda"</p>
        </div>
      </footer>
    </div>
  );
}
