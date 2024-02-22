import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Kanal Düzenleyici</b> menüsünde taşımak karşılıklı yerini değiştirmek
    istediğiniz ilk kanalı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <Circle className="inline-icon button-yellow button" /> (sarı) düğmesine basın.
  </Box>,
  <Box>
    Yer değiştirmek istediğiniz ikinci kanalı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>İki kanal karşılıklı olarak yer değiştirmiştir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>
      Kanal Düzenleyici</b> menüsünden çıkmak için {" "}<img src={back} alt="geri" className="inline-icon" /> ardından <b>Evet</b>'i
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>
]