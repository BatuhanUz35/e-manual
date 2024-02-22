import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png";
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <b>Ses</b> menüsünden yapılan değişiklikleri sıfırlamak için <b>Varsayılana Sıfırla</b>'yı
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Sıfırlamayı onaylamak için <b>Evet</b>'i veya işlemi iptal etmek için <b>Hayır</b>'ı
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon" /> Home menüsüne dönmek
    için <img src={home} alt="home" className="inline-icon" /> veya TV yayınına dönmek için
    {" "}<img src={tv_icon} alt="tv" className="inline-icon" /> düğmesine basın.
  </Box>
]