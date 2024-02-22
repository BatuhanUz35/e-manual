import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png";
import home from "../../../../assets/images/icons/home.png"
import tv_icon from "../../../../assets/images/icons/tv_icon.png"

export const ol = [
  <Box>
    Resim menüsünden <b>Varsayılana Sıfırla</b>'yı seçip <Circle className="inline-icon button" /> düğmesiyle
    onaylayın.
  </Box>,
  <Box>
    Sıfırlama işlemini onaylamak için <b>Tamam</b>'ı veya işlemi iptal etmek için <b>İptal</b>'i
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne dönmek
    için <img src={home} alt="Home" className="inline-icon" /> veya TV yayınına dönmek için
    {" "}<img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>
]