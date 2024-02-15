import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import home from "../../../assets/images/icons/home.png";
import back from "../../../assets/images/icons/back.png";
import enerji_tasarrufu_menüsü from "../../../assets/images/in-page-images/enerji_tasarrufu_menüsü.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Cihaz Terichleri</b> menüsünden <b>Enerji Tasarrufu</b>'nu seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Enerji Tasarrufu</b> menüsü görüntülenir.</Box>
    </Box>
    <img src={enerji_tasarrufu_menüsü} alt="Enerji Tasarrufu Menüsü"className="in-page-img"/>
  </Box>,
  <Box>
    <b>Ekranı kapat</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Kapanma zamanını seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home
    menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]