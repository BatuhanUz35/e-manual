import { Box } from "@mui/material";
import "../../style.css"
import channel_direction from "../../../../assets/images/icons/channel_direction.png"
import down from "../../../../assets/images/icons/down.png"
import right from "../../../../assets/images/icons/right.png"
import left from "../../../../assets/images/icons/left.png"
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Elektronik program rehberini açmak için <img src={channel_direction} alt="Kanal Yön tuşu" className="inline-icon" /> düğmesine dik eksende basın.
  </Box>,
  <Box>
    Kayıt zamanlayıcısı eklemek istediğiniz kanalı <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle seçin.
  </Box>,
  <Box>
    Kayıt zamanlayıcısı eklemek istediğiniz programı <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle seçip
    {" "} <Circle className="inline-icon button" /> düğmesiyle onaylayın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Program Listesi - Ekle</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Program Türü</b> öğesinden <b>Kaydet</b> seçimini yapın.
  </Box>,
  <Box>
    <b>Tekrarlanma Türü</b> öğesinden (<b>Bir Defa, Hafta</b> veya <b>Her Gün</b>) seçimini yapın.
  </Box>
]

export const not = [
  <Box>
    Bir programı elektronik program rehberinde belirtilen yayın saatinden farklı bir saat aralığına, kayıt zamanlayıcısı eklemek için <b>Etkinlik Modeli</b> öğesinden 
    <b> Zamanlama Programı</b> seçimini yapın.
  </Box>
]

export const ol2 = [
  <Box>
    Ayarları kaydetmek için <Circle className="inline-icon button-green button"/> (yeşil) düğmesine basın.
  </Box>,
  <Box>
    Yayına dönmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
  </Box>
]

export const notlar = [
  <Box>
    Zamanlayıcı kaydı başlamadan önce bir uyarı iletisi görüntülenir ve 15 saniye geri sayarak kanala geçmek için fırsat verir. 15 saniye sonunda kaydedilecek olan kanal 
    otomatik olarak açılır.
  </Box>,
  <Box>
    Zamanlayıcı kaydı, kayıttan yürütme sırasında başlarsa, kayıttan yürütme durdurulur. Uyarı ekranında Evet seçeneği seçilmediği takdirde geri sayım tamamlandığında kayıt
    otomatik olarak başlar.
  </Box>,
  <Box>
    <b>Sadece UPC müşterileri için Not:</b> Bir program kaydedilirken, muhtemel Program Kılavuzu hataları dolayısıyla önceki veya sonraki programın bir kısmının kayda dahil 
    edilmesi söz konusu olabilir. Böyle bir durumda, bu programlardan biri veya daha fazlasında aile koruma derecelendirmesi varsa, tüm kayıt için en yüksek seviyedeki aile koruma
    derecesinin geçerli olacağını göz önünde bulundurun.
  </Box>
]

