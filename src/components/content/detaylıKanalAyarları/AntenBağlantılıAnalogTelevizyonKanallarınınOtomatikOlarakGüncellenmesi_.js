import { Box } from "@mui/material";
import tv_icon from "../../../assets/images/icons/tv_icon.png"
import options from "../../../assets/images/icons/options.png"
import home from "../../../assets/images/icons/home.png"
import back from "../../../assets/images/icons/back.png"
import güncelleme_taraması from "../../../assets/images/in-page-images/güncelleme_taraması_2.svg"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Tv moduna geçmek için <img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={options} alt="Seçenekler" className="inline-icon" /> düğmesine basıp, <b>Kaynak</b> seçeneğini seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>ATV</b>'yi seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={options} alt="Seçenekler" className="inline-icon" /> düğmesine basıp, <b>Ayarlar</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Kanal</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="start inline-icon xs" /><Box><b>Kanal</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Kanallar</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="start inline-icon xs" /><Box><b>Kanallar</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Güncelleme Taraması</b>'nı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <img src={güncelleme_taraması} alt="Güncelleme Taraması" className="in-page-img" />
    </Box>
  </Box>,
  <Box>
    Arama işlemi başlar bulunan analog kanal sayısı menüde görüntülenir.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="start inline-icon xs" /><Box>Arama işlemi, alınan televizyon kanallarının sayısına bağlı olarak birkaç dakika sürebilir.</Box>
    </Box>
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" />, TV yayınına dönmek
    için <img src={tv_icon} alt="TV" className="inline-icon" /> veya Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>

]