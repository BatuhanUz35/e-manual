import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png"
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import back from "../../../../assets/images/icons/back.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import right from "../../../../assets/images/icons/right.png";
import left from "../../../../assets/images/icons/left.png";

export const ol = [
  <Box>
    Ses menüsünden <b>Tiz</b>'i seçin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>
        <img src={left} alt="Sol" className="inline-icon sm" /> veya <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle değeri seçin.
      </Box>
    </Box>
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne dönmek
    için <img src={home} alt="Home" className="inline-icon" /> veya TV yayınına dönmek için
    {" "}<img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>
]