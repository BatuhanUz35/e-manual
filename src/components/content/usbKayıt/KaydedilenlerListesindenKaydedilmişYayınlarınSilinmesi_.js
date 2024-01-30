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
    <img src={right} alt="Sağ" className="inline-icon sm"/> düğmesiyle <b>Kaydedilenler Listesi</b> öğesini seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
     <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>
        <b>Kaydedilenler Listesi</b> görüntülenir.
      </Box>
    </Box>
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle silmek istediğiniz kaydı seçip <Circle className="inline-icon button-yellow button"/> (sarı)
    düğmesine basın.
  </Box>,
  <Box>
    Silme işlemini onaylamak için <b>Evet</b>'i veya silme işlemini iptal etmek için <b>Hayır</b>'ı seçin.
  </Box>,
  <Box>
    Yayına dönmek için <img src={back} alt="Geri" className="inline-icon"/> düğmesine basın.
  </Box>
]