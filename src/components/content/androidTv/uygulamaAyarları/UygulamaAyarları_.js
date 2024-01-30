import { Box } from "@mui/material"
import home from "../../../../assets/images/icons/home.png"
import down from "../../../../assets/images/icons/down.png";
import left from "../../../../assets/images/icons/left.png"
import right from "../../../../assets/images/icons/right.png"
import settings from "../../../../assets/images/icons/settings.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
     <img src={left} alt="Sol" className="inline-icon sm"/>/<img src={right} alt="Sağ" className="inline-icon sm"/>
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle
    {" "}<img src={settings} alt="Ayarlar" className="inline-icon"/> Ayarlar'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle <b>Uygulamalar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>
        Uygulamalar menüsü görüntülenir.
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
    title: "Uygulamaların Kaldırılması",
    url:  "/android-tv/uygulama-ayarları/uygulamaların-kaldırılması",
    focus_item: 121101
  },
  {
    title: "Uygulamaların Zorla Durdurulması",
    url:  "/android-tv/uygulama-ayarları/uygulamaların-zorla-durdurulması",
    focus_item: 121102
  },
  {
    title: "Uygulama Verilerini Temzileme",
    url:  "/android-tv/uygulama-ayarları/uygulama-verilerini-temizleme",
    focus_item: 121103
  },
  {
    title: "Uygulama Önbelleğinin Temizlenmesi",
    url:  "/android-tv/uygulama-ayarları/uygulama-önbelleğinin-temizlenmesi",
    focus_item: 121104
  },
  {
    title: "Uygulama Varsayılan Ayarları",
    url:  "/android-tv/uygulama-ayarları/uygulama-varsayılan-ayarları",
    focus_item: 121105
  },
  {
    title: "Uygulama Bildirimleri",
    url:  "/android-tv/uygulama-ayarları/uygulama-bildirimleri",
    focus_item: 121106
  },
  {
    title: "Uygulama İzinleri",
    url:  "/android-tv/uygulama-ayarları/uygulama-izinleri",
    focus_item: 121107
  },
  {
    title: "Özel Uygulama Erişimi",
    url:  "/android-tv/uygulama-ayarları/özel-uygulama-erişimi",
    focus_item: 121108
  },
  {
    title: "Uygulama Güvenlik ve Kısıtlamaları",
    url:  "/android-tv/uygulama-ayarları/uygulama-güvenlik-ve-kısıtlamaları",
    focus_item: 121109
  },
]