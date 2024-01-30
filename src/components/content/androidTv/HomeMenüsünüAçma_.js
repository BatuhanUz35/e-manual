import { Box } from "@mui/material"
import home from "../../../assets/images/icons/home.png"
import down from "../../../assets/images/icons/down.png";
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import back from "../../../assets/images/icons/back.png"
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
     <img src={left} alt="Sol" className="inline-icon sm"/>/<img src={right} alt="Sağ" className="inline-icon sm"/>
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle
    bir uygulamayı açmak / başlatmak için <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Ana ekrana dönmek için <img src={back} alt="Geri" className="inline-icon"/> düğmesine ardarda veya  <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]

export const not = [
  <Box>
    Ana ekranı açılırken, arka planda oynatılan uygulama / içerik durdurulur. Devam etmek için Ana ekranından uygulamayı veya içeriği tekrar seçmeniz gerekir.
  </Box>
]