import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Kanal Düzenleyici</b> menüsünde düzenlemek istediğiniz favori
    listesini seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>Seçilen favori listesi kanalları görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Taşımak istediğiniz kanal/kanalları seçip <Circle className="inline-icon button" />
    düğmesiyle işaretleyin.
  </Box>,
  <Box>
    <Circle className="inline-icon button-green button" /> (yeşil) düğmesine basın.
  </Box>,
  <Box>
    Yeni kanal konumunu seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>Kanallar yeni kanal konumuna taşınmıştır.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Kanal Düzenleyici</b> menüsünden çıkmak için <img src={back} alt="Geri" className="inline-icon" />
    ardından <b>Evet</b>'i seçip <Circle className="inline-icon" /> düğmesine basın.
  </Box>
]