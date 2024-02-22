import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const MenuItems = [
  {
    title: "Ana Sayfa",
    url: "/",
    id: 0,
  },
  {
    title: "Lütfen önce bu kılavuzu okuyun!",
    url: "/kılavuz",
    id: 10000
  },
  {
    title: "Güvenlik Talimatları",
    url: "/güvenlik-talimatları",
    id: 20000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Kullanım Amacı",
        url: "/güvenlik-talimatları/kullanım-amacı",
        id: 20100
      },
      {
        title: "Elektrik Güvenliği",
        url: "/güvenlik-talimatları/elektrik-güvenliği",
        id: 20200
      },
      {
        title: "Yangın Güvenliği",
        url: "/güvenlik-talimatları/yangın-güvenliği",
        id: 20300
      },
      {
        title: "Taşıma Güvenliği",
        url: "/güvenlik-talimatları/taşıma-güvenliği",
        id: 20400
      },
      {
        title: "Kurulum Güvenliği",
        url: "/güvenlik-talimatları/kurulum-güvenliği",
        id: 20500
      },
      {
        title: "Çocuk, Savunmasız Kişi ve Evcil Hayvan Güvenliği",
        url: "/güvenlik-talimatları/çocuk-savunmasız-kişi-ve-evcil-hayvan-güvenliği",
        id: 20600
      },
      {
        title: "Bakım ve Temizlik Güvenliği",
        url: "/güvenlik-talimatları/bakım-ve-temizlik-güvenliği",
        id: 20700
      },
    ],
  },
  {
    title: "Çevre Talimatları ve Genel Bilgiler",
    url: "/çevre-talimatları-ve-genel-bilgiler",
    id: 30000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "AEEE Yönetmeliğine Uyum ve Atık Ürünün Elden Çıkarılması",
        url: "/çevre-talimatları-ve-genel-bilgiler/yönetmelik-ve-atık",
        id: 30100
      },
      {
        title: "Pil Atıkları ile İlgili Bilgiler",
        url: "/çevre-talimatları-ve-genel-bilgiler/pil-atıkları",
        id: 30200
      },
      {
        title: "Ambalajın İmha Edilmesi ile İlgili Bilgiler",
        url: "/çevre-talimatları-ve-genel-bilgiler/ambalaj-imha",
        id: 30300
      },
      {
        title: "PCB Uygunluğu ile İlgili Bilgiler",
        url: "/çevre-talimatları-ve-genel-bilgiler/pcb-uygunluğu",
        id: 30400
      },
      {
        title: "Arayüz Kriterleri ile İlgili Bilgiler",
        url: "/çevre-talimatları-ve-genel-bilgiler/arayüz-kriterleri",
        id: 30500
      },
      {
        title: "Enerji Tasarrufu ile İlgili Bilgiler",
        url: "/çevre-talimatları-ve-genel-bilgiler/enerji-tasarrufu",
        id: 30600
      },
      {
        title: "Durağan Resimler ile İlgili Bilgiler",
        url: "/çevre-talimatları-ve-genel-bilgiler/durağan-resimler",
        id: 30700
      },
      {
        title: "Yazılım Güncellemesi ile İlgili Bilgiler",
        url: "/çevre-talimatları-ve-genel-bilgiler/yazılım-güncelleme",
        id: 30800
      },
      {
        title: "Elektromanyetik Gürültü ile İlgili Bilgiler",
        url: "/çevre-talimatları-ve-genel-bilgiler/elektromanyetik-gürültü",
        id: 30900
      },
      {
        title: "AB Direktifleri",
        url: "/çevre-talimatları-ve-genel-bilgiler/ab-direktifleri",
        id: 31000
      },
      {
        title: "Türkiye'deki Müşteriler İçin Not",
        url: "/çevre-talimatları-ve-genel-bilgiler/türkiyedeki-müşteriler",
        id: 31100
      },
      {
        title: "Cihazın Arka Kapağında Bulunabilecek İşaretler ile İlgili Bilgiler",
        url: "/çevre-talimatları-ve-genel-bilgiler/arka-kapak-işaretler",
        id: 31200
      },
      {
        title: "Lisanslar ile İlgili Bilgiler",
        url: "/çevre-talimatları-ve-genel-bilgiler/lisanslar",
        id: 31300
      },
      {
        title: "Kablosuz LAN Modülü Spesifikasyonu",
        url: "/çevre-talimatları-ve-genel-bilgiler/kablosuz-lan-1",
        id: 31400
      },
      {
        title: "Kablosuz LAN Modülü Spesifikasyonu",
        url: "/çevre-talimatları-ve-genel-bilgiler/kablosuz-lan-2",
        id: 31500
      },
      {
        title: "Bluetooth(*) Modülü Spesifikasyonu",
        url: "/çevre-talimatları-ve-genel-bilgiler/bluetooth",
        id: 31600
      },
      {
        title: "Yetkili Satıcılar İçin Servis Bilgileri",
        url: "/çevre-talimatları-ve-genel-bilgiler/yetkili-satıcılar",
        id: 31700
      },
      {
        title: "Kablosuz (WLAN) Bağlantı İçin Notlar",
        url: "/çevre-talimatları-ve-genel-bilgiler/kablosuz-wlan",
        id: 31800
      },
    ],
  },
  {
    title: "Ürününüz",
    url: "/ürün",
    id: 40000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Paketin İçindekiler",
        url: "/ürün/paketin-içindekiler",
        id: 40100
      },
      {
        title: "Kurulum veya Asma",
        url: "/ürün/kurulum-veya-asma",
        id: 40200,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Ayaklı Kurulum",
            url: "/ürün/kurulum-veya-asma/ayaklı-kurulum",
            id: 40201
          },
          {
            title: "VESA Montaj Kiti ile Montaj Hazırlığı",
            url: "/ürün/kurulum-veya-asma/vesa-montaj",
            id: 40202
          },
        ],
      },
      {
        title: "Uzaktan Kumandaya Pillerin Takılması",
        url: "/ürün/uzaktan-kumanda-pil",
        id: 40300
      },
      {
        title: "Ürün Tanıtımı",
        url: "/ürün/ürün-tanıtımı",
        id: 40400,
      },
      {
        title: "Tuş Takımı",
        url: "/ürün/tuş-takımı",
        id: 40500,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Cihazın Bekleme Konumundan Açılması",
            url: "/ürün/tuş-takımı/bekleme-konumu-açılma",
            id: 40501
          },
          {
            title: "Cihazın Bekleme Konumuna Alınması",
            url: "/ürün/tuş-takımı/bekleme-konumuna-alma",
            id: 40502
          },
          {
            title: "Cihazın Uyku Konumuna Alınması ve Açılması",
            url: "/ürün/tuş-takımı/uyku-konumu",
            id: 40503
          },
        ]
      },
      {
        title: "Anten ve Elektrik Kablosunu Bağlama",
        url: "/ürün/anten-ve-elektrik-kablosu",
        id: 40600,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "DVB-S Uydu Anten Bağlantısı",
            url: "/ürün/anten-ve-elektrik-kablosu/dvbs-anten-bağlantısı",
            id: 40601
          },
          {
            title: "DVB-T, DVB-C ve Analog Anten Bağlantısı",
            url: "/ürün/anten-ve-elektrik-kablosu/dvbt-dvbc-ve-analog-anten-bağlantısı",
            id: 40602
          },
          {
            title: "Elektrik Bağlantısı",
            url: "/ürün/anten-ve-elektrik-kablosu/elektrik-bağlantısı",
            id: 40603
          },
        ]
      },
      {
        title: "Uzaktan Kumanda",
        url: "/ürün/uzaktan-kumanda",
        id: 40700
      },
    ],
  },
  {
    title: "Ayarlar",
    url: "/ayarlar",
    id: 50000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Hazırlık",
        url: "/ayarlar/hazırlık",
        id: 50100,
      },
      {
        title: "İlk Kurulum ve Televizyonu Ayarlama",
        url: "/ayarlar/kurulum",
        id: 50200,
      },
      {
        title: "Dijital Kanalları Düzenleme",
        url: "/ayarlar/dijital-kanalları-düzenleme",
        id: 50300,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Kanal Düzenleyici Uygulamasını Başlatma",
            url: "/ayarlar/dijital-kanalları-düzenleme/kanal-düzenleyici",
            id: 50301
          },
          {
            title: "Yayın Kaynağı Seçimi",
            url: "/ayarlar/dijital-kanalları-düzenleme/yayın-kaynağı-seçimi",
            id: 50302
          },
          {
            title: "Favori Listesi Oluşturma",
            url: "/ayarlar/dijital-kanalları-düzenleme/favori-listesi-oluşturma",
            id: 50303
          },
          {
            title: "Favori Listesinde Kanal Taşıma",
            url: "/ayarlar/dijital-kanalları-düzenleme/favori-listesinde-kanal-taşıma",
            id: 50304
          },
          {
            title: "Favori Listesinde Kanal Yeri Değiştirme",
            url: "/ayarlar/dijital-kanalları-düzenleme/favori-listesinde-kanal-yeri-değiştirme",
            id: 50305
          },
          {
            title: "Favori Listesinden Kanal Silme",
            url: "/ayarlar/dijital-kanalları-düzenleme/favori-listesinden-kanal-silme",
            id: 50306
          },
          {
            title: "Kanal Taşıma",
            url: "/ayarlar/dijital-kanalları-düzenleme/kanal-taşıma",
            id: 50307
          },
          {
            title: "Kanal Yerini Değiştirme",
            url: "/ayarlar/dijital-kanalları-düzenleme/kanal-yerini-değiştirme",
            id: 50308
          },
          {
            title: "Kanal Silme",
            url: "/ayarlar/dijital-kanalları-düzenleme/kanal-silme",
            id: 50309
          },
          {
            title: "Kanal Listesini Silme",
            url: "/ayarlar/dijital-kanalları-düzenleme/kanal-listesini-silme",
            id: 50310
          },
          {
            title: "Kanal Düzenleme",
            url: "/ayarlar/dijital-kanalları-düzenleme/kanal-düzenleme",
            id: 50311
          },
          {
            title: "Kanal Atlatma",
            url: "/ayarlar/dijital-kanalları-düzenleme/kanal-atlatma",
            id: 50312
          },
        ]
      },
      {
        title: "Görüntü Ayarları",
        url: "/ayarlar/görüntü-ayarları",
        id: 50400,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Arttırılmış Görüntü Ayarları",
            url: "/ayarlar/görüntü-ayarları/arttırılmış-görüntü-ayarları",
            id: 50401
          },
          {
            title: "Görüntü Ayarlarını Fabrika Ayarlarına Döndürme",
            url: "/ayarlar/görüntü-ayarları/görüntü-ayarlarını-fabrika-ayarlarına-döndürme",
            id: 50402
          },
        ]
      },
      {
        title: "Ses Ayarları",
        url: "/ayarlar/ses-ayarları",
        id: 50500,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Sistem Sesleri",
            url: "/ayarlar/ses-ayarları/sistem-sesleri",
            id: 50501
          },
          {
            title: "Balans",
            url: "/ayarlar/ses-ayarları/balans",
            id: 50502
          },
          {
            title: "Bas",
            url: "/ayarlar/ses-ayarları/bas",
            id: 50503
          },
          {
            title: "Tiz",
            url: "/ayarlar/ses-ayarları/tiz",
            id: 50504
          },
          {
            title: "Surround Ses",
            url: "/ayarlar/ses-ayarları/surround-ses",
            id: 50505
          },
          {
            title: "Ekolayzer",
            url: "/ayarlar/ses-ayarları/ekolayzer",
            id: 50506
          },
          {
            title: "Hoparlör Gecikmesi",
            url: "/ayarlar/ses-ayarları/hoparlör-gecikmesi",
            id: 50507
          },
          {
            title: "eARC",
            url: "/ayarlar/ses-ayarları/earc",
            id: 50508
          },
          {
            title: "Dijital Giriş",
            url: "/ayarlar/ses-ayarları/dijital-giriş",
            id: 50509
          },
          {
            title: "Dijital Çıkış",
            url: "/ayarlar/ses-ayarları/dijital-çıkış",
            id: 50510
          },
          {
            title: "SPDIF Gecikmesi",
            url: "/ayarlar/ses-ayarları/spdif-gecikmesi",
            id: 50511
          },
          {
            title: "Dijital Çıkış Gecikmesi",
            url: "/ayarlar/ses-ayarları/dijital-çıkış-gecikmesi",
            id: 50512
          },
          {
            title: "Otomatik Ses",
            url: "/ayarlar/ses-ayarları/otomatik-ses",
            id: 50513
          },
          {
            title: "Downmix Modu",
            url: "/ayarlar/ses-ayarları/downmix-modu",
            id: 50514
          },
          {
            title: "DTS DRC",
            url: "/ayarlar/ses-ayarları/dts-drc",
            id: 50515
          },
          {
            title: "Ses Ayarlarını Fabrika Ayarlarına Döndürme",
            url: "/ayarlar/ses-ayarları/ses-ayarlarını-fabrika-ayarlarına-döndürme",
            id: 50516
          },
        ]
      },
    ]
  },
  {
    title: "Televizyonun Çalıştırılması Temel Fonksiyonlar",
    url: "/temel-fonksiyonlar",
    id: 60000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Açma ve Kapatma",
        url: "/temel-fonksiyonlar/açma-ve-kapatma",
        id: 60100
      },
      {
        title: "TV Modunu Seçme",
        url: "/temel-fonksiyonlar/tv-modunu-seçme",
        id: 60200
      },
      {
        title: "Sinyal Kaynağı ve Anten Tipini Seçme",
        url: "/temel-fonksiyonlar/sinyal-kaynağı-ve-anten-tipini-seçme",
        id: 60300
      },
      {
        title: "Kanalları Seçme",
        url: "/temel-fonksiyonlar/kanalları-seçme",
        id: 60400
      },
      {
        title: "Ses Seviyesini Ayarlama",
        url: "/temel-fonksiyonlar/ses-seviyesini-ayarlama",
        id: 60500
      },
      {
        title: "Sesi Kapatma (Mute)",
        url: "/temel-fonksiyonlar/sesi-kapatma",
        id: 60600
      },
      {
        title: "Ses Stili",
        url: "/temel-fonksiyonlar/ses-stili",
        id: 60700
      },
      {
        title: "Resim Modu",
        url: "/temel-fonksiyonlar/resim-modu",
        id: 60800
      },
      {
        title: "Görüntü Formatını Değiştirme",
        url: "/temel-fonksiyonlar/görüntü-formatını-değiştirme",
        id: 60900
      },
      {
        title: "Güç Ayarları",
        url: "/temel-fonksiyonlar/güç-ayarları",
        id: 61000,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Uyku Zamanlayıcısı",
            url: "/temel-fonksiyonlar/güç-ayarları/uyku-zamanlayıcısı",
            id: 61001
          },
          {
            title: "Görüntüyü Kapatma",
            url: "/temel-fonksiyonlar/güç-ayarları/görüntüyü-kapatma",
            id: 61002
          },
          {
            title: "Kapanma Zamanlayıcısı",
            url: "/temel-fonksiyonlar/güç-ayarları/kapanma-zamanlayıcısı",
            id: 61003
          },
          {
            title: "Sinyal Olmadığında Otomatik Kapanma",
            url: "/temel-fonksiyonlar/güç-ayarları/sinyal-olmadığında-otomatik-kapanma",
            id: 61004
          },
        ]
      },
      {
        title: "Elektronik TV Rehberi",
        url: "/temel-fonksiyonlar/elektronik-tv-rehberi",
        id: 61100
      },
    ]
  },
  {
    title: "Televizyonun Çalıştırılması Gelişmiş Fonksiyonlar",
    url: "/gelişmiş-fonksiyonlar",
    id: 70000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Ses Dilinin Değiştirilmesi",
        url: "/gelişmiş-fonksiyonlar/ses-dilinin-değiştirilmesi",
        id: 70100
      },
      {
        title: "Ses Dili",
        url: "/gelişmiş-fonksiyonlar/ses-dili",
        id: 70200
      },
      {
        title: "Mavi Ekran",
        url: "/gelişmiş-fonksiyonlar/mavi-ekran",
        id: 70300
      },
      {
        title: "Varsayılan Kanal",
        url: "/gelişmiş-fonksiyonlar/varsayılan-kanal",
        id: 70400
      },
      {
        title: "Etkileşim Kanalı",
        url: "/gelişmiş-fonksiyonlar/etkileşim-kanalı",
        id: 70500
      },
      {
        title: "MHEG PIN Koruması",
        url: "/gelişmiş-fonksiyonlar/mheg-pin-koruması",
        id: 70600
      },
      {
        title: "Altyazılar",
        url: "/gelişmiş-fonksiyonlar/altyazılar",
        id: 70700,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Analog Altyazı",
            url: "/gelişmiş-fonksiyonlar/altyazılar/analog-altyazı",
            id: 70701
          },
          {
            title: "Dijital Altyazı",
            url: "/gelişmiş-fonksiyonlar/altyazılar/dijital-altyazı",
            id: 70702
          },
          {
            title: "Dijital Altyazı Dili",
            url: "/gelişmiş-fonksiyonlar/altyazılar/dijital-altyazı-dili",
            id: 70703
          },
          {
            title: "İkinci Dijital Altyazı Dili",
            url: "/gelişmiş-fonksiyonlar/altyazılar/ikinci-dijital-altyazı-dili",
            id: 70704
          },
          {
            title: "Altyazı Türü",
            url: "/gelişmiş-fonksiyonlar/altyazılar/altyazı-türü",
            id: 70705
          },
        ]
      },
      {
        title: "Teleteks Dil Seçimi",
        url: "/gelişmiş-fonksiyonlar/teleteks-dil-seçimi",
        id: 70800,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Dijital Teletesk Dili",
            url: "/gelişmiş-fonksiyonlar/teleteks-dil-seçimi/dijital-teleteks-dili",
            id: 70801
          },
          {
            title: "Sayfa Deşifre Etme dili",
            url: "/gelişmiş-fonksiyonlar/teleteks-dil-seçimi/sayfa-deşifre-etme-dili",
            id: 70802
          }
        ]
      },
      {
        title: "BISS Anahtarı",
        url: "/gelişmiş-fonksiyonlar/biss-anahtarı",
        id: 70900
      },
      {
        title: "TKGS Ayarları",
        url: "/gelişmiş-fonksiyonlar/tkgs-ayarları",
        id: 71000,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Çalışma Şekli",
            url: "/gelişmiş-fonksiyonlar/tkgs-ayarları/çalışma-şekli",
            id: 71001
          },
          {
            title: "TKGS Konum Listesi",
            url: "/gelişmiş-fonksiyonlar/tkgs-ayarları/tkgs-konum-listesi",
            id: 71002
          },
          {
            title: "Tablo Versiyonu Sıfırlama",
            url: "/gelişmiş-fonksiyonlar/tkgs-ayarları/tablo-versiyonu-sıfırlama",
            id: 71003
          },
          {
            title: "Tercih Edilen Liste",
            url: "/gelişmiş-fonksiyonlar/tkgs-ayarları/tercih-edilen-liste",
            id: 71004
          }
        ]
      },
      {
        title: "Sinyal Bilgileri",
        url: "/gelişmiş-fonksiyonlar/sinyal-bilgileri",
        id: 71100
      }
    ]
  },
  {
    title: "HBBTV",
    url: "/hbbtv",
    id: 80000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "HbbTV Nedir?",
        url: "/hbbtv/hbbtv-nedir",
        id: 80100
      },
      {
        title: "HbbTV'nin Kullanımı",
        url: "/hbbtv/hbbtv-kullanımı",
        id: 80200
      },
      {
        title: "Video Dizinleri İçin Ek Fonksiyonlar",
        url: "/hbbtv/video-dizinleri-için-ek-fonksiyonlar",
        id: 80300
      },
      {
        title: "HBBTV Ayarları",
        url: "/hbbtv/hbbtv-ayarları",
        id: 80400,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "HBBTV Desteği",
            url: "/hbbtv/hbbtv-ayarları/hbbtv-desteği",
            id: 80401
          },
          {
            title: "İzleme Tercihi",
            url: "/hbbtv/hbbtv-ayarları/izleme-tercihi",
            id: 80402
          },
          {
            title: "Çerez Ayarları",
            url: "/hbbtv/hbbtv-ayarları/çerez-ayarları",
            id: 80403
          },
          {
            title: "Kalıcı Depolama",
            url: "/hbbtv/hbbtv-ayarları/kalıcı-depolama",
            id: 80404
          },
          {
            title: "İzleme Sitelerini Engelle",
            url: "/hbbtv/hbbtv-ayarları/izleme-sitelerini-engelle",
            id: 80405
          },
          {
            title: "Cihaz Kimliği",
            url: "/hbbtv/hbbtv-ayarları/cihaz-kimliği",
            id: 80406
          },
          {
            title: "Cihaz Kimliğini Sıfırlama",
            url: "/hbbtv/hbbtv-ayarları/cihaz-kimliğini-sıfırlama",
            id: 80407
          }
        ]
      }
    ]
  },
  {
    title: "Teleteks",
    url: "/teleteks",
    id: 90000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "TOP Tekst veya FLOF Tekst Modu",
        url: "/teleteks/top-tekst-veya-flof-tekst-modu",
        id: 90100
      },
      {
        title: "Normal Tekst Modu",
        url: "/teleteks/normal-tekst-modu",
        id: 90200
      }
    ]
  },
  {
    title: "USB Kayıt",
    url: "/usb-kayıt",
    id: 100000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Televizyon Programlarının Kaydedilmesi ve Oynatılmasıyla İlgili Bilgiler",
        url: "/usb-kayıt/televizyon-programlarının-kaydedilmesi-ve-oynatılmasıyla-ilgili-bilgiler",
        id: 100100
      },
      {
        title: "Harici Veri Ortamı Kullanımında Muhtemel Kısıtlamalar",
        url: "/usb-kayıt/harici-veri-ortamı-kullanımında-muhtemel-kısıtlamalar",
        id: 100200
      },
      {
        title: "Harici Veri Ortamının Bağlanması",
        url: "/usb-kayıt/harici-veri-ortamının-bağlanması",
        id: 100300
      },
      {
        title: "USB Kayıt Ayarları",
        url: "/usb-kayıt/usb-kayıt-ayarları",
        id: 100400,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Veri Ortamının Biçimlendirilmesi",
            url: "/usb-kayıt/usb-kayıt-ayarları/veri-ortamının-biçimlendirilmesi",
            id: 100401
          },
          {
            title: "Kayıt / Zaman Kaydırma için Veri Ortamnın Seçilmesi",
            url: "/usb-kayıt/usb-kayıt-ayarları/kayıt-zaman-kaydırma-için-veri-ortamın-seçilmesi",
            id: 100402
          },
          {
            title: "Veri Ortamı Testi",
            url: "/usb-kayıt/usb-kayıt-ayarları/veri-ortamı-testi",
            id: 100403
          }
        ]
      },
      {
        title: "Zaman Kaydırma Fonksiyonunun Açılıp / Kapatılması",
        url: "/usb-kayıt/zaman-kaydırma-fonksiyonunun-açılıp-kapatılması",
        id: 100500
      },
      {
        title: "Zaman Kaydırma Disk Kurulumu",
        url: "/usb-kayıt/zaman-kaydırma-disk-kurulumu",
        id: 100600,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Otomatik Kurulum",
            url: "/usb-kayıt/zaman-kaydırma-disk-kurulumu/otomatik-kurulum",
            id: 100601
          },
          {
            title: "Manuel Kurulum",
            url: "/usb-kayıt/zaman-kaydırma-disk-kurulumu/manuel-kurulum",
            id: 100602
          }
        ]
      },
      {
        title: "Zaman Kaydırma ve Sürekli Kayıt ile Programların Duraklatılması",
        url: "/usb-kayıt/zaman-kaydırma-ve-sürekli-kayıt-ile-programların-duraklatılması",
        id: 100700
      },
      {
        title: "Programları Kaydetme",
        url: "/usb-kayıt/programları-kaydetme",
        id: 100800,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Kayıt Sırasında Televizyonun Bekleme Konumuna Alınması",
            url: "/usb-kayıt/programları-kaydetme/kayıt-sırasında-televizyonun-bekleme-konumuna-alınması",
            id: 100801
          },
          {
            title: "Kanal Listesinden Bir Programı Kaydetme",
            url: "/usb-kayıt/programları-kaydetme/kanal-listesinden-bir-programı-kaydetme",
            id: 100802
          }
        ]
      },
      {
        title: "Kayıt Zamanlayıcısı",
        url: "/usb-kayıt/kayıt-zamanlayıcısı",
        id: 100900,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Elektronik Program Rehberi Kullanarak Kayıt Zamanlayıcı Eklenmesi",
            url: "/usb-kayıt/programları-kayıt-zamanlayıcısı/elektronik-program-rehberi-kullan-kayıt-zamanlayıcı-eklenmesi",
            id: 100901
          },
          {
            title: "Bilgileri Manuel Girerek Kayıt Zamanlayıcı Eklenmesi",
            url: "/usb-kayıt/kayıt-zamanlayıcısı/bilgileri-manuel-girerek-kayıt-zamanlayıcı-eklenmmesi",
            id: 100902
          },
          {
            title: "Kayıt Zamanlayıcısının Düzenlenmesi",
            url: "/usb-kayıt/kayıt-zamanlayıcısı/kayıt-zamanlayıcısının-düzenlenmesi",
            id: 100903
          },
          {
            title: "Kayıt Zamanlayıcısının Silinmesi",
            url: "/usb-kayıt/kayıt-zamanlayıcısı/kayıt-zamanlayıcısının-silinmesi",
            id: 100904
          }
        ]
      },
      {
        title: "Oynatma",
        url: "/usb-kayıt/oynatma",
        id: 101000,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Kayıtlı Dosyalar Listesinden Bir Kayıt Oynatma",
            url: "/usb-kayıt/oynatma/kayıtlı-dosyalar-listesinden-bir-kayıt-oynatma",
            id: 101001
          },
          {
            title: "İleri / Geri Görüntü Arama",
            url: "/usb-kayıt/oynatma/ileri-geri-görüntü-arama",
            id: 101002
          }
        ]
      },
      {
        title: "Kaydedilenler Listesinden Kaydedilmiş Yayınların Silinmesi",
        url: "/usb-kayıt/kaydedilenler-listesinden-kaydedilmiş-yayınların-silinmesi",
        id: 101100
      }
    ]
  },
  {
    title: "USB Oynatıcı",
    url: "/usb-oynatıcı",
    id: 110000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Dosya Formatları",
        url: "/usb-oynatıcı/dosya-formatları",
        id: 110100,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Video Verileri",
            url: "/usb-oynatıcı/dosya-formatları/video-verileri",
            id: 110101
          },
          {
            title: "Ses Verileri",
            url: "/usb-oynatıcı/dosya-formatları/ses-verileri",
            id: 110102
          },
          {
            title: "Görüntü Verileri",
            url: "/usb-oynatıcı/dosya-formatları/görüntü-verileri",
            id: 110103
          },
        ]
      },
      {
        title: "Harici Veri Ortamının Bağlanması",
        url: "/usb-oynatıcı/harici-veri-ortamının-bağlanması",
        id: 110200
      },
      {
        title: "Harici Veri Ortamının Çıkartılması",
        url: "/usb-oynatıcı/harici-veri-ortamının-çıkartılması",
        id: 110300
      },
      {
        title: "Multi Medya Player Menüsü",
        url: "/usb-oynatıcı/multi-medya-player-menüsü",
        id: 110400
      },
      {
        title: "Oynatma/Çalma Temel Fonksiyonlar",
        url: "/usb-oynatıcı/oynatma-çalma-temel-fonksiyonlar",
        id: 110500
      },
      {
        title: "İlave Oynatma Fonksiyonları",
        url: "/usb-oynatıcı/ilave-oynatma-fonksiyonları",
        id: 110600,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Tüm Dosya Formatında Bilgileri Görüntüleme",
            url: "/usb-oynatıcı/ilave-oynatma-fonksiyonları/tüm-dosya-formatında-bilgileri-görüntüleme",
            id: 110601
          },
          {
            title: "İleri / Geri görüntü Arama",
            url: "/usb-oynatıcı/ilave-oynatma-fonksiyonları/ileri-geri-görüntü-arama",
            id: 110602
          },
          {
            title: "Video Dosyalarında İstenilen Süreye Gitme",
            url: "/usb-oynatıcı/ilave-oynatma-fonksiyonları/video-dosyalarında-istenilen-süreye-gitme",
            id: 110603
          },
          {
            title: "Tekrarlama Fonksiyonu",
            url: "/usb-oynatıcı/ilave-oynatma-fonksiyonları/tekrarlama-fonksiyonu",
            id: 110604
          },
          {
            title: "Video Dosyalarında Görüntü Ayarı",
            url: "/usb-oynatıcı/ilave-oynatma-fonksiyonları/video-dosyalarında-görüntü-ayarları",
            id: 110605
          },
          {
            title: "Video ve Ses Dosyalarında Ses Ayarları",
            url: "/usb-oynatıcı/ilave-oynatma-fonksiyonları/video-ve-ses-dosyalarında-ses-ayarları",
            id: 110606
          },
          {
            title: "Ses Dosyalarını Karışık Çalma",
            url: "/usb-oynatıcı/ilave-oynatma-fonksiyonları/ses-dosyalarını-karışık-çalma",
            id: 110607
          },
          {
            title: "Ses Dosyalarını Ekran Kapalı Çalma",
            url: "/usb-oynatıcı/ilave-oynatma-fonksiyonları/ses-dosyalarını-ekran-kapalı-çalma",
            id: 110608
          },
          {
            title: "Resim Görüntüsünü Dönüdrme",
            url: "/usb-oynatıcı/ilave-oynatma-fonksiyonları/resim-görüntüsünü-döndürme",
            id: 110609
          },
          {
            title: "Resim Görüntüsünü Büyütme (Zoom)",
            url: "/usb-oynatıcı/ilave-oynatma-fonksiyonları/resim-görüntüsünü-büyütme",
            id: 110610
          },
        ]
      },

    ]
  },
  {
    title: "Android TV",
    url: "/android-tv",
    id: 120000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Şartlar, Koşullar Ve Gizlilik",
        url: "/android-tv/şartlar-koşullar-ve-gizlilik",
        id: 120100
      },
      {
        title: "Google Hesabıyla Oturum Açma",
        url: "/android-tv/google-hesabıyla-oturum-açma",
        id: 120200
      },
      {
        title: "Home Menü (Ana Ekran)",
        url: "/android-tv/home-menü",
        id: 120300
      },
      {
        title: "Home Menüsünü Açma",
        url: "/android-tv/home-menüsünü-açma",
        id: 120400
      },
      {
        title: "Home Menüsü Ayarları",
        url: "/android-tv/home-menüsü-ayarları",
        id: 120500,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Home Menüsünde Kanalları Özelleştirme",
            url: "/android-tv/home-menüsü-ayarları/home-menüsünde-kanalları-özelleştirme",
            id: 120501
          },
          {
            title: "Home Menüsü Kanallarında Video / Ses Ön İzlemesi",
            url: "/android-tv/home-menüsü-ayarları/home-menüsü-kanallarında-video-ses-ön-izlemesi",
            id: 120502
          },
          {
            title: "Home Menü Uygulamalar Sekmesindeki Uygulamaların Sıralanması",
            url: "/android-tv/home-menüsü-ayarları/home-menü-uygulamalar-sekmesindeki-uygulamaların-sıralanması",
            id: 120503
          },
          {
            title: "Home Menü Oyunlar Sekmesindeki Uygulamaların Sıralanması",
            url: "/android-tv/home-menüsü-ayarları/home-menü-oyunlar-sekmesindeki-uygulamaların-sıralanması",
            id: 120504
          },
          {
            title: "Home Menü Açık Kaynak Lisansları",
            url: "/android-tv/home-menüsü-ayarları/home-menü-açık-kaynak-lisansları",
            id: 120505
          },
        ]
      },
      {
        title: "Google Play Store'dan Uygulama Yükleme",
        url: "/android-tv/google-play-storedan-uygulama-yükleme",
        id: 120600
      },
      {
        title: "Yüklü Bir Uygulamanın Başlatılması",
        url: "/android-tv/yüklü-bir-uygulamanın-başlatılması",
        id: 120700
      },
      {
        title: "Home Menüsü Uygulamalar Sekmesine Favori Uygulamaların Eklenmesi",
        url: "/android-tv/home-menüsü-uygulamalar-sekmesine-favori-uygulamaların-eklenmesi",
        id: 120800
      },
      {
        title: "Home Menüsü Uygulamalar Sekmesinden Favori Uygulamaların Kaldırılması",
        url:  "/android-tv/home-menüsü-uygulamalar-sekmesinden-favori-uygulamaların-kaldırılması",
        id: 120900
      },
      {
        title: "Uygulamalar Sekmesindeki Uygulamaların Sıralanması",
        url:  "/android-tv/uygulamalar-sekmesindeki-uygulamaların-sıralanması",
        id: 121000
      },
      {
        title: "Uygulama Ayarları",
        url:  "/android-tv/uygulama-ayarları",
        id: 121100,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Uygulamaların Kaldırılması",
            url:  "/android-tv/uygulama-ayarları/uygulamaların-kaldırılması",
            id: 121101
          },
          {
            title: "Uygulamaların Zorla Durdurulması",
            url:  "/android-tv/uygulama-ayarları/uygulamaların-zorla-durdurulması",
            id: 121102
          },
          {
            title: "Uygulama Verilerini Temzileme",
            url:  "/android-tv/uygulama-ayarları/uygulama-verilerini-temizleme",
            id: 121103
          },
          {
            title: "Uygulama Önbelleğinin Temizlenmesi",
            url:  "/android-tv/uygulama-ayarları/uygulama-önbelleğinin-temizlenmesi",
            id: 121104
          },
          {
            title: "Uygulama Varsayılan Ayarları",
            url:  "/android-tv/uygulama-ayarları/uygulama-varsayılan-ayarları",
            id: 121105
          },
          {
            title: "Uygulama Bildirimleri",
            url:  "/android-tv/uygulama-ayarları/uygulama-bildirimleri",
            id: 121106
          },
          {
            title: "Uygulama İzinleri",
            url:  "/android-tv/uygulama-ayarları/uygulama-izinleri",
            id: 121107
          },
          {
            title: "Özel Uygulama Erişimi",
            url:  "/android-tv/uygulama-ayarları/özel-uygulama-erişimi",
            id: 121108
          },
          {
            title: "Uygulama Güvenlik ve Kısıtlamaları",
            url:  "/android-tv/uygulama-ayarları/uygulama-güvenlik-ve-kısıtlamaları",
            id: 121109
          },
        ]
      },
    ]
  },
  {
    title: "Chromecast Built-in™",
    url: "/chromecast-built-in",
    id: 130000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Chromecast ile TV'yi Açma",
        url:  "/chromecast-built-in/chromecast-ile-tvyi-açma",
        id: 130100
      },
      {
        title: "Chromecast'i Android veya İOS Mobil Cihazda Kullanma",
        url:  "/chromecast-built-in/chromecasti-android-veya-ios-mobil-cihazda-kullanma",
        id: 130200
      },
      {
        title: "PC ile Chrome Tarayıcı Sekmesini TV'nizde Yayınlama",
        url:  "/chromecast-built-in/pc-ile-chrome-tarayıcı-sekmesini-tvnizde-yayınlama",
        id: 130300
      },
      {
        title: "Bilgisayar Ekranını TV'de Yayınlama",
        url:  "/chromecast-built-in/bilgisayar-ekranını-tvde-yayınlama",
        id: 130400
      },
      {
        title: "Bilgisayardan Müzik Veya Video Dosyalarını TV'de Yayınlama",
        url:  "/chromecast-built-in/bilgisayardan-müzik-veya-video-dosyalarını-tvde-yayınlama",
        id: 130500
      },
    ]
  },
  {
    title: "Cihaz Tercihleri",
    url: "/cihaz-tercihleri",
    id: 140000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Hakkında",
        url:  "/cihaz-tercihleri/hakkında",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        id: 140100,
        subcategory: [
          {
            title: "Sistem Güncellemesi",
            url:  "/cihaz-tercihleri/hakkında/sistem-güncellemesi",
            id: 140101,
          },
          {
            title: "Cihaz Adı Değiştirme",
            url:  "/cihaz-tercihleri/hakkında/cihaz-adı-değiştirme",
            id: 140102,
          },
          {
            title: "Fabrika Ayarlarına Sıfırlama",
            url:  "/cihaz-tercihleri/hakkında/fabrika-ayarlarına-sıfırlama",
            id: 140103,
          },
          {
            title: "Durum Bilgisi Görüntüleme",
            url:  "/cihaz-tercihleri/hakkında/durum-bilgisi-görüntüleme",
            id: 140104,
          },
          {
            title: "Yasal Bilgileri Görüntüleme",
            url:  "/cihaz-tercihleri/hakkında/yasal-bilgileri-görüntüleme",
            id: 140105,
          },
          {
            title: "Diğer Bilgileri Görüntüleme",
            url:  "/cihaz-tercihleri/hakkında/diğer-bilgileri-görüntüleme",
            id: 140106,
          },
        ]
      },
      {
        title: "Tarih ve Saat Ayarları",
        url:  "/cihaz-tercihleri/tarih-ve-saat-ayarları",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        id: 140200,
        subcategory: [
          {
            title: "Otomatik Tarih ve Saat Ayarı",
            url:  "/cihaz-tercihleri/tarih-ve-saat-ayarları/otomatik-tarih-ve-saat-ayarı",
            id: 140201,
          },
          {
            title: "Manuel Tarih ve Saat Ayarı",
            url:  "/cihaz-tercihleri/tarih-ve-saat-ayarları/manuel-tarih-ve-saat-ayarı",
            id: 140202,
          },
          {
            title: "Saat Dilimini Ayarlama",
            url:  "/cihaz-tercihleri/tarih-ve-saat-ayarları/saat-dilimini-ayarlama",
            id: 140203,
          },
          {
            title: "Saat Biçimini Ayarlama",
            url:  "/cihaz-tercihleri/tarih-ve-saat-ayarları/saat-biçimini-ayarlama",
            id: 140204,
          },
        ]
      },
      {
        title: "Zamanlayıcı Ayarları",
        url:  "/cihaz-tercihleri/zamanlayıcı-ayarları",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        id: 140300,
        subcategory: [
          {
            title: "Otomatik Açılma Zamanlayıcısı",
            url:  "/cihaz-tercihleri/zamanlayıcı-ayarları/otomatik-açılma-zamanlayıcısı",
            id: 140301,
          },
          {
            title: "Otomatik Kapanma Zamanlayıcısı",
            url:  "/cihaz-tercihleri/zamanlayıcı-ayarları/otomatik-kapanma-zamanlayıcısı",
            id: 140302,
          },
        ]
      },
      {
        title: "Dil Ayarları",
        url:  "/cihaz-tercihleri/dil-ayarları",
        id: 140400
      },
      {
        title: "Klavye Ayarları",
        url:  "/cihaz-tercihleri/klavye-ayarları",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        id: 140500,
        subcategory: [
          {
            title: "Mevcut Klavye Ayarları",
            url:  "/cihaz-tercihleri/klavye-ayarları/mevcut-klavye-ayarları",
            id: 140501,
          },
          {
            title: "Gboard Ayarları",
            url:  "/cihaz-tercihleri/klavye-ayarları/gboard-ayarları",
            id: 140502,
          },
          {
            title: "Klavyeleri Yönet",
            url:  "/cihaz-tercihleri/klavye-ayarları/klavyeleri-yönet",
            id: 140503,
          },
        ]
      },
      {
        title: "Depolama Ayarları",
        url:  "/cihaz-tercihleri/depolama-ayarları",
        id: 140600,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Dahili Depolama Alanı",
            url:  "/cihaz-tercihleri/depolama-ayarları/dahili-depolama-alanı",
            id: 140601,
          },
          {
            title: "Çıkarılabilir Depolama Alanı",
            url:  "/cihaz-tercihleri/depolama-ayarları/çıkarılabilir-depolama-alanı",
            id: 140602,
          },
          {
            title: "Çıkarılabilir Depolama Alanını Dahili Depolama Alanı Olarak Kullanma",
            url:  "/cihaz-tercihleri/depolama-ayarları/çıkarılabilir-depolama-alanını-dahili-depolama-alanı-olarak-kullanma",
            id: 140603,
          },
        ]
      },
      {
        title: "Mağaza Modu Ayarları",
        url:  "/cihaz-tercihleri/mağaza-modu-ayarları",
        id: 140700
      },
      {
        title: "Google Asistan Ayarları",
        url:  "/cihaz-tercihleri/google-asistan-ayarları",
        id: 140800
      },
      {
        title: "Chromecast Built-in Ayarları",
        url:  "/cihaz-tercihleri/chromecast-built-in-ayarları",
        id: 140900
      },
      {
        title: "Ekran Koruyucu Ayarları",
        url:  "/cihaz-tercihleri/ekran-koruyucu-ayarları",
        id: 141000
      },
      {
        title: "Enerji Tasarrufu Ayarları",
        url:  "/cihaz-tercihleri/enerji-tasarrufu-ayarları",
        id: 141100
      },
      {
        title: "Konum Ayarları",
        url:  "/cihaz-tercihleri/konum-ayarları",
        id: 141200
      },
      {
        title: "Kullanım ve Teşhis Ayarları",
        url:  "/cihaz-tercihleri/kullanım-ve-teşhis-ayarları",
        id: 141300
      },
      {
        title: "Erişilebilirlik Ayarları",
        url:  "/cihaz-tercihleri/erişilebilirlik-ayarları",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        id: 141400,
        subcategory: [
          {
            title: "Görme Engelliler için Sesli Tanımlama",
            url:  "/cihaz-tercihleri/erişilebilirlik-ayarları/görme-engelliler-için-sesli-tanımlama",
            id: 141401,
          },
          {
            title: "İşitme Engelliler Seçeneğinin Etkinleştirilmesi",
            url:  "/cihaz-tercihleri/erişilebilirlik-ayarları/işitme-engelliler-seçeneğinin-etkinleştirilmesi",
            id: 141402,
          },
          {
            title: "Seslendiren Altyazı Desteğinin Etkinleştirilmesi",
            url:  "/cihaz-tercihleri/erişilebilirlik-ayarları/seslendiren-altyazı-desteğinin-etkinleştirilmesi",
            id: 141403,
          },
          {
            title: "AC4 Diyalog Geliştirme Ayarları",
            url:  "/cihaz-tercihleri/erişilebilirlik-ayarları/ac4-diyalog-geliştirme-ayarları",
            id: 141404,
          },
          {
            title: "Altyazılar",
            url:  "/cihaz-tercihleri/erişilebilirlik-ayarları/altyazılar",
            id: 141405,
          },
          {
            title: "Yüksek Kontrastlı Metin",
            url:  "/cihaz-tercihleri/erişilebilirlik-ayarları/yüksek-kontrastlı-metin",
            id: 141406,
          },
          {
            title: "Metin - Konuşma",
            url:  "/cihaz-tercihleri/erişilebilirlik-ayarları/metin-konuşma",
            id: 141407,
          },
        ]
      },
      {
        title: "Yeniden Başlatma",
        url:  "/cihaz-tercihleri/yeniden-başlatma",
        id: 141500
      },
    ]
  },
  {
    title: "Aksesuarlar",
    url: "/aksesuarlar",
    id: 150000,
  },
  {
    title: "Ebeveyn Ayarları",
    url: "/ebeveyn-ayarları",
    id: 160000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Bir Televizyon Kanalını Engelleme",
        url:  "/ebeveyn-ayarları/bir-televizyon-kanalını-engelleme",
        id: 160100,
      },
      {
        title: "Engellenmiş Bir Televizyon Kanalını İzleme",
        url:  "/ebeveyn-ayarları/engellenmiş-bir-televizyon-kanalını-izleme",
        id: 160200,
      },
      {
        title: "Program Kısıtlamaları",
        url:  "/ebeveyn-ayarları/program-kısıtlamaları",
        id: 160300,
      },
      {
        title: "Bir Harici Kaynağı Engelleme",
        url:  "/ebeveyn-ayarları/bir-harici-kaynağı-engelleme",
        id: 160400,
      },
      {
        title: "Engellenmiş Bir Harici Kaynağı İzleme",
        url:  "/ebeveyn-ayarları/engellenmiş-bir-harici-kaynağı-izleme",
        id: 160500,
      },
      {
        title: "PIN Kodunu Değiştirme",
        url:  "/ebeveyn-ayarları/pin-kodunu-değiştirme",
        id: 160600,
      },
    ]
  },
  {
    title: "Harici Cihaz Kullanma",
    url: "/harici-cihaz-kullanma",
    id: 170000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "CEC (Tüketici Elektroniği Kontrolü)",
        url:  "/harici-cihaz-kullanma/tüketici-elektroniği-kontrolü",
        id: 170100,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Harici Cihazın Bekleme Konumundan Açılması",
            url:  "/harici-cihaz-kullanma/tüketici-elektroniği-kontrolü/harici-cihazın-bekleme-konumundan-açılması",
            id: 170101,
          },
          {
            title: "HDMI Kaynağının Seçilmesi",
            url:  "/harici-cihaz-kullanma/tüketici-elektroniği-kontrolü/hdmi-kaynağının-seçilmesi",
            id: 170102,
          },
          {
            title: "Menü Dilinin Seçilmesi",
            url:  "/harici-cihaz-kullanma/tüketici-elektroniği-kontrolü/menü-dilinin-seçilmesi",
            id: 170103,
          },
          {
            title: "Harici Cihazın Bekleme Konumuna Alınması",
            url:  "/harici-cihaz-kullanma/tüketici-elektroniği-kontrolü/harici-cihazın-bekleme-konumuna-alınması",
            id: 170104,
          },
          {
            title: "HDMI CEC Cihaz Kontrolünü Etkinleştirme",
            url:  "/harici-cihaz-kullanma/tüketici-elektroniği-kontrolü/hdmi-cec-cihaz-kontrolünü-etkinleştirme",
            id: 170105,
          },
        ]
      },
      {
        title: "Bağlantı Seçenekleri",
        url:  "/harici-cihaz-kullanma/bağlantı-seçenekleri",
        id: 170200,
      },
      {
        title: "Dijital Ses ve Görüntü Sinyaliyle Harici Cihaz Bağlama",
        url:  "/harici-cihaz-kullanma/dijital-ses-ve-görüntü-sinyaliyle-harici-cihaz-bağlama",
        id: 170300,
      },
      {
        title: "DVD Kayıt Cihazı, DVD Oynatıcı, veya Video Kayıt Cihazı Kullanımı",
        url:  "/harici-cihaz-kullanma/dvd-kayıt-cihazı-dvd-oynatıcı-veya-video-kayıt-cihazı-kullanımı",
        id: 170400,
      },
      {
        title: "Dijital Çok kanallı Amplifikatör / AV Alıcısı Bağlama",
        url:  "/harici-cihaz-kullanma/dijital-çok-kanallı-amplifikatör-av-alıcısı-bağlama",
        id: 170500,
      },
      {
        title: "CI (Ortak Arayüz)",
        url:  "/harici-cihaz-kullanma/ortak-arayüz",
        id: 170600,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Ortak Arayüz Nedir?",
            url:  "/harici-cihaz-kullanma/ortak-arayüz/ortak-arayüz-nedir",
            id: 170601,
          },
          {
            title: "CA Modülünü Takma",
            url:  "/harici-cihaz-kullanma/ortak-arayüz/ca-modülünü-takma",
            id: 170602,
          },
          {
            title: "CA Modülü ve Akıllı Kartlar için Erişim Kontrolü",
            url:  "/harici-cihaz-kullanma/ortak-arayüz/ca-modülü-ve-akıllı-kartlar-için-erişim-kontrolü",
            id: 170603,
          }
        ]
        
      },
    ]
  },
  {
    title: "Ağ Kurulumu",
    url: "/ağ-kurulumu",
    id: 180000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Kablolu Ağ Bağlantısı",
        url: "/ağ-kurulumu/kablolu-ağ-bağlantısı",
        id: 180100,
      },
      {
        title: "Kablolu Ağ Ayarları",
        url: "/ağ-kurulumu/kablolu-ağ-ayarları",
        id: 180200,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Otomatik Bağlantı",
            url: "/ağ-kurulumu/kablolu-ağ-ayarları/otomatik-bağlantı",
            id: 180201,
          },
          {
            title: "Manuel Bağlantı",
            url: "/ağ-kurulumu/kablolu-ağ-ayarları/manuel-bağlantı",
            id: 180202,
          },
        ]
      },
      {
        title: "Kablosuz Ağ Bağlantısı",
        url: "/ağ-kurulumu/kablosuz-ağ-bağlantısı",
        id: 180300,
      },
      {
        title: "Kablosuz Ağ Ayarları",
        url: "/ağ-kurulumu/kablosuz-ağ-ayarları",
        id: 180400,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon />,
        subcategory: [
          {
            title: "Ağ Şifresini Girerek Otomatik Bağlantı",
            url: "/ağ-kurulumu/kablosuz-ağ-ayarları/ağ-şifresini-girerek-otomatik-bağlantı",
            id: 180401,
          },
          {
            title: "Ağ Şifresini Girerek Manuel Bağlantı",
            url: "/ağ-kurulumu/kablosuz-ağ-ayarları/ağ-şifresini-girerek-manuel-bağlantı",
            id: 180402,
          },
          {
            title: "Gizli Bir Kablosuz Ağa Bağlantı",
            url: "/ağ-kurulumu/kablosuz-ağ-ayarları/gizli-bir-kablosuz-ağa-bağlantı",
            id: 180403,
          },
        ]
      },
    ]
  },
  {
    title: "Detaylı Kanal Ayarları",
    url: "/detaylı-kanal-ayarları",
    id: 190000,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon />,
    subcategory: [
      {
        title: "Tek Uydu Bağlantılı Dijital Televizyon Kanallarının Otomatik Olarak Aranması",
        url: "/detaylı-kanal-ayarları/tek-uydu-bağlantılı-dijital-televizyon-kanallarının-otomatik-olarak-aranması",
        id: 190100,
      },
      {
        title: "Tek Uydu Bağlantılı Dijital Televizyon Kanallarının Manuel Olarak Aranması",
        url: "/detaylı-kanal-ayarları/tek-uydu-bağlantılı-dijital-televizyon-kanallarının-manuel-olarak-aranması",
        id: 190200,
      },
      {
        title: "Dijital Uydu Kanalları için Anten Ayarları ve DiSEqC 1.0/1.1 ile Kanalların Otomatik Aranması",
        url: "/detaylı-kanal-ayarları/dijital-uydu-kanalları-için-anten-ayarları-ve-diseqc-ile-kanalların-otomatik-aranması",
        id: 190300,
      },
      {
        title: "Dijital Uydu Kanalları için Anten Ayarları ve Tek Kanal Yönlendirici (SCR) Sistemi ile Kanalların Otomatik Aranması",
        url: "/detaylı-kanal-ayarları/dijital-uydu-kanalları-için-anten-ayarları-ve-tek-kanal-yönlendirici-sistemi-ile-kanalların-otomatik-aranması",
        id: 190400,
      },
      {
        title: "Uydu Güncellemesi ile Yeni İlave Olan Dijital Kanalların Aranması",
        url: "/detaylı-kanal-ayarları/uydu-güncellemesi-ile-yeni-ilave-olan-dijital-kanalların-aranması",
        id: 190500,
      },
      {
        title: "Motorlu Anten Ayarları",
        url: "/detaylı-kanal-ayarları/motorlu-anten-ayarları",
        id: 190600,
      },
      {
        title: "Kablo Bağlantılı Dijital Televizyon Kanallarının Otomatik Olarak Aranması",
        url: "/detaylı-kanal-ayarları/kablo-bağlantılı-dijital-televizyon-kanallarının-otomatik-olarak-aranması",
        id: 190700,
      },
      {
        title: "Kablo Bağlantılı Dijital Televizyon Kanallarının Manuel Aranması",
        url: "/detaylı-kanal-ayarları/kablo-bağlantılı-dijital-televizyon-kanallarının-manuel-aranması",
        id: 190800,
      },
      {
        title: "Anten Bağlantılı Dijital Televizyon Kanallarının Otomatik Olarak Ayarlanması",
        url: "/detaylı-kanal-ayarları/anten-bağlantılı-dijital-televizyon-kanallarının-otomatik-olarak-ayarlanması",
        id: 190900,
      },
      {
        title: "Anten Bağlantılı Dijital Televizyon Kanallarının Otomatik Olarak Güncellenmesi",
        url: "/detaylı-kanal-ayarları/anten-bağlantılı-dijital-televizyon-kanallarının-otomatik-olarak-güncellenmesi",
        id: 191000,
      },
      {
        title: "Anten Bağlantılı Dijital Televizyon Kanallarının Manuel Olarak Ayarlanması",
        url: "/detaylı-kanal-ayarları/anten-bağlantılı-dijital-televizyon-kanallarının-manuel-olarak-ayarlanması",
        id: 191100,
      },
      {
        title: "Anten Bağlantılı Analog Televizyon Kanallarının Otomatik Olarak Ayarlanması",
        url: "/detaylı-kanal-ayarları/anten-bağlantılı-analog-televizyon-kanallarının-otomatik-olarak-ayarlanması",
        id: 191200,
      },
      {
        title: "Anten Bağlantılı Analog Televizyon Kanallarının Otomatik Olarak Güncellenmesi",
        url: "/detaylı-kanal-ayarları/anten-bağlantılı-analog-televizyon-kanallarının-otomatik-olarak-güncellenmesi",
        id: 191300,
      },
      {
        title: "Anten Bağlantılı Analog Televizyon Kanallarının Manuel Olarak Ayarlanması",
        url: "/detaylı-kanal-ayarları/anten-bağlantılı-analog-televizyon-kanallarının-manuel-olarak-ayarlanması",
        id: 191400,
      },
    ]
  },
  {
    title: "Ek bilgiler",
    url: "/ek-bilgiler",
    id: 200000,
  },
  {
    title: "Sözlük",
    url: "/sözlük",
    id: 210000,
  },
  {
    title: "Sorun Giderme",
    url: "/sorun-giderme",
    id: 220000
  },
  {
    title: "Müşteri Memnuniyeti Politikası",
    url: "/müşteri-memnuniyeti-politikası",
    id: 230000
  },
];
