import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png"
import settings from "../../../../assets/images/icons/settings.png"
import right from "../../../../assets/images/icons/right.png";
import left from "../../../../assets/images/icons/left.png";
import down from "../../../../assets/images/icons/down.png";
import back from "../../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import resim_menüsü from "../../../../assets/images/in-page-images/resim_menüsü.png"

export const ol_1 = [
  <Box>
    <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={settings} alt="Ayarlar" className="inline-icon" />'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Cihaz Tercihleri</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Resim</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>
        <b>Resim</b> menüsü görüntülenir.
        <img src={resim_menüsü} alt="Resim Menüsü" />
      </Box>
    </Box>
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> ile
    satırı/işlevi seçin <img src={left} alt="Sol" className="inline-icon sm" /> veya <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle
    değeri/seçeneği seçin.
  </Box>
]

export const ol_2 = [
  <Box>
    <b>Gelişmiş Video</b>'yu seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="aşağı" className="inline-icon sm" /> ile
    satırı/işlevi seçin <img src={left} alt="sol" className="inline-icon sm" /> veya <img src={right} alt="sağ" className="inline-icon sm" /> düğmesiyle
    değeri/seçeneği seçin.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon" /> veya Home
    menüsüne dönmek için <img src={home} alt="home" className="inline-icon" /> düğmesine basın.
  </Box>
]

export const links = [
  {
    title: "Arttırılmış Görüntü Ayarları",
    url: "/ayarlar/görüntü-ayarları/arttırılmış-görüntü-ayarları",
    focus_item: 50401
  },
  {
    title: "Görüntü Ayarlarını Fabrika Ayarlarına Döndürme",
    url: "/ayarlar/görüntü-ayarları/görüntü-ayarlarını-fabrika-ayarlarına-döndürme",
    focus_item: 50402
  },
]