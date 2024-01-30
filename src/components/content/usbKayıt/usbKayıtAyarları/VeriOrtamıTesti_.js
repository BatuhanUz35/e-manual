import { Box } from "@mui/material";
import down from "../../../../assets/images/icons/down.png";
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <b>Cihaz Bilgileri Ayarı</b> menüsünde <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
    <b> Hız Testi</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Diskin boyutuna bağlı olarak 10 ila 60 saniye sonra veri ortamının test sonucu ekranda görüntülenir.
  </Box>,
  <Box>
    Hız Testi menüsünde çıkmak için <b>Çık</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>
]