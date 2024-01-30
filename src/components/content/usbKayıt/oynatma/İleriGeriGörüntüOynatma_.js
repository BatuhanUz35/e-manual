import { Box } from "@mui/material";
import "../../style.css"
import fast_backward from "../../../../assets/images/icons/fast_backward.png"
import fast_forward from "../../../../assets/images/icons/fast_forward.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Oynatma hızını (2x, 4x, 8x, 16x veya 32x) seçemek için oynatma sırasında devamlı olarak <img src={fast_backward} alt="Geri sar" className="inline-icon"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>
        Görüntü geriye doğru aranır.
      </Box>
    </Box>
  </Box>,
  <Box>
  Oynatma hızını (2x, 4x, 8x, 16x veya 32x) seçemek için oynatma sırasında devamlı olarak <img src={fast_forward} alt="Geri sar" className="inline-icon"/> düğmesine basın.
  <Box className="flex-container padding-1">
    <ArrowForwardIcon className="inline-icon xs" />
    <Box>
      Görüntü ileri doğru aranır.
    </Box>
  </Box>
</Box>,
]

