import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import ekran_koruyucu_menüsü from "../../../assets/images/in-page-images/ekran_koruyucu_menüsü.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Cihaz Terichleri</b> menüsünden <b>Ekran koruyucu</b>'yu seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Ekran koruyucu</b> menüsü görüntülenir.</Box>
    </Box>
    <img src={ekran_koruyucu_menüsü} alt="Ekran Koruyucu Menüsü" className="in-page-img" />
  </Box>,
  <Box>
    <b>Ekran koruyucu</b>‘yu seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Ekran koruyucu tipini <b>Ekranı kapat</b>, <b>Arka plan</b> veya <b>Renkler</b> seçimini yapıp <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Ekranı kapat</b>: Başlama zamanı sonunda televizyon ekranı kapatılır.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Arka plan</b>: Başlama zamanı sonunda televizyon ekranında arka plan resimleri görüntülenir.</Box>
    </Box>
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Renkler</b>: Başlama zamanı sonunda televizyon ekranında değişen renkler görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Başlama Zamanı</b>'nı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Ekran koruyucu devreye girme zamanını seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Ekran koruyucusu süresini beklemeden ekran koruyucuyu başlatmak için <b>Şimdi başlat</b>‘ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
]