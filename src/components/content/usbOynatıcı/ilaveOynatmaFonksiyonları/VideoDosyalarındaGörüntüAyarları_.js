import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Oynatma / çalma esnasında <Circle className="inline-icon button"/> düğmesine basın
  </Box>,
  <Box>
   <b>Resim Ayarları</b> öğesini seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
   <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box><b>Resim</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>
]