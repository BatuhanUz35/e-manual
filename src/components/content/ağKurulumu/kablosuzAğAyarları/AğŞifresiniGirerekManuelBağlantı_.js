import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import down from "../../../../assets/images/icons/down.png";
import right from "../../../../assets/images/icons/right.png"
import home from "../../../../assets/images/icons/home.png";
import left from "../../../../assets/images/icons/left.png";
import settings from "../../../../assets/images/icons/settings.png";
import continue_icon from "../../../../assets/images/icons/continue_icon.png";
import back from "../../../../assets/images/icons/back.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" />
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    {" "}<img src={settings} alt="Ayarlar" className="inline-icon" /> Ayarlar'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Ağ ve İnternet</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Kullanılabilir ağlar</b> sekemesinden <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesi
    ile bağlanmak istediğiniz ağı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Kablosuz bağlantı şifre ekranı görüntülenir.</Box>
    </Box>
  </Box>,
]

export const ol_2 = [
  <Box>
    <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" />
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    ekran klavyesinden şifreyi girip <img src={continue_icon} alt="Devam et ikonu" className="inline-icon xs" /> tuşunu
    seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Başarıyla bağlantı kuruldu mesajı görüntülenip modem bağlantısı kurulur.</Box>
    </Box>
  </Box>,
  <Box>
    Bağlı olduğunuz ağı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>IP Ayarları</b> öğesini seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Statik</b> seçeneğini seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>IP Adresi</b> değerini girin ve ekran klavyesinden <img src={continue_icon} alt="Devam et ikonu" className="inline-icon xs" /> tuşunu
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Gateway</b> değerini girin ve ekran klavyesinden <img src={continue_icon} alt="Devam et ikonu" className="inline-icon xs" /> tuşunu
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Ağ ön eki uzunluğu</b> değerini girin ve ekran klavyesinden <img src={continue_icon} alt="Devam et ikonu" className="inline-icon xs" /> tuşunu
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Varsa <b>DNS1</b> değerini girin ve ekran klavyesinden <img src={continue_icon} alt="Devam et ikonu" className="inline-icon xs" /> tuşunu
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Varsa <b>DNS2</b> değerini girin ve ekran klavyesinden <img src={continue_icon} alt="Devam et ikonu" className="inline-icon xs" /> tuşunu
    seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Başarıyla kaydedildi!</b> mesajı görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home
    menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>

]
