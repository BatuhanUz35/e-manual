import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import kullanım_ve_teşhis from "../../../assets/images/in-page-images/kullanım_ve_teşhis.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import home from "../../../assets/images/icons/home.png";
import back from "../../../assets/images/icons/back.png";

export const ol = [
  <Box>
    <b>Cihaz Terichleri</b> menüsünden <b>Kullanım ve Teşhis</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Kullanım ve Teşhis</b> menüsü görüntülenir.</Box>
    </Box>
    <img src={kullanım_ve_teşhis} alt="Kullanım ve Teşhis Menüsü"className="in-page-img"/>
  </Box>,
  <Box>
    Kullanım ve Teşhis verilerinin otomatik olarak gönderilmesini istiyorsanız <b>Açık</b> veya gönderilmesini istemiyorsanız <b>Kapalı</b>'yı 
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home
    menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]