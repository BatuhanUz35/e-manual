import { Box } from "@mui/material";
import options from "../../../../assets/images/icons/options.png";
import down from "../../../../assets/images/icons/down.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Resimler 90° döndürülebilir.
  </Box>,
  <Box>
    Oynatma sırasında <img src={options} alt="Seçenekler" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
   <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle <b>Döndür</b>‘ü seçip <Circle className="inline-icon button"/> düğmesine basın.
   <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>Resim, 90° saat yönünde veya saat yönü tersine döner.</Box>
    </Box>
  </Box>,
 
]