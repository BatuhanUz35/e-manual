import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import down from "../../../../assets/images/icons/down.png";
import home from "../../../../assets/images/icons/home.png";
import back from "../../../../assets/images/icons/back.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Erişilebilirlik</b> menüsünden <b>AC4 Diyalog Geliştirme</b>'yi seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>AC4 Diyalog Geliştirme</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <b> Düşük</b>, <b>Orta</b>, <b>Yüksek</b> veya <b>Kapalı</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne
    dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]