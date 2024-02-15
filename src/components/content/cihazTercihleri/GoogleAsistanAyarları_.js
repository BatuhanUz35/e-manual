import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import down from "../../../assets/images/icons/down.png";
import home from "../../../assets/images/icons/home.png";
import back from "../../../assets/images/icons/back.png";
import google_asistan_menüsü from "../../../assets/images/in-page-images/google_asistan_menüsü.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Cihaz Terichleri</b> menüsünden <b>Google Asistan</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Google Asistan</b> menüsü görüntülenir.</Box>
    </Box>
    <img src={google_asistan_menüsü} alt="Google Asistan Menüsü" className="in-page-img" />
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    bağlı hesabı görüntüleyin, arama yapın, uygulamaları düzenleyin, güvenli arama filtresini etkinleştirin veya açık kaynak lisanslarını görüntüleyin.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home
    menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]