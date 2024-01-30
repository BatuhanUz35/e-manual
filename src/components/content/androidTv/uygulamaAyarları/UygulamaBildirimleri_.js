import { Box } from "@mui/material"
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Uygulamalar menüsünden <b>Tüm uygulamaları göster</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Tüm uygulamalar görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Bildirim tercihini ayarlamak istediğiniz uygulamayı seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Uygulama detayları görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Bildirim</b>'i seçip <Circle className="inline-icon button"/> düğmesiyle <b>Açık</b> veya <b>Kapalı</b>'yı seçin.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]