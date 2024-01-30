import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"
import down from "../../../../assets/images/icons/down.png"


export const ol = [
  <Box>
    <b>Hakkında</b> menüsünden <b>Yasal Bilgiler</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle görüntülemek istediğiniz bilgiyi seçip  düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>
        Seçtiğiniz bilgi görüntülenir.
      </Box>
    </Box>
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]