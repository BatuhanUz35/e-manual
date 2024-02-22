import { Box } from "@mui/material";
import anten_tipi_menüsü_2 from "../../../assets/images/in-page-images/anten_tipi_menüsü_2.png"
import tv_icon from "../../../assets/images/icons/tv_icon.png"
import options from "../../../assets/images/icons/options.png"
import down from "../../../assets/images/icons/down.png"
import one from "../../../assets/images/icons/one.png"
import zero from "../../../assets/images/icons/zero.png"
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
      <img src={anten_tipi_menüsü_2} alt="Anten Tipi Menüsü" className="in-page-img" />
    </Box>
  </Box>,
  <Box>
    Anten sisteminizdeki tek kablo yönlendirici çoklu anahtar (multiswitch) tipine göre <b>Single Cable I</b> veya Single <b>Cable II</b>‘yi 
    seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Single Cable I:</b> Tek kanal yönlendirici kullanarak, en fazla sekiz farklı cihazda aynı kablo ile yayın alınır.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Single Cable II:</b> Tek kanal yönlendirici kullanarak, en fazla otuziki farklı cihazda aynı kablo ile yayın alınır.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Single Cable I</b> veya <b>Single Cable II</b> seçiminize göre <b>Tarayıcı</b> menüsünde 8 veya 32 adet kullanıcı bandı görüntülenir.
  </Box>,
  ]


export const ol_2 = [
  <Box>
    Gerekli öğeleri <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesi ile
    seçip <Circle className="inline-icon button"/> düğmesi ile onaylayın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Tarayıcı: Kullanıcı bandı 1</b> ile <b>Kullanıcı bandı 8</b> arasında seçim yapın.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Bant Frekansı:</b> <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
      bant frekansı seçimini yapıp <Circle className="inline-icon button"/> düğmesine basın.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Kullanıcı Tanımlı:</b> Bant frekansını kendiniz belirleyin. <b>Bant Frekansı</b>'ndan <b>Kullanıcı Tanımlı</b>'yı
      seçin. <b>Kullanıcı Tanımlı</b> seçeneği <b>Single Cable I</b> menüsünde görüntülenir. Kullanıcı tanımlı frekansını <img src={one} alt="1" className="inline-icon xs"/>...
      <img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle girin.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Sonraki</b>'nı seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Otomatik Kanal Arama</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Menüde görüntülen ilk uyduyu seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    <b>Uydu Durumu</b>'nu <b>Açık</b> seçin.
  </Box>,
  <Box>
    <b>Uydu Seçimi'ni</b> <Circle className="inline-icon button"/> düğmesi ile seçip arama yapmak istediğiniz uyduyu seçin..
  </Box>,
  <Box>
    <b>Tarama Modu</b>'nu seçip <b>Tümü</b> veya <b>Ağ</b> seçimini yapın.
  </Box>,
  <Box>
    <b>Tarama Türü</b>'nü seçin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Sadece şifresiz kanallar için <b>Yalnızca Ücretsiz Kanallar</b></Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Sadece şifreli kanallar için <b>Yalnızca Şifrelenmiş Kanallar</b></Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Tüm uydu kanalları için <b>Tümü</b> seçimini yapın.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Hafızaya Alma Türü</b>'nü seçin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Sadece Televizyon kanalları için <b>Yalnızca Dijital Kanallar</b></Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Sadece radyo kanalları için <b>Yalnızca Radyo Kanalları</b></Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Her ikisini aratmak için <b>Tümü</b> seçimini yapın.</Box>
    </Box>
  </Box>,
  <Box>
    <b>LNB Ayarları</b>'nı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
   <b>Konum</b>'u seçip <Circle className="inline-icon button"/> düğmesine basın.
   <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Arama yapmak istediğiniz uyduya karşılık gelen konumu seçip <Circle className="inline-icon button"/> düğmesine basın.</Box>
    </Box>
 </Box>,
 <Box>
  <b>Otomatik Kanal Arama</b> menüsüne dönmek için <img src={back} alt="Geri" className="inline-icon" /> düğmesine iki kez basın.
 </Box>,
]

export const notlar = [
  <Box>
    SCR yönlendiricinin desteklediği / önerdiği kurulum ekipmanlarını kullanınız.
  </Box>,
  <Box>
    Kurulum sırasında belirtilen kullanıcı bandı numarasının ve frekansının değiştirilmesi durumunda sisteme bağlı diğer kullanıcıları / alıcıları etkileyebilir.
  </Box>,
  <Box>
    Kullanıcı bandı ve Kullanıcı bandı frekansı kullanılan SCR yönlendirici üzerinde yer almaktadır ve her kullanıcı / alıcı belli bir kullanıcı bandı ve kullanıcı bandı frekansı seçilmelidir.
  </Box>,
  <Box>
    SCR uydu sistemlerinde birden fazla kullanıcı / alıcının aynı anda otomatik arama yapması sorunlara sebep olabilir.
  </Box>
]