import { Box } from "@mui/material"
import home from "../../assets/images/icons/home.png"
import back from "../../assets/images/icons/back.png"
import down from "../../assets/images/icons/down.png"
import left from "../../assets/images/icons/left.png"
import right from "../../assets/images/icons/right.png"
import settings from "../../assets/images/icons/settings.png"
import { Circle } from "@mui/icons-material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
    <img src={left} alt="Sol" className="inline-icon sm"/>/<img src={right} alt="Sağ" className="inline-icon sm"/>
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle
    {" "}<img src={settings} alt="Ayarlar" className="inline-icon"/> Ayarlar öğesini seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
  </Box>,
  <Box>
    <img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle <b>Uzaktan Kumandalar ve Aksesuarlar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Uzaktan Kumandalar ve Aksesuarlar</b> menüsü görüntülenir ve aksesuarlar aranmaya başlar.</Box>
    </Box>
  </Box>,
  <Box>
    Bulunan aksesuarlar menüde görüntülenir.
  </Box>,
  <Box>
    Eşleştirmek istediğiniz aksesuarı menüden <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle 
    seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]