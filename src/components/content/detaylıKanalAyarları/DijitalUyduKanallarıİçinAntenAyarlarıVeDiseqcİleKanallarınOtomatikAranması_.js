import { Box } from "@mui/material";
import anten_tipi_menüsü from "../../../assets/images/in-page-images/anten_tipi_menüsü.png"
import diseqc_bağlantı_noktası_menüsü from "../../../assets/images/in-page-images/diseqc_bağlantı_noktası_menüsü.png"
import tv_icon from "../../../assets/images/icons/tv_icon.png"
import options from "../../../assets/images/icons/options.png"
import down from "../../../assets/images/icons/down.png"
import back from "../../../assets/images/icons/back.png"
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
  </Box>,
  <Box>
    <b>Otomatik Kanal Arama</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Uyarı mesajı görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Daha önceden yapılmış kanal aramasındaki kanallar silinip yeniden kanal araması yapılacaktır devam etmek için <b>Sonraki</b>‘ni 
    seçip <Circle className="inline-icon button" /> düğmesine basın.
   <Box className="flex-container padding-1">
     <ArrowForwardIcon className="inline-icon xs" /><Box><b>Otomatik Kanal Arama</b> menüsü görüntülenir.</Box>
  </Box>
 </Box>,
  <Box>
    <b>Anten Tipi</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Anten Tipi</b> menüsü görüntülenir.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <img src={anten_tipi_menüsü} alt="Anten Tipi Menüsü" className="in-page-img" />
    </Box>
  </Box>,
  <Box>
    Mevcut anten tipinize göre <b>DiSEqC 1.0</b> veya <b>DiSEqC 1.1</b> seçimini yapıp <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>DiSEqC 1.0:</b> Uydu santrali veya switch kullanarak, en fazla dört farklı uydudan aynı anda yayın alınabilir.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>DiSEqC 1.1:</b> Uydu santrali veya switch kullanarak, en fazla on altı farklı uydudan aynı anda yayın alınabilir</Box>
    </Box>
  </Box>,
  <Box>
    <b>DiSEqC 1.0</b> veya <b>DiSEqC 1.1</b> seçiminize göre menüde 4 veya 16 adet uydu görüntülenir.
  </Box>,
]


export const ol_2 = [
  <Box>
    <b>Otomatik Kanal Arama</b> menüsünden bir uydu seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Gerekli öğeleri <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesi ile
    seçip <Circle className="inline-icon button"/> düğmesi ile onaylayın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Uydu Durumu: Açık</b> seçimini yapın.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Uydu Seçimi:</b> <Circle className="inline-icon button"/> düğmesine basın,
      arama yapmak istediğiniz uyduyu seçip <Circle className="inline-icon button"/> düğmesine basın.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Tarama Modu: Tam</b> veya <b>Ağ</b> seçimini yapın.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Tarama Türü:</b> Sadece şifresiz kanallar için <b>Yalnızca Ücretsiz Kanallar</b>,  sadece şifreli
       kanallar için <b>Yalnızca Şifrelenmiş Kanallar</b> veya tüm uydu kanalları için <b>Tümü</b> seçimini yapın.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Hafızaya Alma Türü:</b> Sadece Televizyon kanalları için <b>Yalnızca Dijital Kanallar</b>, sadece radyo
       kanalları için <b>Yalnızca Radyo Kanalları</b> veya her ikisi için <b>Tümü</b> seçimini yapın.</Box>
    </Box>
  </Box>,
  <Box>
    <b>LNB Ayarları</b>'nı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Gerekli öğeleri <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle seçin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>LNB Gücü:</b> <Circle className="inline-icon button"/> düğmesine basın, LNB gücününü <b>Açık</b> seçip 
      tekrar <Circle className="inline-icon button"/> düğmesine basın.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>LNB Frekansı:</b> <Circle className="inline-icon button"/> düğmesine basın ve uydu sisteminde kullanılan LNB frekansını seçip
      tekrar <Circle className="inline-icon button"/> düğmesine basın.</Box>
    </Box>
  </Box>,
  <Box>
    <b>DiSEqC Bağlantı Noktası:</b> <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>DiSEqC Bağlantı Noktası</b> menüsü görüntülenir.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <img src={diseqc_bağlantı_noktası_menüsü} alt="DiSEqC Bağlantı Noktası Menüsü" className="in-page-img" />
    </Box>
  </Box>,
  <Box>
    Uydu sisteminde ilgili DiSEqC pozisyonlarına karşılık gelen uyduyu seçmek için <b>DiSEqC A</b>, <b>DiSEqC B</b>, <b>DiSEqC C</b> veya <b>DiSEqC D</b> seçimini yapın.
  </Box>,
]

export const ol_3 = [
  <Box>
    Dört uydu içinde ayarları ayrı ayrı tamamladıktan sonra <b>Otomatik Kanal Arama</b> menüsünden <b>Sonraki</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Otomatik Arama</b> menüsü görüntülenir ve TV kanallarının aranmasına başlanır.</Box>
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