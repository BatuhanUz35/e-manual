import { Box } from "@mui/material"
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"
import down from "../../../../assets/images/icons/down.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Uygulamalar menüsünden <img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle <b>Tüm uygulamaları göster</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Tüm uygulamalar görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Önbellek verilerini temizlemek istediğiniz uygulamayı seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Uygulama detayları görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Önbelleği temizle</b>'yi seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    İşlemi onaylamak için <b>Tamam</b>'ı veya iptal etmek için <b>İptal</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]