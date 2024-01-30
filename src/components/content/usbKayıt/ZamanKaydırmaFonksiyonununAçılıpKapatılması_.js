import tv_icon from "../../../assets/images/icons/tv_icon.png"
import options from "../../../assets/images/icons/options.png"
import down from "../../../assets/images/icons/down.png"
import back from "../../../assets/images/icons/back.png"
import right from "../../../assets/images/icons/right.png"
import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    TV modune geçmek için <img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={options} alt="TV" className="inline-icon" /> düğmesine basıp <img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <b> Kaydet</b> sekmesini seçin.
  </Box>,
  <Box>
    <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle <b>Zaman kaydırma Modu</b>'nu seçip <Circle className="inline-icon button" /> düğmesine
    basın.
    <Box>
      <ArrowForwardIcon className="inline-icon xs" />
      <b>Zaman Kaydırma Modu</b> menüsü görüntülenir.
    </Box>
  </Box>,
  <Box>
    <b>Zaman Kaydırma Modu</b>'ndan <Circle className="inline-icon button" /> düğmesiyle <b>Açık</b> veya <b>Kapalı</b> konumu seçin.
  </Box>,
  <Box>
    Yayına dönmek için <img src={back} alt="Geri" className="inline-icon"/> düğmesine basın.
  </Box>
]