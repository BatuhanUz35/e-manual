import { Box } from "@mui/material"
import tv_icon from "../../../assets/images/icons/tv_icon.png"
import entries from "../../../assets/images/icons/entries.png"
import { Circle } from "@mui/icons-material"

export const ol = [
  <Box>
    DVD kayıt cihazını, DVD oynatıcıyı veya Video kayıt cihazını açıp kullanmak istediğiniz fonksiyonu seçin.
  </Box>,
  <Box>
    TV moduna geçmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
    Kumandanın <img src={entries} alt="Girişler" className="inline-icon"/> düğmesine basın, sinyal kaynağını seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    <b>HDMI1</b>, <b>HDMI2</b> veya <b>HDMI3</b> kaynağını seçip  düğmesine basın.
  </Box>
]
