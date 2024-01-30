import { Box } from "@mui/material"
import { Link } from "react-router-dom";

export const texts = [
  <Box>
    Televizyonunuzda dahili Chromecast bulunur. Telefonunuz, tabletiniz veya dizüstü bilgisayarınızdan anında televizyona geçin. Dahili Chromecast özelliği ile sık kullandığınız tüm filmleri, dizileri, uygulamaları, oyunları ve daha başka içerikleri doğrudan TV'nize yansıtabilirsiniz. Chromecast Android ve iOS'de çalışır. Mobil cihazınız veya bilgisayarınız TV'niz ile aynı Wi-Fi ev ağına bağlı olmalıdır.
  </Box>,
  <Box>
    Daha fazla bilgi için; <Link to="https://www.support.google.com/androidtv" className="link">www.support.google.com/androidtv</Link> adresini ziyaret edin.
  </Box>
]

export const links = [
  {
    title: "Chromecast ile TV'yi Açma",
    url:  "/chromecast-built-in/chromecast-ile-tvyi-açma",
    focus_item: 130100
  },
  {
    title: "Chromecast'i Android veya İOS Mobil Cihazda Kullanma",
    url:  "/chromecast-built-in/chromecasti-android-veya-ios-mobil-cihazda-kullanma",
    focus_item: 130200
  },
  {
    title: "PC ile Chrome Tarayıcı Sekmesini TV'nizde Yayınlama",
    url:  "/chromecast-built-in/pc-ile-chrome-tarayıcı-sekmesini-tvnizde-yayınlama",
    focus_item: 130300
  },
  {
    title: "Bilgisayar Ekranını TV'de Yayınlama",
    url:  "/chromecast-built-in/bilgisayar-ekranını-tvde-yayınlama",
    focus_item: 130400
  },
  {
    title: "Bilgisayardan Müzik Veya Video Dosyalarını TV'de Yayınlama",
    url:  "/chromecast-built-in/bilgisayardan-müzik-veya-video-dosyalarını-tvde-yayınlama",
    focus_item: 130500
  },
]