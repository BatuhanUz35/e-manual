import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png"
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import back from "../../../../assets/images/icons/back.png";

export const ol = [
  <Box>
    <b>Sistem Sesleri</b>'ni seçip <Circle className="inline-icon button" /> düğmesiyle
    <b> Açık</b> veya <b>Kapalı</b> konumu seçin.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne dönmek
    için <img src={home} alt="Home" className="inline-icon" /> veya TV yayınına dönmek için
    {" "}<img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>
]