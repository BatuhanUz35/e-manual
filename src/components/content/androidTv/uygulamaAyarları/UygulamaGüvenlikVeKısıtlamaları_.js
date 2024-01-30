import { Box } from "@mui/material"
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Uygulamalar menüsünden <b>Güvenlik ve kısıtlamalar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Güvenlik ve kısıtlamalar menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Bilinmeyen kaynaklar</b>, <b>Uygulamaları doğrula</b>'yı seçip <b>Açık</b> veya <b>Kapalı</b>'yı seçin.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]