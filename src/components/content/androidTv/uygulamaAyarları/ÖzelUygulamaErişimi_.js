import { Box } from "@mui/material"
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Uygulamalar menüsünden <b>Özel uygulama erişimi</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Özel uygulama erişimi menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Düzenlemek istediğiniz özel uygulama erişimi tipini seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Düzenlemek istediğiniz özel uygulama erişimi seçip <Circle className="inline-icon button"/> düğmesiyle <b>Açık</b> veya <b>Kapalı</b>'yı seçin.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]