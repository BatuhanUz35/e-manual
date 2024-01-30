import { Box } from "@mui/material"
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"
import down from "../../../../assets/images/icons/down.png"
import right from "../../../../assets/images/icons/right.png"
import left from "../../../../assets/images/icons/left.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Ana Ekran</b> menüsünden <img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle <b>Uygulamaları yeniden sırala</b>'yı seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Uygulamalar</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Yerini değiştirmek istediğiniz uygulamayı <Circle className="inline-icon button"/> düğmesiyle seçin.
  </Box>,
  <Box>
    <img src={left} alt="sol" className="inline-icon sm"/>/<img src={right} alt="sağ" className="inline-icon sm"/>
    /<img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
    uygulamayı yeni konumuna taşıyıp <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]

export const not =[
  <Box>
    Uygulamalar menüsünü görüntülemek için Home menüsünde <b>Uygulamalar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>
]