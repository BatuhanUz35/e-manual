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
    Favorilerden kaldırmak istediğiniz uygulamayı seçip <Circle className="inline-icon button" /> düğmesine 3 saniye basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Menü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Favorilerden Kaldır</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Uygulama Home menüsündeki uygulamalar sekmesinden kaldırılır.</Box>
    </Box>
  </Box>
]