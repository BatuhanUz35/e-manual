import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const MenuItems = [
  {
    title: "Ana Sayfa",
    url: "/",
  },
  {
    title: "Lütfen önce bu kılavuzu okuyun!",
    url: "kılavuz",
  },
  {
    title: "Güvenlik Talimatları",
    url: "güvenlik-talimatları",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "Kullanım Amacı",
        url: "güvenlik-talimatları/kullanım-amacı",
      },
      {
        title: "Elektrik Güvenliği",
        url: "güvenlik-talimatları/elektrik-güvenliği",
      },
      {
        title: "Yangın Güvenliği",
        url: "güvenlik-talimatları/yangın-güvenliği",
      },
      {
        title: "Taşıma Güvenliği",
        url: "güvenlik-talimatları/taşıma-güvenliği",
      },
      {
        title: "Kurulum Güvenliği",
        url: "güvenlik-talimatları/kurulum-güvenliği",
      },
      {
        title: "Çocuk, Savunmasız Kişi ve Evcil Hayvan Güvenliği",
        url: "güvenlik-talimatları/çocuk-savunmasız-kişi-ve-evcil-hayvan-güvenliği",
      },
      {
        title: "Bakım ve Temizlik Güvenliği",
        url: "güvenlik-talimatları/bakım-ve-temizlik-güvenliği",
      },
    ],
  },
  {
    title: "Çevre Talimatları ve Genel Bilgiler",
    url: "çevre-talimatları-ve-genel-bilgiler",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "AEEE Yönetmeliğine Uyum ve Atık Ürünün Elden Çıkarılması",
        url: "çevre-talimatları-ve-genel-bilgiler/yönetmelik-ve-atık",
      },
      {
        title: "Pil Atıkları ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/pil-atıkları",
      },
      {
        title: "Ambalajın İmha Edilmesi ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/ambalaj-imha",
      },
      {
        title: "PCB Uygunluğu ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/pcb-uygunluğu",
      },
      {
        title: "Arayüz Kriterleri ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/arayüz-kriterleri",
      },
      {
        title: "Enerji Tasarrufu ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/enerji-tasarrufu",
      },
      {
        title: "Durağan Resimler ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/durağan-resimler",
      },
      {
        title: "Yazılım Güncellemesi ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/yazılım-güncelleme",
      },
      {
        title: "Elektromanyetik Gürültü ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/elektromanyetik-gürültü",
      },
      {
        title: "AB Direktifleri",
        url: "çevre-talimatları-ve-genel-bilgiler/ab-direktifleri",
      },
      {
        title: "Türkiye'deki Müşteriler İçin Not",
        url: "çevre-talimatları-ve-genel-bilgiler/türkiyedeki-müşteriler",
      },
      {
        title:
          "Cihazın Arka Kapağında Bulunabilecek İşaretler ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/arka-kapak-işaretler",
      },
      {
        title: "Lisanslar ile İlgili Bilgiler",
        url: "çevre-talimatları-ve-genel-bilgiler/lisanslar",
      },
      {
        title: "Kablosuz LAN Modülü Spesifikasyonu",
        url: "çevre-talimatları-ve-genel-bilgiler/kablosuz-lan-1",
      },
      {
        title: "Kablosuz LAN Modülü Spesifikasyonu",
        url: "çevre-talimatları-ve-genel-bilgiler/kablosuz-lan-2",
      },
      {
        title: "Bluetooth(*) Modülü Spesifikasyonu",
        url: "çevre-talimatları-ve-genel-bilgiler/bluetooth",
      },
      {
        title: "Yetkili Satıcılar İçin Servis Bilgileri",
        url: "çevre-talimatları-ve-genel-bilgiler/yetkili-satıcılar",
      },
      {
        title: "Kablosuz (WLAN) Bağlantı İçin Notlar",
        url: "çevre-talimatları-ve-genel-bilgiler/kablosuz-wlan",
      },
    ],
  },
  {
    title: "Ürününüz",
    url: "ürün",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "Paketin İçindekiler",
        url: "ürün/paketin-içindekiler",
      },
      {
        title: "Kurulum veya Asma",
        url: "ürün/kurulum-veya-asma",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Ayaklı Kurulum",
            url: "ürün/kurulum-veya-asma/ayaklı-kurulum",
          },
          {
            title: "VESA Montaj Kiti ile Montaj Hazırlığı",
            url: "ürün/kurulum-veya-asma/vesa-montaj",
          },
        ],
      },
      {
        title:"Uzaktan Kumandaya Pillerin Takılması",
        url:"ürün/uzaktan-kumanda-pil",
      },
      {
        title:"Ürün Tanıtımı",
        url:"ürün/ürün-tanıtımı",
      },
      {
        title:"Tuş Takımı",
        url:"ürün/tuş-takımı",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title:"Cihazın Bekleme Konumundan Açılması",
            url:"ürün/tuş-takımı/bekleme-konumu-açılma",
          },
          {
            title:"Cihazın Bekleme Konumuna Alınması",
            url:"ürün/tuş-takımı/bekleme-konumuna-alma",
          },
          {
            title:"Cihazın Uyku Konumuna Alınması ve Açılması",
            url:"ürün/tuş-takımı/uyku-konumu",
          },
        ]
      },
      {
        title:"Anten ve Elektrik Kablosunu Bağlama",
        url:"ürün/anten-ve-elektrik-kablosu",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title:"DVB-S Uydu Anten Bağlantısı",
            url:"ürün/anten-ve-elektrik-kablosu/dvbs-anten-bağlantısı",
          },
          {
            title:"DVB-T, DVB-C ve Analog Anten Bağlantısı",
            url:"ürün/anten-ve-elektrik-kablosu/dvbt-dvbc-ve-analog-anten-bağlantısı",
          },
          {
            title:"Elektrik Bağlantısı",
            url:"ürün/anten-ve-elektrik-kablosu/elektrik-bağlantısı",
          },
        ]
      },
      {
        title:"Uzaktan Kumanda",
        url:"ürün/uzaktan-kumanda",
      },
    ],
  },
  {
    title: "Ayarlar",
    url: "ayarlar",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title:"Hazırlık",
        url:"ayarlar/hazırlık",
      },
      {
        title:"İlk Kurulum ve Televizyonu Ayarlama",
        url:"ayarlar/kurulum",
      },
      {
        title:"Dijital Kanalları Düzenleme",
        url:"ayarlar/dijital-kanalları-düzenleme",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title:"Kanal Düzenleyici Uygulamasını Başlatma",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-düzenleyici",
          },
          {
            title:"Yayın Kaynağı Seçimi",
            url:"ayarlar/dijital-kanalları-düzenleme/yayın-kaynağı-seçimi",
          },
          {
            title:"Favori Listesi Oluşturma",
            url:"ayarlar/dijital-kanalları-düzenleme/favori-listesi-oluşturma",
          },
          {
            title:"Favori Listesinde Kanal Taşıma",
            url:"ayarlar/dijital-kanalları-düzenleme/favori-listesinde-kanal-taşıma",
          },
          {
            title:"Favori Listesinde Kanal Yeri Değiştirme",
            url:"ayarlar/dijital-kanalları-düzenleme/favori-listesinde-kanal-yeri-değiştirme",
          },
          {
            title:"Favori Listesinden Kanal Silme",
            url:"ayarlar/dijital-kanalları-düzenleme/favori-listesinden-kanal-silme",
          },
          {
            title:"Kanal Taşıma",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-taşıma",
          },
          {
            title:"Kanal Yerini Değiştirme",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-yerini-değiştirme",
          },
          {
            title:"Kanal Silme",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-silme",
          },
          {
            title:"Kanal Listesini Silme",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-listesini-silme",
          },
          {
            title:"Kanal Düzenleme",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-düzenleme",
          },
          {
            title:"Kanal Atlatma",
            url:"ayarlar/dijital-kanalları-düzenleme/kanal-atlatma",
          },
        ]
      },
      {
        title:"Görüntü Ayarları",
        url:"ayarlar/görüntü-ayarları",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title:"Arttırılmış Görüntü Ayarları",
            url:"ayarlar/görüntü-ayarları/arttırılmış-görüntü-ayarları",
          },
          {
            title:"Görüntü Ayarlarını Fabrika Ayarlarına Döndürme",
            url:"ayarlar/görüntü-ayarları/görüntü-ayarlarını-fabrika-ayarlarına-döndürme",
          },
        ]
      },
      {
        title:"Ses Ayarları",
        url:"ayarlar/ses-ayarları",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Sistem Sesleri",
            url: "ayarlar/ses-ayarları/sistem-sesleri",
          },
          {
            title: "Balans",
            url: "ayarlar/ses-ayarları/balans",
          },
          {
            title: "Bas",
            url: "ayarlar/ses-ayarları/bas",
          },
          {
            title: "Tiz",
            url: "ayarlar/ses-ayarları/tiz",
          },
          {
            title: "Surround Ses",
            url: "ayarlar/ses-ayarları/surround-ses",
          },
          {
            title: "Ekolayzer",
            url: "ayarlar/ses-ayarları/ekolayzer",
          },
          {
            title: "Hoparlör Gecikmesi",
            url: "ayarlar/ses-ayarları/hoparlör-gecikmesi",
          },
          {
            title: "eARC",
            url: "ayarlar/ses-ayarları/earc",
          },
          {
            title: "Dijital Giriş",
            url: "ayarlar/ses-ayarları/dijital-giriş",
          },
          {
            title: "Dijital Çıkış",
            url: "ayarlar/ses-ayarları/dijital-çıkış",
          },
          {
            title: "SPDIF Gecikmesi",
            url: "ayarlar/ses-ayarları/spdif-gecikmesi",
          },
          {
            title: "Dijital Çıkış Gecikmesi",
            url: "ayarlar/ses-ayarları/dijital-çıkış-gecikmesi",
          },
          {
            title: "Otomatik Ses",
            url: "ayarlar/ses-ayarları/otomatik-ses",
          },
          {
            title: "Downmix Modu",
            url: "ayarlar/ses-ayarları/downmix-modu",
          },
          {
            title: "DTS DRC",
            url: "ayarlar/ses-ayarları/dts-drc",
          },
          {
            title: "Ses Ayarlarını Fabrika Ayarlarına Döndürme",
            url: "ayarlar/ses-ayarları/ses-ayarlarını-fabrika-ayarlarına-döndürme",
          },
        ]
      },
    ]
  },
  {
    title: "Televizyonun Çalıştırılması Temel Fonksiyonlar",
    url: "temel-fonksiyonlar",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "Açma ve Kapatma",
        url: "temel-fonksiyonlar/açma-ve-kapatma",
      },
      {
        title: "TV Modunu Seçme",
        url: "temel-fonksiyonlar/tv-modunu-seçme",
      },
      {
        title: "Sinyal Kaynağı ve Anten Tipini Seçme",
        url: "temel-fonksiyonlar/sinyal-kaynağı-ve-anten-tipini-seçme",
      },
      {
        title: "Kanalları Seçme",
        url: "temel-fonksiyonlar/kanalları-seçme",
      },
      {
        title: "Ses Seviyesini Ayarlama",
        url: "temel-fonksiyonlar/ses-seviyesini-ayarlama",
      },
      {
        title: "Sesi Kapatma (Mute)",
        url: "temel-fonksiyonlar/sesi-kapatma",
      },
      {
        title: "Ses Stili",
        url: "temel-fonksiyonlar/ses-stili",
      },
      {
        title: "Resim Modu",
        url: "temel-fonksiyonlar/resim-modu",
      },
      {
        title: "Görüntü Formatını Değiştirme",
        url: "temel-fonksiyonlar/görüntü-formatını-değiştirme",
      },
      {
        title: "Güç Ayarları",
        url: "temel-fonksiyonlar/güç-ayarları",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Uyku Zamanlayıcısı",
            url: "temel-fonksiyonlar/güç-ayarları/uyku-zamanlayıcısı",
          },
          {
            title: "Görüntüyü Kapatma",
            url: "temel-fonksiyonlar/güç-ayarları/görüntüyü-kapatma",
          },
          {
            title: "Kapanma Zamanlayıcıs",
            url: "temel-fonksiyonlar/güç-ayarları/kapanma-zamanlayıcıs",
          },
          {
            title: "Sinyal Olmadığında Otomatik Kapanma",
            url: "temel-fonksiyonlar/güç-ayarları/sinyal-olmadığında-otomatik-kapanma",
          },
         
        ]
      },
      {
        title: "Elektronik TV Rehberi",
        url: "temel-fonksiyonlar/elektronik-tv-rehberi",
      },
    ]
  },
  {
    title: "Televizyonun Çalıştırılması Gelişmiş Fonksiyonlar",
    url: "gelişmiş-fonksiyonlar",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "Ses Dilinin Değiştirilmesi",
        url: "gelişmiş-fonksiyonlar/ses-dilinin-değiştirilmesi",
      },
      {
        title: "Ses Dili",
        url: "gelişmiş-fonksiyonlar/ses-dili",
      },
      {
        title: "Mavi Ekran",
        url: "gelişmiş-fonksiyonlar/mavi-ekran",
      },
      {
        title: "Varsayılan Kanal",
        url: "gelişmiş-fonksiyonlar/varsayılan-kanal",
      },
      {
        title: "Etkileşim Kanalı",
        url: "gelişmiş-fonksiyonlar/etkileşim-kanalı",
      },
      {
        title: "MHEG PIN Koruması",
        url: "gelişmiş-fonksiyonlar/mheg-pin-koruması",
      },
      {
        title: "Altyazılar",
        url: "gelişmiş-fonksiyonlar/altyazılar",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Analog Altyazı",
            url: "gelişmiş-fonksiyonlar/altyazılar/analog-altyazı",
          },
          {
            title: "Dijital Altyazı",
            url: "gelişmiş-fonksiyonlar/altyazılar/dijital-altyazı",
          },
          {
            title: "Dijital Altyazı Dili",
            url: "gelişmiş-fonksiyonlar/altyazılar/dijital-altyazı-dili",
          },
          {
            title: "İkinci Dijital Altyazı Dili",
            url: "gelişmiş-fonksiyonlar/altyazılar/ikinci-dijital-altyazı-dili",
          },
          {
            title: "Altyazı Türü",
            url: "gelişmiş-fonksiyonlar/altyazılar/altyazı-türü",
          },
        ]
      }, 
      {
        title: "Teleteks Dil Seçimi",
        url: "gelişmiş-fonksiyonlar/teleteks-dil-seçimi",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Dijital Teletesk Dili",
            url:"gelişmiş-fonksiyonlar/teleteks-dil-seçimi/dijital-teleteks-dili"
          },
          {
            title: "Sayfa Deşifre Etme dili",
            url: "gelişmiş-fonksiyonlar/teleteks-dil-seçimi/sayfa-deşifre-etme-dili"
          }
        ]
      }, 
      {
        title: "BISS Anahtarı",
        url: "gelişmiş-fonksiyonlar/biss-anahtarı"
      },
      {
        title: "TKGS Ayarları",
        url: "gelişmiş-fonksiyonlar/tkgs-ayarları",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Çalışma Şekli",
            url: "gelişmiş-fonksiyonlar/tkgs-ayarları/çalışma-şekli"
          },
          {
            title: "TKGS Konum Listesi",
            url: "gelişmiş-fonksiyonlar/tkgs-ayarları/tkgs-konum-listesi"
          },
          {
            title: "Tablo Versiyonu Sıfırlama",
            url: "gelişmiş-fonksiyonlar/tkgs-ayarları/tablo-versiyonu-sıfırlama"
          },
          {
            title: "Tercih Edilen Liste",
            url: "gelişmiş-fonksiyonlar/tkgs-ayarları/tercih-edilen-liste"
          }
        ]
      },
      {
        title: "Sinyal Bilgileri",
        url: "gelişmiş-fonksiyonlar/sinyal-bilgileri"
      }
    ]
  },
  {
    title: "HBBTV",
    url: "hbbtv",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "HbbTV Nedir?",
        url: "hbbtv/hbbtv-nedir"
      },
      {
        title: "HbbTV'nin Kullanımı",
        url: "hbbtv/hbbtv-kullanımı"
      },
      {
        title: "Video Dizinleri İçin Ek Fonksiyonlar",
        url: "hbbtv/video-dizinleri-için-ek-fonksiyonlar"
      },
      {
        title: "HBBTV Ayarları",
        url: "hbbtv/hbbtv-ayarları",
        submenu: [
          {
            title: "HBBTV Desteği",
            url: "hbbtv/hbbtv-ayarları/hbbtv-desteği"
          },
          {
            title: "İzleme Tercihi",
            url: "hbbtv/hbbtv-ayarları/izleme-tercihi"
          },
          {
            title: "Çerez Ayarları",
            url: "hbbtv/hbbtv-ayarları/çerez-ayarları"
          },
          {
            title: "Kalıcı Depolama",
            url: "hbbtv/hbbtv-ayarları/kalıcı-depolama"
          },
          {
            title: "İzleme Sitelerini Engelle",
            url: "hbbtv/hbbtv-ayarları/izleme-sitelerini-engelle"
          },
          {
            title: "Cihaz Kimliği",
            url: "hbbtv/hbbtv-ayarları/cihaz-kimliği"
          },
          {
            title: "Cihaz Kimliğini Sıfırlama",
            url: "hbbtv/hbbtv-ayarları/cihaz-kimliğini-sıfırlama"
          }
      ]
      }
    ]
  },
  {
    title: "Teleteks",
    url: "teleteks",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "TOP Tekst veya FLOF Tekst Modu",
        url: "teleteks/top-tekst-veya-flof-tekst-modu"
      },
      {
        title: "Normal Tekst Modu",
        url: "teleteks/normal-tekst-modu"
      }
    ]
  },
  {
    title: "USB Kayıt",
    url: "usb-kayıt",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
    submenu: [
      {
        title: "Televizyon Programlarının Kaydedilmesi ve Oynatılmasıyla İlgili Bilgiler",
        url: "usb-kayıt/televizyon-programlarının-kaydedilmesi-ve-oynatılmasıyla-ilgili-bilgiler"
      },
      {
        title: "Harici Veri Ortamı Kullanımında Muhtemel Kısıtlamalar",
        url: "usb-kayıt/harici-veri-ortamı-kullanımında-muhtemel-kısıtlamalar"
      },
      {
        title: "Harici Veri Ortamının Bağlanması",
        url: "usb-kayıt/harici-veri-ortamının-bağlanması"
      },
      {
        title: "USB Kayıt Ayarları",
        url: "usb-kayıt/usb-kayıt-ayarları", 
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Veri Ortamının Biçimlendirilmesi",
            url: "usb-kayıt/usb-kayıt-ayarları/veri-ortamının-biçimlendirilmesi"
          },
          {
            title: "Kayıt / Zaman Kaydırma için Veri Ortamnın Seçilmesi",
            url: "usb-kayıt/usb-kayıt-ayarları/kayıt-zaman-kaydırma-için-veri-ortamın-seçilmesi"
          },
          {
            title: "Veri Ortamı Testi",
            url: "usb-kayıt/usb-kayıt-ayarları/veri-ortamı-testi"
          }
        ]
      },
      {
        title: "Zaman Kaydırma Fonksiyonunun Açılıp / Kapatılması",
        url: "usb-kayıt/zaman-kaydırma-fonksiyonunun-açılıp-kapatılması"
      },
      {
        title: "Zaman Kaydırma Disk Kurulumu",
        url: "usb-kayıt/zaman-kaydırma-disk-kurulumu",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Otomatik Kurulum",
            url: "usb-kayıt/zaman-kaydırma-disk-kurulumu/otomatik-kurulum"
          },
          {
            title: "Manuel Kurulum",
            url: "usb-kayıt/zaman-kaydırma-disk-kurulumu/manuel-kurulum"
          }
        ]
      },
      {
        title: "Zaman Kaydırma ve Sürekli Kayıt ile Programların Duraklatılması",
        url: "usb-kayıt/zaman-kaydırma-ve-sürekli-kayıt-ile-programların-duraklatılması"
      },
      {
        title: "Programları Kaydetme",
        url: "usb-kayıt/programları-kaydetme",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Kayıt Sırasında Televizyonun Bekleme Konumuna Alınması",
            url: "usb-kayıt/programları-kaydetme/kayıt-sırasında-televizyonun-bekleme-konumuna-alınması"
          },
          {
            title: "Kanal Listesinden Bir Programı Kaydetme",
            url: "usb-kayıt/programları-kaydetme/kanal-listesinden-bir-programı-kaydetme"
          }
        ]
      },
      {
        title: "Kayıt Zamanlayıcısı",
        url: "usb-kayıt/kayıt-zamanlayıcısı",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Elektronik Program Rehberi Kullanarak Kayıt Zamanlayıcı Eklenmesi",
            url: "usb-kayıt/programları-kayıt-zamanlayıcısı/elektronik-program-rehberi-kullan-kayıt-zamanlayıcı-eklenmesi"
          },
          {
            title: "Bilgileri Manuel Girerek Kayıt Zamanlayıcı Eklenmesi",
            url: "usb-kayıt/kayıt-zamanlayıcısı/bilgileri-manuel-girerek-kayıt-zamanlayıcı-eklenmmesi"
          },
          {
            title: "Kayıt Zamanlayıcısının Düzenlenmesi",
            url: "usb-kayıt/kayıt-zamanlayıcısı/kayıt-zamanlayıcısının-düzenlenmesi"
          },
          {
            title: "Kayıt Zamanlayıcısının Silinmesi",
            url: "usb-kayıt/kayıt-zamanlayıcısı/kayıt-zamanlayıcısının-silinmesi"
          }
        ]
      },
      {
        title: "Oynatma",
        url: "usb-kayıt/oynatma",
        icon: <ChevronRightIcon />,
        iconActive: <ExpandMoreIcon/>,
        submenu: [
          {
            title: "Kayıtlı Dosyalar Listesinden Bir Kayıt Oynatma",
            url: "usb-kayıt/oynatma/kayıtlı-dosyalar-listesinden-bir-kayıt-oynatma"
          },
          {
            title: "İleri / Geri Görüntü Arama",
            url: "usb-kayıt/oynatma/ileri-geri-görüntü-arama"
          }
        ]
      },
      {
        title: "Kaydedilenler Listesinden Kaydedilmiş Yayınların Silinmesi",
        url: "usb-kayıt/kaydedilenler-listesinden-kaydedilmiş-yayınların-silinmesi"
      }
    ]
  },
  {
    title: "USB Oynatıcı",
    url: "usb-oynatıcı",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Android TV",
    url: "android-tv",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Chromecast Built-in{&trade;}",
    url: "cromecast-built-in",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Cihaz Tercihleri",
    url: "cihaz-tercihleri",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Aksesuarlar",
    url: "aksesuarlar",
  },
  {
    title: "Ebeveyn Ayarları",
    url: "ebeveyn-ayarları",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Harici Cihaz Kullanma",
    url: "harici-cihaz-kullanma",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Ağ Kurulumu",
    url: "ağ-kurulumu",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
  },
  {
    title: "Detaylı Kanal Ayarları",
    url: "detaylı-kanal-ayarları",
    icon: <ChevronRightIcon />,
    iconActive: <ExpandMoreIcon/>,
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
