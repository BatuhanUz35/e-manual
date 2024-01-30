import { Box } from "@mui/material"
import home from "../../../assets/images/icons/home.png"
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import { Circle } from "@mui/icons-material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const texts = [
  <Box>
    Multi Medya Player dosya tarayıcı, harici veri ortamında bulunan video, ses, resim ve metin verilerini gösterir.
  </Box>,
  <Box>
    Bir harici veri ortamı farklı dosya formatlarını içeriyorsa, dosya formatı seçimi ile çalmak / oynatmak / görüntülemek için ihtiyaç duymayacağınız verileri
    (Video dosyası, Ses dosyası, Resim dosyası veya Metin dosyası) devreden çıkarılabilir, böylece sadece görüntülemek istediğiniz formattaki dosyaları oynatabilirsiniz.
  </Box>
]

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Uygulamalar</b> sekmsinde <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle <b>Medya Merkezi</b> uygulamasını
    seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Medya Merkezi dosya formatı seçimi görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle oynatmak istediğiniz dosya formatını
    <b> Video, Fotoğraf, Müzik</b> seçimini yapıp <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>Seçtiğiniz dosya formatına ait dosya tarayıcısı menüsü görüntülenir.</Box>
    </Box>
    <Box>
        <h2>img gelcek</h2>
    </Box>
  </Box>
]

export const dosya_tarayıcısı = [
  <Box>
    Dosya tarayıcısı
  </Box>,
  <Box>
    Veri tipi
  </Box>,
  <Box>
    Veri ortamı klasörleri
  </Box>,
  <Box>
    Veri ortamı dosyaları
  </Box>,
  <Box>
    Seçenekler
  </Box>,
]