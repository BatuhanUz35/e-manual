import { Box } from "@mui/material";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import back from "../../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <b>Altyazı</b> menüsünden <b>İkinci Dijital Altyazı Dili</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>İkinci Dijital Altyazı Dili</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon" /> veya
    yayına dönmek için <img src={tv_icon} alt="tv" className="inline-icon" /> düğmesine basın.
  </Box>
]