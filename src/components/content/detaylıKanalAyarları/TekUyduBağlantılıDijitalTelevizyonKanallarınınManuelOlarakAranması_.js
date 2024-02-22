import { Box } from "@mui/material";
import manuel_kanal_arama_menüsü from "../../../assets/images/in-page-images/manuel_kanal_arama_menüsü.png"
import uydu_ayrıntısı_aktarıcı_menüsü from "../../../assets/images/in-page-images/uydu_ayrıntısı_aktarıcı_menüsü.png"
import tv_icon from "../../../assets/images/icons/tv_icon.png"
import options from "../../../assets/images/icons/options.png"
import down from "../../../assets/images/icons/down.png"
import back from "../../../assets/images/icons/back.png"
import zero from "../../../assets/images/icons/zero.png"
import one from "../../../assets/images/icons/one.png"
import home from "../../../assets/images/icons/home.png"
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
    <b>Uydu</b>'yu seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={options} alt="Seçenekler" className="inline-icon" /> düğmesine basıp, <b>Ayarlar</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Kanal</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Kanal</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Kanal Kurulum Modu</b>'nu seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Uydu (Standart)</b> veya bir operatör kullanıyorsanuz <b>Uydu (Operatör Modu)</b>'nu seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Kanallar</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Kanallar</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Manuel Kanal Arama</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Mevcut Uydu</b>'yu seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Manuel Kanal Arama</b> menüsü görüntülenir.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <img src={manuel_kanal_arama_menüsü} alt="Manuel Kanal Arama Menüsü" className="in-page-img" />
    </Box>
  </Box>,
  <Box>
    <b>Aktarıcı</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Uydu Ayrıntısı Aktarıcı</b> menüsü görünür.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <img src={uydu_ayrıntısı_aktarıcı_menüsü} alt="Uydu Ayrıntısı Aktarıcı Menüsü" className="in-page-img" />
    </Box>
  </Box>,
  <Box>
    Gerekli öğeleri <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesi ile
    seçip <Circle className="inline-icon button"/> düğmesi ile onaylayın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Sembol</b> - Kanal frekansını <img src={one} alt="1" className="inline-icon xs"/>...
      <img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle 5 basamaklı olarak girin.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Frekans</b> - Kanal sembol oranını <img src={one} alt="1" className="inline-icon xs"/>...
      <img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle 5 basamaklı olarak girin.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Polarizasyon</b> - Kanal polarizasyonunu <b>Dikey</b>, <b>Yatay</b>,
      <b>Sol</b> veya <b>Sağ</b> seçin.</Box>
    </Box>
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Sonraki</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Otomatik Arama</b> menüsü görünür ve TV kanallarının aranmasına başlanır.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Arama işlemi, alınan televizyon kanallarının sayısına bağlı olarak birkaç dakika sürebilir.</Box>
    </Box>
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" />, TV yayınına dönmek
    için <img src={tv_icon} alt="TV" className="inline-icon" /> veya Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]