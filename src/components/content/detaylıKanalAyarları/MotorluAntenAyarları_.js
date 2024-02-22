import { Box } from "@mui/material";
import tv_icon from "../../../assets/images/icons/tv_icon.png"
import options from "../../../assets/images/icons/options.png"
import home from "../../../assets/images/icons/home.png"
import back from "../../../assets/images/icons/back.png"
import one from "../../../assets/images/icons/one.png"
import zero from "../../../assets/images/icons/zero.png"
import down from "../../../assets/images/icons/down.png"
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import anten_tipi_menüsü_3 from "../../../assets/images/in-page-images/anten_tipi_menüsü_3.png"
import motor_ayarları_menüsü from "../../../assets/images/in-page-images/motor_ayarları_menüsü.png"
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
    Daha önceden yapılmış kanal aramasındaki kanallar silinip yeniden kanal araması yapılacaktır devam etmek için <b>Sonraki</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
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
      <img src={anten_tipi_menüsü_3} alt="Anten Tipi Menüsü" className="in-page-img" />
    </Box>
  </Box>,
  <Box>
    <b>DiSEqC 1.2</b>'yi seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Boylamım</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın. Ardından bulunduğunuz
    boylamı <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle girin.
  </Box>,
  <Box>
    <b>Enlemim</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın. Ardından bulunduğunuz
    enlemi <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle girin.
  </Box>,
  <Box>
    <b>Sonraki</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Arama yapmak istediğiniz uyduyu seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>LNB Ayarları</b>'nı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    <b>Motor Ayarları</b>'nı seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Motor Ayarları</b> menüsü görüntülenir.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <img src={motor_ayarları_menüsü} alt="Motor Ayarları Menüsü" className="in-page-img" />
    </Box>
  </Box>,
  <Box>
    <b>Hareket Kontrolü</b>'nü seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Ayar seçeneklerini <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle seçin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Hareket Kontrolü:</b> <Circle className="inline-icon button"/> düğmesine basın <b>Kesintisiz</b>, <b>Adım</b>, <b>Zaman Aşımı</b> veya <b>USALS</b> seçimini yapın.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Adım</b> Anteni batı veya doğu yönünde belirlenen adım boyutu kadar hareket ettirir.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Kesintisiz</b> Anteni batı veya doğu yönünde sürekli hareket ettirir.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Adım Boyutu:</b> <Circle className="inline-icon button"/> düğmesine basın, antenin kaç adım dönmesi 
      gerektiğini <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle seçin.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Zaman Aşımı:</b> <Circle className="inline-icon button"/>  düğmesine basın antenin dönmesi gerektiğini zaman aşımı 
      süresini <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle seçin.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>USALS: Hareket Kontrolü</b> menüsünden <b>USALS</b> seçimini yapın. <b>Zaman Aşımı</b>'nı seçip <Circle className="inline-icon button"/> düğmesine
      basın. x.x'lik açıya git seçeneğini seçip <Circle className="inline-icon button"/> düğmesine basın.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Doğu Yönünde Hareket Ettir:</b> Anteni seçilen uydu için ayarlar. Anteni <b>Doğu</b> yönünde hareket ettirmek 
      için <Circle className="inline-icon button"/> düğmesine basın.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Batı Yönünde Hareket Ettir:</b> Anteni seçilen uydu için ayarlar. Anteni <b>Batı</b> yönünde hareket ettirmek 
      için <Circle className="inline-icon button"/> düğmesine basın.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Hareketi Durdur:</b>  Anteni durdurmak için <Circle className="inline-icon button"/> düğmesine basın.</Box>
    </Box>
  </Box>,
]

export const ol_2 = [
  <Box>
    <b>Motor Ayarları</b> menüsüne dönmek için <img src={back} alt="Geri" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    Ayar seçeneklerini <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle seçin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Sınırları Devre Dışı Bırak:</b> Antenin en fazla dönebileceği limit sınırlarını kaldırır.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Doğu Yönünü Sınırla:</b> Antenin doğu yönüne en fazla dönebileceği limit pozisyonu ayarlar ve anteni belirlenen limitler içerisinde hareket etmesini sağlar.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Batı Yönünü Sınırla:</b> Antenin batı yönüne en fazla dönebileceği limit pozisyonu ayarlar ve anteni belirlenen limitler içerisinde hareket etmesini sağlar.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Otomatik Kanal Arama</b> menüsüne dönmek için <img src={back} alt="Geri" className="inline-icon" /> düğmesine iki kez basın.
  </Box>,
  <Box>
    <b>Tarama Modu</b>'nu seçip <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle <b>Tam</b> veya <b>Ağ</b> seçimini yapın.
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
      <ArrowForwardIcon className="inline-icon xs" /><Box>Sadece radyo kanalları için <b>Yanlızca Radyo Kanalları</b>.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Her ikisini aratmak için <b>Tümü</b> seçimini yapın.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Otomatik Kanal Arama</b> menüsüne dönmek için <img src={back} alt="Geri" className="inline-icon" /> düğmesine basın.
  </Box>, 
]

export const ol_3 = [
  <Box>
    <b>Sonraki</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
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