import { Box } from "@mui/material";
import start from "../../../../assets/images/icons/start.png";
import down from "../../../../assets/images/icons/down.png";
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
    <Box className="flex-container padding-1">
    <ArrowForwardIcon className="inline-icon xs start"/><Box><b>Disk Kurulumu</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle <b>Manuel</b> öğesini seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
  </Box>,
  <Box>
    Veri ortamını biçimlendirmek için <b>Biçimlendir</b>'i veya biçimlendirmeden devam etmek için <b>Atla</b>'y seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>
]

export const önemli = [
  <Box>
    Daha iyi bir performans için veri ortamını biçimlendirmeniz önerilir.
  </Box>,
  <Box>
    Bu işlem harici veri ortamındaki tüm veriyi silecektir.
  </Box>
]

export const ol3 = [
  <Box>
    Biçimlendirme uyarı mesajı görüntülenir. <b>Biçimlendir</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
    <ArrowForwardIcon className="inline-icon xs start"/><Box>Biçimlendirme ilerlemesi ekranda görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Biçimlendirme tamamlandığında veri ortamının boyutuna göre zaman kaydırma için ayırmak istediğiniz boyutu <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> 
    {" "} düğmesiyle seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
    <ArrowForwardIcon className="inline-icon xs start"/><Box>Veri ortamı manuel olarak yapılandırılıp <b>Disk Kurulumu Tamamlandı</b> mesajı görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Yayına dönmek için <Circle className="inline-icon button"/> düğmesine basın.
  </Box>
]