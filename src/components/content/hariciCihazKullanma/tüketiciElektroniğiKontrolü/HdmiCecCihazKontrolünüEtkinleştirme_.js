import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import down from "../../../../assets/images/icons/down.png";
import right from "../../../../assets/images/icons/right.png"
import home from "../../../../assets/images/icons/home.png";
import back from "../../../../assets/images/icons/back.png";
import left from "../../../../assets/images/icons/left.png";
import settings from "../../../../assets/images/icons/settings.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
    <img src={left} alt="Sol" className="inline-icon sm"/>/<img src={right} alt="Sağ" className="inline-icon sm"/>
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle
    {" "}<img src={settings} alt="Ayarlar" className="inline-icon"/> Ayarlar'ı seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
  </Box>,
  <Box>
    <b>Cihaz Tercihleri</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Girişler</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>HDMI kontrolü</b>'nü seçip <b>Açık</b> konumunu seçmek için <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Uyarı mesajı görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Açma işlemini onaylamak için <b>Tamam</b>'ı seçin veya işlemi iptal etmek için <b>İptal</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>CEC Cihaz Listesi</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Televizyona bağlı CEC özelliğini destekleyen cihazlar görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Listeden cihaz seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    CEC destekli harici cihazın televizyon ile kapanmasını istiyorsanız <b>Cihazı Otomatik Kapat</b>‘ı 
    seçip <b>Açık</b> konumunu seçmek için <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    CEC destekli harici cihazı açtığınızda televizyonun açılmasını istiyorsanız <b>TV'yi Otomatik Aç</b>‘ı 
    seçip <b>Açık</b> konumunu seçmek için <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home
    menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]
