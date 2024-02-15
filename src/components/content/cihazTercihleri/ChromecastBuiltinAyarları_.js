import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import down from "../../../assets/images/icons/down.png";
import chromecast_menu from "../../../assets/images/in-page-images/chromecast_menu.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Cihaz Terichleri</b> menüsünden <b>Chromecast built-in</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Yerleşik Chromecast</b> menüsü görüntülenir.</Box>
    </Box>
    <img src={chromecast_menu} alt="Yerleşik Chromecast Menüsü" className="in-page-img" />
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    yayınlanan medyanın diğer cihazların kontrol etmesine izin verebilir, açık kaynak lisansını, sürüm numarası veya seri numarasını seçip görüntüleyin.
  </Box>,
]