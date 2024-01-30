import { Box } from "@mui/material"
import left from "../../../assets/images/icons/left.png";
import right from "../../../assets/images/icons/right.png";
import down from "../../../assets/images/icons/down.png";
import settings from "../../../assets/images/icons/settings.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
     <img src={left} alt="Sol" className="inline-icon sm"/>/<img src={right} alt="Sağ" className="inline-icon sm"/>
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle
    <img src={settings} alt="Ayarlar" className="inline-icon"/> Ayarları seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    <b>Ağ ve İnternet</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Ağ ve İnternet menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle <b>Kablosuz Ağda Uyandırma</b> ve <b>Yerel Ağda Uyandırma</b>'yı <b>Açık</b> seçmek
    için <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Açma işlemini onaylamak için <b>Tamam</b>'ı veya işlemi iptal etmek için <b>İptal</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>
]
