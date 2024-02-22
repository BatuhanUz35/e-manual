import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Kanal Düzenleyici</b> menüsünde silmek
    istediğiniz ilk kanalı seçip <Circle className="inline-icon button" /> düğmesiyle işaretleyin.
  </Box>,
  <Box>
    <Circle className="inline-icon button-blue button" /> (mavi) düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>Kanal/kanallar silinmiştir</Box>
    </Box>
  </Box>,
  <Box>
    <b>
      Kanal Düzenleyici</b> menüsünden çıkmak için {" "}<img src={back} alt="geri" className="inline-icon" /> ardından <b>Evet</b>'i
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>
]