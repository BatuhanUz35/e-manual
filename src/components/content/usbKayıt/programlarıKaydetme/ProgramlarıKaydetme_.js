import { Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../style.css"
import one from "../../../../assets/images/icons/one.png"
import zero from "../../../../assets/images/icons/zero.png"
import channel_direction from "../../../../assets/images/icons/channel_direction.png"
import record from "../../../../assets/images/icons/record.png"

export const notlar = [
  <Box>
    Kayıt işlemleri, yalnızca FAT ve FAT32 formatlı sabit disk ve USB belleğe yapılabilir.
  </Box>,
  <Box>
    Cihaz elektrostatik yük boşaltımı nedeniyle veri oynatma / paylaşma / kayıt modundan kurtarılamazsa, kullanıcının müdahale etmesi gerekir.
  </Box>,
  <Box>
    Harici veri ortamı kayıt esnasında çıkarılması durumunda kayıt otomatik olarak iptal edilir ve harici veri ortamına kaydedilemez.
  </Box>
]

export const ol = [
  <Box>
    Kaydı başlatmak için <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="o" className="inline-icon xs"/> veya
    {" "}<img src={channel_direction} alt="Kanal Yön tuşu" className="inline-icon"/> düğmesiyle kanalı seçin.
  </Box>,
  <Box>
    Kumanda üzerinde bulunan <img src={record} alt="Kayıt tuşu" className="inline-icon"/> kayıt düğmesine basın.
    <Box className="flex-container padding-1">
    <ArrowForwardIcon className="inline-icon xs"/><Box>Kayıt bilgisi görüntülenir: Kayıt sembolü, kanal adı, program ve kayıt süresi.</Box>
    </Box>
    <Box className="flex-container padding-1">
    <ArrowForwardIcon className="inline-icon xs"/><Box>Bu bilgiler kısa süre sonra kaybolur, ekranın sol alt köşesinde <b>REC</b> sembolü ve kayıt süresi görüntülenir.</Box>
    </Box>
  </Box>
]

export const links = [
  {
    title: "Kayıt Sırasında Televizyonun Bekleme Konumuna Alınması",
    url: "/usb-kayıt/programları-kaydetme/kayıt-sırasında-televizyonun-bekleme-konumuna-alınması",
    focus_item: 100801
  },
  {
    title: "Kanal Listesinden Bir Programı Kaydetme",
    url: "/usb-kayıt/programları-kaydetme/kanal-listesinden-bir-programı-kaydetme",
    focus_item: 100802
  },
]

