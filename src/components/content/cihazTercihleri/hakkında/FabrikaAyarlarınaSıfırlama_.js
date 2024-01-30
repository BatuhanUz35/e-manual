import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export const ol = [
  <Box>
    <b>Hakkında</b> menüsünden <b>Fabrika Ayarlarına Sıfırla</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Uyarı ekranı görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Sıfırlama işlemini onaylamak için <b>Fabrika Ayarlarına Sıfırla</b>‘yı veya işlemi iptal etmek için <b>İptal</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>İkinci uyarı ekranı görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Sıfırlama işlemini onaylamak için <b>Her şeyi sil</b>‘i veya işlemi iptal etmek için <b>İptal</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
]