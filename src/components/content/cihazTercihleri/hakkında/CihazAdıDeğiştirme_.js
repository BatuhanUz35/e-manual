import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"

export const ol = [
  <Box>
   <b>Hakkında</b> menüsünden <b>Cihaz Adı</b>'nı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Cihaz adını değiştirmek için <b>Değiştir</b>'i veya işlemi iptal etmek için <b>Değiştirme</b>'yi seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Önerilen cihaz adlarından birini kullanabilir veya <b>Özel Ad girin...</b>‘i seçip televizyona istediğiniz bir adı vermek için <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]