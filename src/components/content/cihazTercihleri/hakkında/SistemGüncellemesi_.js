import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"

export const ol = [
  <Box>
   <b>Hakkında</b> menüsünden Sistem Güncellemesi‘ni seçip <Circle className="inline-icon button"/> düğmesine basın.
   <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Sistem güncellemeleri denetlenir. Sistem güncellemesi var ise onayınız sonrası güncelleme indirilip cihazınız güncellenir.</Box>
    </Box>
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]