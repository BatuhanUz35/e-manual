import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png";
import back from "../../../../assets/images/icons/back.png";

export const ol = [
  <Box>
    <b>Tarih ve Saat</b> menüsünden <b>24 saatlik biçimi kullan</b>‘ı seçip <Circle className="inline-icon button" /> düğmesiyle 24 saatlik biçim 
    için <b>Açık</b> veya 12 saatlik biçim için <b>Kapalı</b> seçin.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home
    menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]