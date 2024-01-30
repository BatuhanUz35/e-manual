import { Box } from "@mui/material"
import home from "../../../assets/images/icons/home.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    Home menüsünde <b>Uygulamalar</b> sekmesini seçin.
  </Box>,
  <Box>
    Favori uygulama eklemek için + tuşunu seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Uygulama seçin menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Eklemek istediğiniz uygulamayı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Uygulama Home menüsündeki uygulamalar sekmesine eklenir.</Box>
    </Box>
  </Box>
]