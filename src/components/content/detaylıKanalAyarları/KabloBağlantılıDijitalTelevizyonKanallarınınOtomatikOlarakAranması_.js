import { Box } from "@mui/material";
import tv_icon from "../../../assets/images/icons/tv_icon.png"
import options from "../../../assets/images/icons/options.png"
import home from "../../../assets/images/icons/home.png"
import back from "../../../assets/images/icons/back.png"
import zero from "../../../assets/images/icons/zero.png"
import one from "../../../assets/images/icons/one.png"
import kanal_taraması from "../../../assets/images/in-page-images/kanal_taraması.svg"
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
    <b>Kablolu</b>'yu seçip <Circle className="inline-icon button" /> düğmesine basın.
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
    <b>Kanallar</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Kanallar</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>LCN</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Açık</b> veya <b>Kapalı</b>'yı seçin.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Kanal Tarama Türü</b>'nü seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Sadece şifresiz kanallar için <b>Yanlızca Ücretsiz Kanallar</b>.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Sadece şifreli kanallar için <b>Yanlızca Şifrelenmiş Kanallar</b>.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Tüm uydu kanalları için <b>Tümü</b> seçimini yapın.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Hafızaya Alma Türü</b>'nü seçin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Sadece Televizyon kanalları için <b>Yanlızca Dijital Kanallar</b>.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Sadece radyo kanalları için <b>Yanlızca Radyo Kanallar</b>.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Her ikisini aratmak için <b>Tümü</b> seçimini yapın.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Kanal Taraması</b>'nı seçip <Circle className="inline-icon buttom"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <img src={kanal_taraması} alt="Kanal Taraması" className="in-page-img" />
    </Box>
  </Box>,
  <Box>
    <b>Tarama Modu</b>'nu seçip <b>Gelişmiş</b>, <b>Hızlı</b> veya <b>Tam</b> seçimini yapın.
  </Box>,
  <Box>
    <b>Frekans (KHz)</b>'yi seçip <Circle className="inline-icon button" /> düğmesine basın. <img src={one} alt="1" className="inline-icon xs"/>...
    <img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle frekansı girin.
  </Box>,
  <Box>
   <b>Ağ Kimliği</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın. <img src={one} alt="1" className="inline-icon xs"/>...
   <img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle frekansı girin.
 </Box>,
]

export const ol_2 = [
  <Box>
    <b>Tara</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Otomatik Arama</b> menüsü görüntülenir ve TV kanallarının aranmasına başlanır.
    <Box className="flex-container padding-1">
    Arama işlemi, alınan televizyon kanallarının sayısına bağlı olarak birkaç dakika sürebilir.
    </Box>
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" />, TV yayınına dönmek
    için <img src={tv_icon} alt="TV" className="inline-icon" /> veya Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
 </Box>

]