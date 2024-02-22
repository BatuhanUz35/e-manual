import tv_icon from "../../../assets/images/icons/tv_icon.png";
import back from "../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";

export const ol = [
  <Box>
    <b>Gelişmiş Seçenekler</b> menüsünden <b>Sesiz Mavi ekran</b>'ı seçin.
  </Box>,
  <Box>
    <Circle className="inline-icon button" /> düğmesiyle <b>Açık</b> veya <b>Kapalı</b> konumu seçin.
  </Box>,
  <Box>
    Yayına dönmek için <img src={back} alt="Geri" className="inline-icon" /> veya
    {" "}<img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>
]