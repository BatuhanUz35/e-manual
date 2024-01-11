import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const MenuItems = [
  {
    title: "Ana Sayfa",
    url: "/",
    id: 3, 
  },
  {
    title: "Lütfen önce bu kılavuzu okuyun!",
    url: "kılavuz",
    id: 4
  },
  {
    title: "Güvenlik Talimatları",
    url: "güvenlik-talimatları",
    id: 5,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "Kullanım Amacı",
        url: "güvenlik-talimatları/kullanım-amacı",
        id: 500
      },
      {
        title: "Elektrik Güvenliği",
        url: "güvenlik-talimatları/elektrik-güvenliği",
        id: 501
      },
      {
        title: "Yangın Güvenliği",
        url: "güvenlik-talimatları/yangın-güvenliği",
        id: 502
      },
      {
        title: "Taşıma Güvenliği",
        url: "güvenlik-talimatları/taşıma-güvenliği",
        id: 503
      },
      {
        title: "Kurulum Güvenliği",
        url: "güvenlik-talimatları/kurulum-güvenliği",
        id: 504
      },
      {
        title: "Çocuk, Savunmasız Kişi ve Evcil Hayvan Güvenliği",
        url: "güvenlik-talimatları/çocuk-savunmasız-kişi-ve-evcil-hayvan-güvenliği",
        id: 505
      },
      {
        title: "Bakım ve Temizlik Güvenliği",
        url: "güvenlik-talimatları/bakım-ve-temizlik-güvenliği",
        id: 506
      },
    ],
  },
  {
    title: "Çevre Talimatları ve Genel Bilgiler",
    url: "çevre-talimatları-ve-genel-bilgiler",
    id: 6,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "AEEE Yönetmeliğine Uyum ve Atık Ürünün Elden Çıkarılması",
        url: "çevre-talimatları-ve-genel-bilgiler/yönetmelik-ve-atık",
        id: 600
      },
      {
        title: "Pil Atıkları ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/pil-atıkları",
        id: 601
      },
      {
        title: "Ambalajın İmha Edilmesi ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/ambalaj-imha",
        id: 602
      },
      {
        title: "PCB Uygunluğu ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/pcb-uygunluğu",
        id: 603
      },
      {
        title: "Arayüz Kriterleri ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/arayüz-kriterleri",
        id: 604
      },
      {
        title: "Enerji Tasarrufu ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/enerji-tasarrufu",
        id: 605
      },
      {
        title: "Durağan Resimler ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/durağan-resimler",
        id: 606
      },
      {
        title: "Yazılım Güncellemesi ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/yazılım-güncelleme",
        id: 607
      },
      {
        title: "Elektromanyetik Gürültü ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/elektromanyetik-gürültü",
        id: 608
      },
      {
        title: "AB Direktifleri",
        url: "çevre-talimatları-ve-genel-bilgiler/ab-direktifleri",
        id: 609
      },
      {
        title: "Türkiye'deki Müşteriler İçin Not",
        url: "çevre-talimatları-ve-genel-bilgiler/türkiyedeki-müşteriler",
        id: 610
      },
      {
        title:
          "Cihazın Arka Kapağında Bulunabilecek İşaretler ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/arka-kapak-işaretler",
        id: 611
      },
      {
        title: "Lisanslar ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/lisanslar",
        id: 612
      },
      {
        title: "Kablosuz LAN Modülü Spesifikasyonu",
        url: "çevre-talimatları-ve-genel-bilgiler/kablosuz-lan-1",
        id: 613
      },
      {
        title: "Kablosuz LAN Modülü Spesifikasyonu",
        url: "çevre-talimatları-ve-genel-bilgiler/kablosuz-lan-2",
        id: 614
      },
      {
        title: "Bluetooth(*) Modülü Spesifikasyonu",
        url: "çevre-talimatları-ve-genel-bilgiler/bluetooth",
        id: 615
      },
      {
        title: "Yetkili Satıcılar İçin Servis Bilgileri",
        url: "çevre-talimatları-ve-genel-bilgiler/yetkili-satıcılar",
        id: 616
      },
      {
        title: "Kablosuz (WLAN) Bağlantı İçin Notlar",
        url: "çevre-talimatları-ve-genel-bilgiler/kablosuz-wlan",
        id: 617
      },
    ],
  },
  {
    title: "Ürününüz",
    url: "ürün",
    id: 7,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "Paketin İçindekiler",
        url: "ürün/paketin-içindekiler",
        id: 700
      },
      {
        title: "Kurulum veya Asma",
        url: "ürün/kurulum-veya-asma",
        id: 701,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Ayaklı Kurulum",
            url: "ürün/kurulum-veya-asma/ayaklı-kurulum",
            id: 70100
          },
          {
            title: "VESA Montaj Kiti ile Montaj Hazırlığı",
            url: "ürün/kurulum-veya-asma/vesa-montaj",
            id: 70101
          },
        ],
      },
      {
        title:"Uzaktan Kumandaya Pillerin Takılması",
        url:"ürün/uzaktan-kumanda-pil",
        id: 702
      },
      {
        title:"Ürün Tanıtımı",
        url:"ürün/ürün-tanıtımı",
        id: 703,
      },
      {
        title:"Tuş Takımı",
        url:"ürün/tuş-takımı",
        id: 704,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title:"Cihazın Bekleme Konumundan Açılması",
            url:"ürün/tuş-takımı/bekleme-konumu-açılma",
            id: 70400
          },
          {
            title:"Cihazın Bekleme Konumuna Alınması",
            url:"ürün/tuş-takımı/bekleme-konumuna-alma",
            id: 70401
          },
          {
            title:"Cihazın Uyku Konumuna Alınması ve Açılması",
            url:"ürün/tuş-takımı/uyku-konumu",
            id: 70402
          },
        ]
      },
      {
        title:"Anten ve Elektrik Kablosunu Bağlama",
        url:"ürün/anten-ve-elektrik-kablosu",
        id: 705,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title:"DVB-S Uydu Anten Bağlantısı",
            url:"ürün/anten-ve-elektrik-kablosu/dvbs-anten-bağlantısı",
            id: 70500
          },
          {
            title:"DVB-T, DVB-C ve Analog Anten Bağlantısı",
            url:"ürün/anten-ve-elektrik-kablosu/dvbt-dvbc-ve-analog-anten-bağlantısı",
            id: 70501
          },
          {
            title:"Elektrik Bağlantısı",
            url:"ürün/anten-ve-elektrik-kablosu/elektrik-bağlantısı",
            id: 70502
          },
        ]
      },
      {
        title:"Uzaktan Kumanda",
        url:"ürün/uzaktan-kumanda",
        id: 706
      },
    ],
  },
  {
    title: "Ayarlar",
    url: "ayarlar",
    id: 8,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title:"Hazırlık",
        url:"ayarlar/hazırlık",
        id: 800,
      },
      {
        title:"İlk Kurulum ve Televizyonu Ayarlama",
        url:"ayarlar/kurulum",
        id:801,
      },
      {
        title:"Dijital Kanalları Düzenleme",
        url:"ayarlar/dijital-kanalları-düzenleme",
        id: 802,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title:"Kanal Düzenleyici Uygulamasını Başlatma",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-düzenleyici",
            id: 80200
          },
          {
            title:"Yayın Kaynağı Seçimi",
            url:"ayarlar/dijital-kanalları-düzenleme/yayın-kaynağı-seçimi",
            id: 80201
          },
          {
            title:"Favori Listesi Oluşturma",
            url:"ayarlar/dijital-kanalları-düzenleme/favori-listesi-oluşturma",
            id: 80202
          },
          {
            title:"Favori Listesinde Kanal Taşıma",
            url:"ayarlar/dijital-kanalları-düzenleme/favori-listesinde-kanal-taşıma",
            id: 80203
          },
          {
            title:"Favori Listesinde Kanal Yeri Değiştirme",
            url:"ayarlar/dijital-kanalları-düzenleme/favori-listesinde-kanal-yeri-değiştirme",
            id: 80204
          },
          {
            title:"Favori Listesinden Kanal Silme",
            url:"ayarlar/dijital-kanalları-düzenleme/favori-listesinden-kanal-silme",
            id: 80205
          },
          {
            title:"Kanal Taşıma",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-taşıma",
            id: 80206
          },
          {
            title:"Kanal Yerini Değiştirme",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-yerini-değiştirme",
            id: 80207
          },
          {
            title:"Kanal Silme",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-silme",
            id: 80208
          },
          {
            title:"Kanal Listesini Silme",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-listesini-silme",
            id: 80209
          },
          {
            title:"Kanal Düzenleme",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-düzenleme",
            id: 80210
          },
          {
            title:"Kanal Atlatma",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-atlatma",
            id: 80211
          },
        ]
      },
      {
        title:"Görüntü Ayarları",
        url:"ayarlar/görüntü-ayarları",
        id: 803,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title:"Arttırılmış Görüntü Ayarları",
            url:"ayarlar/görüntü-ayarları/arttırılmış-görüntü-ayarları",
            id:80300
          },
          {
            title:"Görüntü Ayarlarını Fabrika Ayarlarına Döndürme",
            url:"ayarlar/görüntü-ayarları/görüntü-ayarlarını-fabrika-ayarlarına-döndürme",
            id:80301
          },
        ]
      },
      {
        title:"Ses Ayarları",
        url:"ayarlar/ses-ayarları",
        id: 804,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Sistem Sesleri",
            url: "ayarlar/ses-ayarları/sistem-sesleri",
            id: 80400
          },
          {
            title: "Balans",
            url: "ayarlar/ses-ayarları/balans",
            id: 80401
          },
          {
            title: "Bas",
            url: "ayarlar/ses-ayarları/bas",
            id: 80402
          },
          {
            title: "Tiz",
            url: "ayarlar/ses-ayarları/tiz",
            id: 80403
          },
          {
            title: "Surround Ses",
            url: "ayarlar/ses-ayarları/surround-ses",
            id: 80404
          },
          {
            title: "Ekolayzer",
            url: "ayarlar/ses-ayarları/ekolayzer",
            id: 80405
          },
          {
            title: "Hoparlör Gecikmesi",
            url: "ayarlar/ses-ayarları/hoparlör-gecikmesi",
            id: 80406
          },
          {
            title: "eARC",
            url: "ayarlar/ses-ayarları/earc",
            id: 80407
          },
          {
            title: "Dijital Giriş",
            url: "ayarlar/ses-ayarları/dijital-giriş",
            id: 80408
          },
          {
            title: "Dijital Çıkış",
            url: "ayarlar/ses-ayarları/dijital-çıkış",
            id: 80409
          },
          {
            title: "SPDIF Gecikmesi",
            url: "ayarlar/ses-ayarları/spdif-gecikmesi",
            id: 80410
          },
          {
            title: "Dijital Çıkış Gecikmesi",
            url: "ayarlar/ses-ayarları/dijital-çıkış-gecikmesi",
            id: 80411
          },
          {
            title: "Otomatik Ses",
            url: "ayarlar/ses-ayarları/otomatik-ses",
            id: 80412
          },
          {
            title: "Downmix Modu",
            url: "ayarlar/ses-ayarları/downmix-modu",
            id: 80413
          },
          {
            title: "DTS DRC",
            url: "ayarlar/ses-ayarları/dts-drc",
            id: 80414
          },
          {
            title: "Ses Ayarlarını Fabrika Ayarlarına Döndürme",
            url: "ayarlar/ses-ayarları/ses-ayarlarını-fabrika-ayarlarına-döndürme",
            id: 80415
          },
        ]
      },
    ]
  },
  {
    title: "Televizyonun Çalıştırılması Temel Fonksiyonlar",
    url: "temel-fonksiyonlar",
    id: 9,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "Açma ve Kapatma",
        url: "temel-fonksiyonlar/açma-ve-kapatma",
        id: 900
      },
      {
        title: "TV Modunu Seçme",
        url: "temel-fonksiyonlar/tv-modunu-seçme",
        id: 901
      },
      {
        title: "Sinyal Kaynağı ve Anten Tipini Seçme",
        url: "temel-fonksiyonlar/sinyal-kaynağı-ve-anten-tipini-seçme",
        id: 902
      },
      {
        title: "Kanalları Seçme",
        url: "temel-fonksiyonlar/kanalları-seçme",
        id: 903
      },
      {
        title: "Ses Seviyesini Ayarlama",
        url: "temel-fonksiyonlar/ses-seviyesini-ayarlama",
        id: 904
      },
      {
        title: "Sesi Kapatma (Mute)",
        url: "temel-fonksiyonlar/sesi-kapatma",
        id: 905
      },
      {
        title: "Ses Stili",
        url: "temel-fonksiyonlar/ses-stili",
        id: 906
      },
      {
        title: "Resim Modu",
        url: "temel-fonksiyonlar/resim-modu",
        id: 907
      },
      {
        title: "Görüntü Formatını Değiştirme",
        url: "temel-fonksiyonlar/görüntü-formatını-değiştirme",
        id: 908
      },
      {
        title: "Güç Ayarları",
        url: "temel-fonksiyonlar/güç-ayarları",
        id: 909,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Uyku Zamanlayıcısı",
            url: "temel-fonksiyonlar/güç-ayarları/uyku-zamanlayıcısı",
            id: 90900
          },
          {
            title: "Görüntüyü Kapatma",
            url: "temel-fonksiyonlar/güç-ayarları/görüntüyü-kapatma",
            id: 90901
          },
          {
            title: "Kapanma Zamanlayıcıs",
            url: "temel-fonksiyonlar/güç-ayarları/kapanma-zamanlayıcıs",
            id: 90902
          },
          {
            title: "Sinyal Olmadığında Otomatik Kapanma",
            url: "temel-fonksiyonlar/güç-ayarları/sinyal-olmadığında-otomatik-kapanma",
            id: 90903
          },
         
        ]
      },
      {
        title: "Elektronik TV Rehberi",
        url: "temel-fonksiyonlar/elektronik-tv-rehberi",
        id: 910
      },
    ]
  },
  {
    title: "Televizyonun Çalıştırılması Gelişmiş Fonksiyonlar",
    url: "gelişmiş-fonksiyonlar",
    id: 10,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "Ses Dilinin Değiştirilmesi",
        url: "gelişmiş-fonksiyonlar/ses-dilinin-değiştirilmesi",
        id: 1000
      },
      {
        title: "Ses Dili",
        url: "gelişmiş-fonksiyonlar/ses-dili",
        id: 1001
      },
      {
        title: "Mavi Ekran",
        url: "gelişmiş-fonksiyonlar/mavi-ekran",
        id: 1002
      },
      {
        title: "Varsayılan Kanal",
        url: "gelişmiş-fonksiyonlar/varsayılan-kanal",
        id: 1003
      },
      {
        title: "Etkileşim Kanalı",
        url: "gelişmiş-fonksiyonlar/etkileşim-kanalı",
        id: 1004
      },
      {
        title: "MHEG PIN Koruması",
        url: "gelişmiş-fonksiyonlar/mheg-pin-koruması",
        id: 1005
      },
      {
        title: "Altyazılar",
        url: "gelişmiş-fonksiyonlar/altyazılar",
        id: 1006,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Analog Altyazı",
            url: "gelişmiş-fonksiyonlar/altyazılar/analog-altyazı",
            id: 100600
          },
          {
            title: "Dijital Altyazı",
            url: "gelişmiş-fonksiyonlar/altyazılar/dijital-altyazı",
            id: 100601
          },
          {
            title: "Dijital Altyazı Dili",
            url: "gelişmiş-fonksiyonlar/altyazılar/dijital-altyazı-dili",
            id: 100602
          },
          {
            title: "İkinci Dijital Altyazı Dili",
            url: "gelişmiş-fonksiyonlar/altyazılar/ikinci-dijital-altyazı-dili",
            id: 100603
          },
          {
            title: "Altyazı Türü",
            url: "gelişmiş-fonksiyonlar/altyazılar/altyazı-türü",
            id: 100604
          },
        ]
      }, 
      {
        title: "Teleteks Dil Seçimi",
        url: "gelişmiş-fonksiyonlar/teleteks-dil-seçimi",
        id: 1007,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Dijital Teletesk Dili",
            url:"gelişmiş-fonksiyonlar/teleteks-dil-seçimi/dijital-teleteks-dili",
            id: 100700
          },
          {
            title: "Sayfa Deşifre Etme dili",
            url: "gelişmiş-fonksiyonlar/teleteks-dil-seçimi/sayfa-deşifre-etme-dili",
            id: 100701
          }
        ]
      }, 
      {
        title: "BISS Anahtarı",
        url: "gelişmiş-fonksiyonlar/biss-anahtarı",
        id: 1008
      },
      {
        title: "TKGS Ayarları",
        url: "gelişmiş-fonksiyonlar/tkgs-ayarları",
        id: 1009,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Çalışma Şekli",
            url: "gelişmiş-fonksiyonlar/tkgs-ayarları/çalışma-şekli",
            id: 100900
          },
          {
            title: "TKGS Konum Listesi",
            url: "gelişmiş-fonksiyonlar/tkgs-ayarları/tkgs-konum-listesi",
            id: 100901
          },
          {
            title: "Tablo Versiyonu Sıfırlama",
            url: "gelişmiş-fonksiyonlar/tkgs-ayarları/tablo-versiyonu-sıfırlama",
            id: 100902
          },
          {
            title: "Tercih Edilen Liste",
            url: "gelişmiş-fonksiyonlar/tkgs-ayarları/tercih-edilen-liste",
            id: 100903
          }
        ]
      },
      {
        title: "Sinyal Bilgileri",
        url: "gelişmiş-fonksiyonlar/sinyal-bilgileri",
        id: 1010
      }
    ]
  },
  {
    title: "HBBTV",
    url: "hbbtv",
    id: 11,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "HbbTV Nedir?",
        url: "hbbtv/hbbtv-nedir",
        id: 1100
      },
      {
        title: "HbbTV'nin Kullanımı",
        url: "hbbtv/hbbtv-kullanımı",
        id: 1101
      },
      {
        title: "Video Dizinleri İçin Ek Fonksiyonlar",
        url: "hbbtv/video-dizinleri-için-ek-fonksiyonlar",
        id: 1102
      },
      {
        title: "HBBTV Ayarları",
        url: "hbbtv/hbbtv-ayarları",
        id: 1103,
        submenu: [
          {
            title: "HBBTV Desteği",
            url: "hbbtv/hbbtv-ayarları/hbbtv-desteği",
            id: 110300
          },
          {
            title: "İzleme Tercihi",
            url: "hbbtv/hbbtv-ayarları/izleme-tercihi",
            id: 110301
          },
          {
            title: "Çerez Ayarları",
            url: "hbbtv/hbbtv-ayarları/çerez-ayarları",
            id: 110302
          },
          {
            title: "Kalıcı Depolama",
            url: "hbbtv/hbbtv-ayarları/kalıcı-depolama",
            id: 110303
          },
          {
            title: "İzleme Sitelerini Engelle",
            url: "hbbtv/hbbtv-ayarları/izleme-sitelerini-engelle",
            id: 110304
          },
          {
            title: "Cihaz Kimliği",
            url: "hbbtv/hbbtv-ayarları/cihaz-kimliği",
            id: 110305
          },
          {
            title: "Cihaz Kimliğini Sıfırlama",
            url: "hbbtv/hbbtv-ayarları/cihaz-kimliğini-sıfırlama",
            id: 110306
          }
      ]
      }
    ]
  },
  {
    title: "Teleteks",
    url: "teleteks",
    id: 12,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "TOP Tekst veya FLOF Tekst Modu",
        url: "teleteks/top-tekst-veya-flof-tekst-modu",
        id: 1200
      },
      {
        title: "Normal Tekst Modu",
        url: "teleteks/normal-tekst-modu",
        id: 1201
      }
    ]
  },
  {
    title: "USB Kayıt",
    url: "usb-kayıt",
    id: 13,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "Televizyon Programlarının Kaydedilmesi ve Oynatılmasıyla İlgili Bilgiler",
        url: "usb-kayıt/televizyon-programlarının-kaydedilmesi-ve-oynatılmasıyla-ilgili-bilgiler",
        id: 1300
      },
      {
        title: "Harici Veri Ortamı Kullanımında Muhtemel Kısıtlamalar",
        url: "usb-kayıt/harici-veri-ortamı-kullanımında-muhtemel-kısıtlamalar",
        id: 1301
      },
      {
        title: "Harici Veri Ortamının Bağlanması",
        url: "usb-kayıt/harici-veri-ortamının-bağlanması",
        id: 1302
      },
      {
        title: "USB Kayıt Ayarları",
        url: "usb-kayıt/usb-kayıt-ayarları", 
        id: 1303,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Veri Ortamının Biçimlendirilmesi",
            url: "usb-kayıt/usb-kayıt-ayarları/veri-ortamının-biçimlendirilmesi",
            id: 130300
          },
          {
            title: "Kayıt / Zaman Kaydırma için Veri Ortamnın Seçilmesi",
            url: "usb-kayıt/usb-kayıt-ayarları/kayıt-zaman-kaydırma-için-veri-ortamın-seçilmesi",
            id: 130301
          },
          {
            title: "Veri Ortamı Testi",
            url: "usb-kayıt/usb-kayıt-ayarları/veri-ortamı-testi",
            id: 130302
          }
        ]
      },
      {
        title: "Zaman Kaydırma Fonksiyonunun Açılıp / Kapatılması",
        url: "usb-kayıt/zaman-kaydırma-fonksiyonunun-açılıp-kapatılması",
        id: 1304
      },
      {
        title: "Zaman Kaydırma Disk Kurulumu",
        url: "usb-kayıt/zaman-kaydırma-disk-kurulumu",
        id: 1305,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Otomatik Kurulum",
            url: "usb-kayıt/zaman-kaydırma-disk-kurulumu/otomatik-kurulum",
            id: 130500
          },
          {
            title: "Manuel Kurulum",
            url: "usb-kayıt/zaman-kaydırma-disk-kurulumu/manuel-kurulum",
            id: 130501
          }
        ]
      },
      {
        title: "Zaman Kaydırma ve Sürekli Kayıt ile Programların Duraklatılması",
        url: "usb-kayıt/zaman-kaydırma-ve-sürekli-kayıt-ile-programların-duraklatılması",
        id: 1306
      },
      {
        title: "Programları Kaydetme",
        url: "usb-kayıt/programları-kaydetme",
        id: 1307,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Kayıt Sırasında Televizyonun Bekleme Konumuna Alınması",
            url: "usb-kayıt/programları-kaydetme/kayıt-sırasında-televizyonun-bekleme-konumuna-alınması",
            id: 130700
          },
          {
            title: "Kanal Listesinden Bir Programı Kaydetme",
            url: "usb-kayıt/programları-kaydetme/kanal-listesinden-bir-programı-kaydetme",
            id: 130701
          }
        ]
      },
      {
        title: "Kayıt Zamanlayıcısı",
        url: "usb-kayıt/kayıt-zamanlayıcısı",
        id: 1308,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Elektronik Program Rehberi Kullanarak Kayıt Zamanlayıcı Eklenmesi",
            url: "usb-kayıt/programları-kayıt-zamanlayıcısı/elektronik-program-rehberi-kullan-kayıt-zamanlayıcı-eklenmesi",
            id: 130800
          },
          {
            title: "Bilgileri Manuel Girerek Kayıt Zamanlayıcı Eklenmesi",
            url: "usb-kayıt/kayıt-zamanlayıcısı/bilgileri-manuel-girerek-kayıt-zamanlayıcı-eklenmmesi",
            id: 130801
          },
          {
            title: "Kayıt Zamanlayıcısının Düzenlenmesi",
            url: "usb-kayıt/kayıt-zamanlayıcısı/kayıt-zamanlayıcısının-düzenlenmesi",
            id: 130802
          },
          {
            title: "Kayıt Zamanlayıcısının Silinmesi",
            url: "usb-kayıt/kayıt-zamanlayıcısı/kayıt-zamanlayıcısının-silinmesi",
            id: 130803
          }
        ]
      },
      {
        title: "Oynatma",
        url: "usb-kayıt/oynatma",
        id: 1309,
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Kayıtlı Dosyalar Listesinden Bir Kayıt Oynatma",
            url: "usb-kayıt/oynatma/kayıtlı-dosyalar-listesinden-bir-kayıt-oynatma",
            id: 130900
          },
          {
            title: "İleri / Geri Görüntü Arama",
            url: "usb-kayıt/oynatma/ileri-geri-görüntü-arama",
            id: 130901
          }
        ]
      },
      {
        title: "Kaydedilenler Listesinden Kaydedilmiş Yayınların Silinmesi",
        url: "usb-kayıt/kaydedilenler-listesinden-kaydedilmiş-yayınların-silinmesi",
        id: 1310
      }
    ]
  },
  {
    title: "USB Oynatıcı",
    url: "usb-oynatıcı",
    id: 14,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Android TV",
    url: "android-tv",
    id: 15,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Chromecast Built-in™",
    url: "cromecast-built-in",
    id: 16,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Cihaz Tercihleri",
    url: "cihaz-tercihleri",
    id: 17,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Aksesuarlar",
    url: "aksesuarlar",
    id: 18,
  },
  {
    title: "Ebeveyn Ayarları",
    url: "ebeveyn-ayarları",
    id: 19,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Harici Cihaz Kullanma",
    url: "harici-cihaz-kullanma",
    id: 20,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Ağ Kurulumu",
    url: "ağ-kurulumu",
    id: 21,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Detaylı Kanal Ayarları",
    url: "detaylı-kanal-ayarları",
    id: 22,
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Ek bilgiler",
    url: "ek-bilgiler",
    id: 23,
  },
  {
    title: "Sözlük",
    url: "sözlük",
    id: 24,
  },
  {
    title: "Sorun Giderme",
    url: "sorun-giderme",
    id: 25
  },
  {
    title: "Müşteri Memnuniyeti Politikası",
    url: "müşteri-memnuniyeti-politikası",
    id: 26
  },
];
