import { Box } from "@mui/material";
import options from "../../../../assets/images/icons/options.png";
import back from "../../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Oynatma / çalma sırasında <img src={options} alt="Seçenekler" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
    <b>Bilgileri Göster</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>Dosya bilgileri görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Menüden çıkmak için <img src={back} alt="Geri" className="inline-icon"/> düğmesine basın.
  </Box>
]