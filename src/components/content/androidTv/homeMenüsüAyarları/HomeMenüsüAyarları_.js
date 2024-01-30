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
    <img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle <b>Cihaz Tercihleri</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle <b>Ana Ekran</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>
        <b>Ana Ekran</b> menüsü görüntülenir.
      </Box>  
    </Box>
    <h2>img gelcek</h2>
  </Box>,
]

export const not = [
  <Box>
    İlave işlemler aşağıdaki bölümlerde açıklanmıştır.
  </Box>
]

export const links = [
  {
    title: "Home Menüsünde Kanalları Özelleştirme",
    url: "/android-tv/home-menüsü-ayarları/home-menüsünde-kanalları-özelleştirme",
    focus_item: 120501
  },
  {
    title: "Home Menüsün Kanallarında Video / Ses Ön İzlemesi",
    url: "/android-tv/home-menüsü-ayarları/home-menüsü-kanallarında-video-ses-ön-izlemesi",
    focus_item: 120502
  },
  {
    title: "Home Menü Uygulamalar Sekmesindeki Uygulamaların Sıralanması",
    url: "/android-tv/home-menüsü-ayarları/home-menü-uygulamalar-sekmesindeki-uygulamaların-sıralanması",
    focus_item: 120503
  },
  {
    title: "Home Menü Oyunlar Sekmesindeki Uygulamaların Sıralanması",
    url: "/android-tv/home-menüsü-ayarları/home-menü-oyunlar-sekmesindeki-uygulamaların-sıralanması",
    focus_item: 120504
  },
  {
    title: "Home Menü Açık Kaynak Lisansları",
    url: "/android-tv/home-menüsü-ayarları/home-menü-açık-kaynak-lisansları",
    focus_item: 120505
  },
]