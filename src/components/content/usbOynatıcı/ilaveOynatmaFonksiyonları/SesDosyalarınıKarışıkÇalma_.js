import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import options from "../../../../assets/images/icons/options.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Oynatma sırasında <img src={options} alt="Seçenekler" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
    Karıştırma: <b>Kapalı</b>'yı seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>Harici veri ortamında bulunan şarkılar karışık olarak oynatılır.</Box>
    </Box>
  </Box>
]

export const not = [
  <Box>
    Harici veri otamında bulunan şarkıları sıra ile oynatmak için <b>Karıştırma Kapalı</b>‘yı seçin.
  </Box>
]