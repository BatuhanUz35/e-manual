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
    Uygulamalar sekmesinden başlatmak istediğiniz uygulamayı <img src={left} alt="Sol" className="inline-icon sm"/>/<img src={right} alt="Sağ" className="inline-icon sm"/> düğmesi
    ile seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Uygulama ana ekranı görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Uygulamayı sonlandırmak için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]