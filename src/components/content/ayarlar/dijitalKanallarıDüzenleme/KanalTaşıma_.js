import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"
import check from "../../../../assets/images/icons/check.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Kanal Düzenleyici</b> menüsünde taşımak istediğiniz kanal/kanlları
    seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>Kanal/kanallar <img src={check} className="inline-icon sm" alt="Check" /> ile işaretlenir.</Box>
    </Box>
  </Box>,
  <Box>
    <Circle className="inline-icon button-green button" /> (yeşil) düğmesine basın.
  </Box>,
  <Box>
    Yeni kanal konumunu seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>Kanal/kanallar yeni kanal konumuna taşınmıştır.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Kanal Düzenleyici</b> menüsünden çıkmak için <img src={back} alt="Geri" className="inline-icon" /> ardından <b>Evet</b>'i
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>
]