import { Box } from "@mui/material";
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import options from "../../../../assets/images/icons/options.png"
import down from "../../../../assets/images/icons/down.png";
import right from "../../../../assets/images/icons/right.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import usb_kayıt_ayarları from "../../../../assets/images/in-page-images/usb_kayıt_ayarları.png"

export const ol = [
  <Box>
    <img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={options} alt="Options" className="inline-icon" /> düğmesine basıp <img src={down} alt="aşağı" className="inline-icon sm" /> düğmesiyle
    Kaydet'i seçin.
  </Box>,
  <Box>
    <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle <b>Cihaz Bilgileri</b>'ni seçip  <Circle className="inline-icon button" /> düğmesine
    basın.
  </Box>,
  <Box>
    Televizyona takılı olan harici veri ortamını seçip  <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>
      <b>Cihaz Bilgileri Ayarı</b> menüsü görüntülenir.
      <img src={usb_kayıt_ayarları} alt="Cihaz Bilgileri Ayarı Menüsü" />
      </Box>
    </Box>
  </Box>,
]

export const not = [
  <Box>
    İlave işlemler aşağıdaki bölümlerde açıklanmıştır.
  </Box>
]

export const links = [
  {
    title: "Veri Ortamının Biçimlendirilmesi",
    url: "/usb-kayıt/usb-kayıt-ayarları/veri-ortamının-biçimlendirilmesi",
    focus_item: 100401
  },
  {
    title: "Kayıt Zaman Kaydırma İçin Veri Ortamın Seçilmesi",
    url: "/usb-kayıt/usb-kayıt-ayarları/kayıt-zaman-kaydırma-için-veri-ortamın-seçilmesi",
    focus_item: 100402
  },
  {
    title: "Veri Ortamı Testi",
    url: "/usb-kayıt/usb-kayıt-ayarları/veri-ortamı-testi",
    focus_item: 100403
  },
]