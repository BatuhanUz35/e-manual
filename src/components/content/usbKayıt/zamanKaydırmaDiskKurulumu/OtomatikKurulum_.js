import { Box } from "@mui/material";
import start from "../../../../assets/images/icons/start.png";
import back from "../../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../style.css"

export const ol1 = [
  <Box>
    Harici veri ortamını televizyonun USB girişine takın.
  </Box>
]

export const not = [
  <Box>
    Zaman Kaydırma disk kurulumu yapabilmek için <b>Zaman Kaydırma Modu, Açık</b> seçilmiş olmalıdır.
  </Box>
]

export const ol2 = [
  <Box>
    <img src={start} alt="Başla/Duraklat" className="inline-icon" /> düğmesine basın.
    <Box className="padding-1">
    <ArrowForwardIcon className="inline-icon xs"/> <b>Disk Kurulumu</b> menüsü görüntülenir.
    </Box>
  </Box>,
  <Box>
    <b>Otomatik</b> seçeneğini seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="padding-1">
    <ArrowForwardIcon className="inline-icon xs"/> Harici veri ortamı otomatik olarak yapılandırılıp <b>Disk Kurulumu Tamamlandı</b> mesajı görüntülenir.
    </Box>
  </Box>
]

export const notlar = [
  <Box>
    Bu işlem bir harici veri ortamı televizyona ilk defa takıldığında ya da harici veri ortamı televizyon
    tarafından biçimlendirildiğinde yapılması gerekmektedir.
  </Box>,
  <Box>
    Bu işlem için 4 GB'dan büyük bir harici disk kullanılması gerekmektedir. 
  </Box>,
  <Box>
    Otomatik kurulum 32 GB altı disklerde 4 GB, 32 GB üstü disklerde 16 GB zaman kaydırma alanı oluşturulur. 
  </Box>
]

export const ol3 = [
  <Box>Yayına dönmek için <img src={back} alt="Geri" className="inline-icon"/> düğmesine basın.</Box>
]