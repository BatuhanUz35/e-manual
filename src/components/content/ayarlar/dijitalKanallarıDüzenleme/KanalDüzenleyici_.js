import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <img src={home} alt="home" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Uygulamalar</b> sekmesinden <b>Kanal Düzenleyici</b> uygulamasını seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Kanal Düzenleyici</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>
]