import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import down from "../../../assets/images/icons/down.png";
import home from "../../../assets/images/icons/home.png";
import back from "../../../assets/images/icons/back.png";
import mağaza_modu_ayarları from "../../../assets/images/in-page-images/mağaza_modu_ayarları.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol1 = [
  <Box>
    <b>Cihaz Terichleri</b> menüsünden <b>Mağaza Modu</b>'nu seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Mağaza Modu</b> menüsü görüntülenir.</Box>
    </Box>
    <img src={mağaza_modu_ayarları} alt="Zamanlayıcı" className="in-page-img" />
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <b> Mağaza Modu</b>'nu seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Mağaza modunu etkinleştirmek için <b>Devam</b>'ı veya işlemi iptal etmek için <b>İptal</b>‘i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,

]

export const ol2 = [
  <Box>
    Mağaza modunu açmak için <b>Açık</b> veya işlemi iptal etmek için <b>İptal</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Mağaza Modu Mesajları</b>‘nı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Tanıtım Videosu</b>, <b>Mağaza Modu</b> veya <b>Tanıtım Videosu & Mağaza Logosu</b> seçimini yapıp <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home
    menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]