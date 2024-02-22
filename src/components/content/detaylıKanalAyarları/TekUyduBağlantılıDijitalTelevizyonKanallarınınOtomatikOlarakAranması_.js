import { Box } from "@mui/material";
import anten_tipi from "../../../assets/images/in-page-images/anten_tipi.svg"
import tek from "../../../assets/images/in-page-images/tek.svg"
import tv_icon from "../../../assets/images/icons/tv_icon.png"
import options from "../../../assets/images/icons/options.png"
import down from "../../../assets/images/icons/down.png"
import back from "../../../assets/images/icons/back.png"
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
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Kanal</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Otomatik Kanal Arama</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Otomatik Kanal Arama</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Anten Tipi</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <img src={anten_tipi} alt="Anten tipi" className="" />
    </Box>
  </Box>,
  <Box>
    <b>Tek</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <img src={tek} alt="Tek" className="" />
    </Box>
  </Box>,
  <Box>
    <b>Mevcut Uydu</b>'yu seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Uydu Seçimi</b>'ni <Circle className="inline-icon button" /> düğmesi ile seçip <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />
    /<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle arama yapmak istediğiniz uyduyu seçin.
  </Box>,
  <Box>
    <b>Tarama Türü</b>'nü seçin.
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
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> düğmesine basın.
  </Box>,
   <Box>
   <b>Sonraki</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
   <Box className="flex-container padding-1">
     <ArrowForwardIcon className="inline-icon xs" /><Box><b>Otomatik Arama</b> menüsü görünür ve TV kanallarının aranmasına başlanır.</Box>
   </Box>
   <Box className="flex-container padding-1">
     <ArrowForwardIcon className="inline-icon xs" /><Box>Arama işlemi, alınan televizyon kanallarının sayısına bağlı olarak birkaç dakika sürebilir.</Box>
   </Box>
 </Box>,
]