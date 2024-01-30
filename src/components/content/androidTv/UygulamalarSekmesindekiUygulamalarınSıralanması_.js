import { Box } from "@mui/material"
import home from "../../../assets/images/icons/home.png"
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
    Home menüsünde <b>Uygulamalar</b> sekmesini seçin.
  </Box>,
  <Box>
    Yerini değiştirmek istediğiniz uygulamayı seçip <Circle className="inline-icon button"/> düğmesine 3 saniye basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Menü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Taşı</b>'yı seçip <Circle className="inline-icon button"/> düğmesine basın
  </Box>,
  <Box>
     <img src={left} alt="Sol" className="inline-icon sm"/>/<img src={right} alt="Sağ" className="inline-icon sm"/> düğmesiyle
     uygulamayı yeni konumuna taşıyıp <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
]

export const not = [
  <Box>
    Diğer uygulamaları sıralamak için <b>3</b> ila <b>5.</b> adımları tekrarlayın.
  </Box>
]