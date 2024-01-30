import { Box } from "@mui/material"
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"
import down from "../../../../assets/images/icons/down.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Ana ekran</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
    <b> Android TV Temel Hizmetleri</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Açık kaynak lisansları</b> görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]