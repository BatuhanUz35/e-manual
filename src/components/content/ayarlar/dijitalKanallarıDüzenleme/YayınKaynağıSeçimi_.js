import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Kanal Düzenleyici</b> menüsünden <b>Kaynak</b> seçeneğini seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Uydu</b>, <b> Kablo</b> veya <b>Anten</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>Seçtiğiniz kaynağa ait kanal listesi görüntülenir.</Box>
    </Box>
  </Box>
]