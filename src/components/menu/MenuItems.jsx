import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const MenuItems = [
  {
    title: "Ana Sayfa",
    url: "ana-sayfa",
  },
  {
    title: "Lütfen önce bu kılavuzu okuyunuz",
    url: "kılavuz",
  },
  {
    title: "Güvenlik Talimatları",
    url: "güvenlik-talimatları",
    icon: <ArrowForwardIosIcon />,
    submenu: [
      {
        title: "Kullanım Amacı",
        url: "kullanım-amacı",
      },
      {
        title: "Elektrik Güvenliği",
        url: "elektrik-güvenliği",
      },
      {
        title: "Yangın Güvenliği",
        url: "yangın-güvenliği",
      },
      {
        title: "Taşıma Güvenliği",
        url: "taşıma-güvenliği",
      },
      {
        title: "Kurulum Güvenliği",
        url: "kurulum-güvenliği",
      },
      {
        title: "Çocuk, Savunmasız Kişi ve Evcil Hayvan Güvenliği",
        url: "çocuk-güvenliği",
      },
      {
        title: "Bakım ve Temizlik Güvenliği",
        url: "bakım-ve-temizlik-güvenliği",
      },
    ],
  },
  {
    title: "Çevre Talimatları ve Genel Bilgiler",
    url: "çevre-talimatları-ve-genel-bilgiler",
    icon: <ArrowForwardIosIcon />,
    submenu: [
      {
        title: "AEEE Yönetmeliğine Uyum ve Atık Ürünün Elden Çıkarılması",
        url: "yönetmelik-ve-atık",
      },
      {
        title: "Pil Atıkları ile İlgili Bilgiler",
        url: "pil-atıkları",
      },
      {
        title: "Ambalajın İmha Edilmesi ile İlgili Bilgiler",
        url: "ambalaj-imha",
      },
      {
        title: "PCB Uygunluğu ile İlgili Bilgiler",
        url: "pcb-uygunluğu",
      },
      {
        title: "Arayüz Kriterleri ile İlgili Bilgiler",
        url: "arayüz-kriterleri",
      },
      {
        title: "Enerji Tasarrufu ile İlgili Bilgiler",
        url: "enerji-tasarrufu",
      },
      {
        title: "Durağan Resimiler ile İlgili Bilgiler",
        url: "durağan-resimler",
      },
      {
        title: "Yazılım GÜncellemesi ile İlgili Bilgiler",
        url: "yazılım-güncelleme",
      },
      {
        title: "Elektromanyetik Gürültü ile İlgili Bilgiler",
        url: "elektromanyetik-gürültü",
      },
      {
        title: "AB Direktifleri",
        url: "ab-direktifleri",
      },
      {
        title: "Türkiye'deki Müşteriler İçin Not",
        url: "türkiyedeki-müşteriler",
      },
      {
        title:
          "Cihazın Arka Kapağında Bulunabilecek İşaretler ile İlgili Bilgiler",
        url: "arka-kapak-işaretler",
      },
      {
        title: "Lisanslar ile İlgili Bilgiler",
        url: "lisanslar",
      },
      {
        title: "Kablosuz LAN Modülü Spesifikasyonu",
        url: "kablosuz-lan-1",
      },
      {
        title: "Kablosuz LAN Modülü Spesifikasyonu",
        url: "kablosuz-lan-2",
      },
      {
        title: "Bluetooth(*) Modülü Spesifikasyonu",
        url: "blueetoth",
      },
      {
        title: "Yetkili Satıcılar İçin Servis Bilgileri",
        url: "yetkili-satıcılar",
      },
      {
        title: "Kablosuz (WLAN) Bağlantı İçin Notlar",
        url: "kablosuz-wlan",
      },
      {
        title: "",
        url: "",
      },
    ],
  },
  {
    title: "Ürününüz",
    url: "ürün",
    icon: <ArrowForwardIosIcon />,
    submenu: [
      {
        title: "Paketin İçindekiler",
        url: "paketin-içindekiler",
      },
      {
        title: "Kurulum veya Asma",
        url: "kurulum-veya-asma",
        submenu: [
          {
            title: "Ayaklı Kurulum",
            url: "ayaklı-kurulum",
          },
          {
            title: "VESA Montaj Kiti ile Montaj Hazırlığı",
            url: "vesa-montaj",
          },
        ],
      },
      {
        title:"Uzaktan Kumandaya Pillerin Takılması",
        url:"uzaktan-kumanda-pil",
      },
      {
        title:"Ürün Tanıtımı",
        url:"ürün-tanıtım",
      },
      {
        title:"Tuş Takımı",
        url:"tuş-takımı",
        submenu: [
          {
            title:"Cihazın Bekleme Konumundan Açılması",
            url:"bekleme-konumu-açılma",
          },
          {
            title:"Cihazın Bekleme Konumuna Alınması",
            url:"bekleme-konumuna-alma",
          },
          {
            title:"Cihazın Uyku Konumuna Alınması ve Açılması",
            url:"uyku-konumu",
          },
        ]
      },
      {
        title:"Anten ve Elektrik Kablosunu Bağlama",
        url:"anten-ve-elektrik-kablosu",
        submenu: [
          {
            title:"DVB-S Uydu Anten Bağlantısı",
            url:"dvbs-anten-bağlantısı",
          },
          {
            title:"DVB-T, DVB-C ve Analog Anten Bağlantısı",
            url:"dvbt-dvbc-ve-analog-anten-bağlantısı",
          },
        ]
      },
    ],
  },
  {
    title: "Ayarlar",
    url: "ayarlar",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "Televizyonun Çalıştırılması Temel Fonksiyonlar",
    url: "temel-fonksiyonlar",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "Televizyonun Çalıştırılması Gelişmiş Fonksiyonlar",
    url: "gelişmiş-fonksiyonlar",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "HBBTV",
    url: "hbbtv",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "Teleteks",
    url: "teleteks",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "USB Kayıt",
    url: "usb-kayıt",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "USB Oynatıcı",
    url: "usb-oynatıcı",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "Android TV",
    url: "android-tv",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "Chromecast Built-in{&trade;}",
    url: "cromecast-built-in",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "Cihaz Tercihleri",
    url: "cihaz-tercihleri",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "Aksesuarlar",
    url: "aksesuarlar",
  },
  {
    title: "Ebeveyn Ayarları",
    url: "ebeveyn-ayarları",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "Harici Cihaz Kullanma",
    url: "harici-cihaz-kullanma",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "Ağ Kurulumu",
    url: "ağ-kurulumu",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "Detaylı Kanal Ayarları",
    url: "detaylı-kanal-ayarları",
    icon: <ArrowForwardIosIcon />,
  },
  {
    title: "Ek bilgiler",
    url: "ek-bilgiler",
  },
  {
    title: "Sözlük",
    url: "sözlük",
  },
  {
    title: "Sorun Giderme",
    url: "sorun-giderme",
  },
  {
    title: "Müşteri Memnuniyeti Politikası",
    url: "müşteri-memnuniyeti-politikası",
  },
];
