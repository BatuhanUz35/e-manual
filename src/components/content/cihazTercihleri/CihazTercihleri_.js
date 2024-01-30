import { Box } from "@mui/material"
import home from "../../../assets/images/icons/home.png"
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import down from "../../../assets/images/icons/down.png"
import settings from "../../../assets/images/icons/settings.png"
import { Circle } from "@mui/icons-material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" />
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <img src={settings} alt="Ayarları" className="inline-icon" /> Ayarları seçip <Circle className="inline-icon button" /> düğmesiyle onaylayın.
  </Box>,
  <Box>
    <img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle <b>Cihaz Tercihleri</b>'ni seçip <Circle className="inline-icon button" /> düğmesiyle onaylayın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Cihaz Tercihleri</b> menüsü görüntülenir.</Box>
    </Box>
    <h2>img gelcek</h2>
  </Box>
]

export const links = [
  {
    title: "Hakkında",
    url: "/cihaz-tercihleri/hakkında",
    focus_item: 140100,
  },
  {
    title: "Tarih ve Saat Ayarları",
    url: "/cihaz-tercihleri/tarih-ve-saat-ayarları",
    focus_item: 140200,
  },
  {
    title: "Zamanlayıcı Ayarları",
    url:  "/cihaz-tercihleri/zamanlayıcı-ayarları",
    focus_item: 140300,
  },
  {
    title: "Dil Ayarları",
    url:  "/cihaz-tercihleri/dil-ayarları",
    focus_item: 140400
  },
  {
    title: "Klavye Ayarları",
    url:  "/cihaz-tercihleri/klavye-ayarları",
    focus_item: 140500,
  },
  {
    title: "Depolama Ayarları",
    url:  "/cihaz-tercihleri/depolama-ayarları",
    focus_item: 140600,
  },
  {
    title: "Mağaza Modu Ayarları",
    url:  "/cihaz-tercihleri/mağaza-modu-ayarları",
    focus_item: 140700
  },
  {
    title: "Google Asistan Ayarları",
    url:  "/cihaz-tercihleri/google-asistan-ayarları",
    focus_item: 140800
  },
  {
    title: "Chromecast Built-in Ayarları",
    url:  "/cihaz-tercihleri/chromecast-built-in-ayarları",
    focus_item: 140900
  },
  {
    title: "Ekran Koruyucu Ayarları",
    url:  "/cihaz-tercihleri/ekran-koruyucu-ayarları",
    focus_item: 141000
  },
  {
    title: "Enerji Tasarrufu Ayarları",
    url:  "/cihaz-tercihleri/enerji-tasarrufu-ayarları",
    focus_item: 141100
  },
  {
    title: "Konum Ayarları",
    url:  "/cihaz-tercihleri/konum-ayarları",
    focus_item: 141200
  },
  {
    title: "Kullanım ve Teşhis Ayarları",
    url:  "/cihaz-tercihleri/kullanım-ve-teşhis-ayarları",
    focus_item: 141300
  },
  {
    title: "Erişilebilirlik Ayarları",
    url:  "/cihaz-tercihleri/erişilebilirlik-ayarları",
    focus_item: 141400,
  },
  {
    title: "Yeniden Başlatma",
    url:  "/cihaz-tercihleri/yeniden-başlatma",
    focus_item: 141500
  },
]