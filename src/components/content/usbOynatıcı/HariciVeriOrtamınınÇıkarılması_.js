import { Box } from "@mui/material"
import home from "../../../assets/images/icons/home.png"
import down from "../../../assets/images/icons/down.png"
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import settings from "../../../assets/images/icons/settings.png"
import { Circle } from "@mui/icons-material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={left} alt="sol" className="inline-icon sm" />/<img src={right} alt="sağ" className="inline-icon sm" />
    /<img src={down} alt="yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="aşağı" className="inline-icon sm" /> düğmesiyle
    {" "} <img src={settings} alt="Ayarlar" className="inline-icon" />'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="yukarı" className="inline-icon sm" /> düğmesiyle <b>Cihaz Tercihleri</b>’ni seçip  düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="yukarı" className="inline-icon sm" /> düğmesiyle <b>Depolama</b>’yı seçip  düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="aşağı" className="inline-icon sm" /> düğmesiyle çıkartmak istediğiniz harici veri
    ortamını seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Çıkar</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>- ..... güvenli bir şekilde çıkartıldı</b> mesajı görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Veri ortamını soketten çıkartın.
  </Box>
]