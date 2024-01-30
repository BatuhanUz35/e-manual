import { Box } from "@mui/material"
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <b>Ana Ekran</b> menüsünden <b>Kanalları Özelleştir</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Desteklenen uygulamalar ve kanallar görüntülenir, kanalların görüntülenmesini istediğiniz seçeneklerini özelleştirin.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]