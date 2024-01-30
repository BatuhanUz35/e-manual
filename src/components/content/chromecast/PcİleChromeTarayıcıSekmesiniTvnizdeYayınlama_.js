import { Box } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const notlar = [
  <Box>
    PC ile Chromecast özelliğini sorunsuz kullanmak için PC'de Chrome tarayıcısının son sürümünü kullanıyor olmalıdır.
  </Box>,
  <Box>
    Bilgisayarınız, televizyonunuz ile aynı Wi-Fi ev ağına bağlı olmalıdır.
  </Box>,
]


export const ol = [
  <Box>
    Bilgisayarınızdan Chrome tarayıcısını açın.
  </Box>,
  <Box>
    Tarayıcının sağ üst köşesinde bulunan <MoreVertIcon className="inline-icon" fontSize="small"/> öğesine tıklayın.
  </Box>,
  <Box>
    <b>Yayınla</b>'ya tıklayın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Yayınla</b> sekmesi ardından aynı ağda olan Chromecast destekleyen cihazlar görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    TV'nizi seçip chrome tarayıcı sekmesini TV'nizde görüntüleyin.
  </Box>,
  <Box>
    İşiniz bittiğinde tarayıcının adres çubuğunun sağında bulanan <MoreVertIcon className="inline-icon" fontSize="small"/> simgesine seçerek <b>Yayını Durdur</b>‘u seçin.
  </Box>
]

