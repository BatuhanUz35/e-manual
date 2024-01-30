import { Box } from "@mui/material"
import connect from "../../../assets/images/icons/connect.png";
import mobil from "../../../assets/images/in-page-images/mobil.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const notlar = [
  <Box>
    Android TV ve mobil cihazınız Chromecast uygulamasını son sürümünü kullanıyor olmalıdır.
  </Box>,
  <Box>
    Chromecast işlevi, Android cihazda Android 2.3 ve üstü, Apple iOS cihazlarda iOS 7.0 ve üstü sürümlerde çalışır.
  </Box>,
  <Box>
    Mobil cihazlarda Google Chrome internet tarayıcısından yayın desteklenmez.
  </Box>
]


export const ol = [
  <Box>
    Televizyon ve mobil cihaz aynı ağa bağlı olmalıdır.
  </Box>,
  <Box>
    Mobil cihazdan Chromecast özellikli uygulamayı başlatın. 
  </Box>,
  <Box>
    Uygulama ekranından <img src={connect} alt="Mobil Cihazı Bağla" className="inline-icon xs"/> simgesine basın.
    <img src={mobil} alt="Mobil Cihazı Bağla" className="in-page-img"/>
  </Box>,
  <Box>
    Oynatmayı başlatmak için listeden TV'yi seçin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>İçerik TV ekranında oynatılmaya başlar.</Box>
    </Box>
  </Box>
]

