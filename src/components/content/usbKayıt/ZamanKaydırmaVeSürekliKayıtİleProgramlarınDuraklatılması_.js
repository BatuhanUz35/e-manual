import { Box } from "@mui/material";
import start from "../../../assets/images/icons/start.png";
import fast_backward from "../../../assets/images/icons/fast_backward.png";
import fast_forward from "../../../assets/images/icons/fast_forward.png";
import stop from "../../../assets/images/icons/stop.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../style.css"

export const not = [
  <Box>
    Kesintisiz bir kalıcı zaman kaydırma için harici USB disk sürücüsü kullanın.
  </Box>
]

export const ol1 = [
  <Box>
    Yayın sırasında <img src={start} alt="Başla/Duraklat" className="inline-icon" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Televizyon görüntüsü durdurulur ve gecikme süresi görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    Yayına kaldığı yerden devam etmek için <img src={start} alt="Başla/Duraklat" className="inline-icon" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Siz yayını izlerken, sistem de bunu kaydetmeye devam eder.</Box>
    </Box>
  </Box>,
]

export const notlar = [
  <Box>
    Aşağıdaki işlevler zaman kaydırma modunda kullanılabilir.
  </Box>,
  <Box>
    Hızlı geri sarma, istenilen hız için <img src={fast_backward} alt="Geri sar" className="inline-icon" /> düğmesine bir kaç kez basın.
  </Box>,
  <Box>
    Hızlı ileri sarma, istenilen hız için <img src={fast_forward} alt="İleri sar" className="inline-icon" /> düğmesine bir kaç kez basın.
  </Box>,
  <Box>
    Duraklatmak için <img src={start} alt="Başla/Duraklat" className="inline-icon" /> düğmesine basın.
  </Box>
]

export const ol2 = [
  <Box>Zaman kaydırmayı durdurmak için <img src={stop} alt="Durdur" className="inline-icon" /> düğmesine basın.</Box>
]