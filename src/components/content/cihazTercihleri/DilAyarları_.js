import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import down from "../../../assets/images/icons/down.png";
import right from "../../../assets/images/icons/right.png"
import home from "../../../assets/images/icons/home.png";
import back from "../../../assets/images/icons/back.png";
import dil from "../../../assets/images/in-page-images/dil.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Cihaz Terichleri</b> menüsünden <b>Dil</b> öğesini seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Dil</b> menüsü görüntülenir.</Box>
    </Box>
    <img src={dil} alt="Zamanlayıcı"className="in-page-img"/>
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    dili seçip <Circle className="inline-icon button" /> düğmesiyle onaylayın.
  </Box>,
    <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home
    menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]