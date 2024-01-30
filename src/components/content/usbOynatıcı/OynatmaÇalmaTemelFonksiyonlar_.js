import { Box } from "@mui/material"
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import down from "../../../assets/images/icons/down.png"
import start from "../../../assets/images/icons/start.png"
import sub from "../../../assets/images/icons/sub.png"
import { Circle } from "@mui/icons-material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Dosya tarayıcısından oynatmak istenen dosyayı <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" />/<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />
    /<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle seçip <Circle className="inline-icon button" />
  </Box>,
  <Box>
    Oynatmayı duraklatmak için <img src={start} alt="Başlat" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    Oynatmaya devam etmek için <img src={start} alt="Başlat" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    Oynatmayı sona erdirmek için <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>Dosya tarayıcı görünür.</Box>
    </Box>
  </Box>,
]

export const notlar = [
  <Box>
    USB oynatıcı desteklenen bazı dosya formatları, desteklenen dosya uzantısına sahip olmasına rağmen, bu dosyaların oluşturma (sıkıştırma) biçimlerini bağlı olarak oluşabilecek problemlerden dolayı çalışmayabilir.
  </Box>,
  <Box>
    Oynatılan video dosyaları içinde birden fazla ses kaynağı (audio stream) varsa dosya tam ekran oynatılırken <img src={sub} alt="Sub" className="inline-icon"/> düğmesiyle ile ses kaynakları arasında geçiş yapılabilir.
  </Box>,
  <Box>
    Film dosyasından izleyeceğiniz filmler sadece .srt, .sub, .ass, .ssa, .smi formatındaki altyazıları desteklemektedir. Altyazı ile film dosyasının isimleri aynı olmalıdır. Aksi taktirde alt yazı görüntülenmez.
  </Box>
]
