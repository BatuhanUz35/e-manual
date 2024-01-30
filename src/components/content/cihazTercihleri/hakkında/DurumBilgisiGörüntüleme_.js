import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"


export const ol = [
  <Box>
    <b>Hakkında</b> menüsünden <b>Durum</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>
        <b>IP adresi, MAC adresi, Seri numarası</b> ve <b>Açık kalma süresi</b> görüntülenir.
      </Box>
    </Box>
  </Box>,
    <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]