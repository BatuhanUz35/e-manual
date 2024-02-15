import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import home from "../../../assets/images/icons/home.png"
import back from "../../../assets/images/icons/back.png"

export const ol = [
  <Box>
    <b>Ebeveyn Denetimleri</b> menüsünden <b>Program Kısıtlamaları</b>'nı seçip <Circle className="inline-icon button"/>
    {" "} düğmesine basın.
  </Box>,
  <Box>
    <b>Derecelendirme Sistemleri</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Derecelendirme sistemini <Circle className="inline-icon button"/> düğmesiyle seçin.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
    <b>Derecelendirmeler</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Erişim düzeyini seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]