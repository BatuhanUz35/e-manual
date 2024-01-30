import { Box } from "@mui/material";
import down from "../../../../assets/images/icons/down.png";
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <b>Cihaz Bilgileri Ayarı</b> menüsünde <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
    <b> Zaman Kaydırma Ayarla</b> ve/veya <b>PVR'yi ayarla</b>'yı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    <b>Cihaz Bilgileri menüsünde</b> yaptığınız seçime göre <b>TSHIFT</b>, <b>PVR</b> veya <b>PVR/TSHIFT</b> ibaresi görüntülenir.
  </Box>
]

export const notlar = [
  <Box>
    Televizyona iki farklı harici veri ortamı bağlayıp birisini <b>PVR</b> kaydı diğerini <b>TSHIFT</b> kaydı olarak seçebilirsiniz.
  </Box>,
  <Box>
    Kayıt - Zaman kaydırma için herhangi bir harici veri ortamı atanmamışsa işlevler çalışmaz.
  </Box>
]