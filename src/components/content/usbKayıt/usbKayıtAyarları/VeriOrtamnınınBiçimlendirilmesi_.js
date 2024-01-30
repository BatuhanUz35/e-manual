import { Box } from "@mui/material";
import down from "../../../../assets/images/icons/down.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const important = [
  <Box>
    Harici veri ortamının biçimlendirilmesi veri ortamı içindeki tüm verilerin kalıcı olarak silinmesine yol açar.
  </Box>
]

export const ol = [
  <Box>
    <b>Cihaz Bilgileri Ayarı</b> menüsünde <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
    <b>Biçim</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box>
     <ArrowForwardIcon className="inline-icon xs"/>
     Uyarı mesajı görüntülenir
    </Box>
  </Box>,
  <Box>
    Biçimlendirmeyi onaylamak için <b>Evet</b>'i veya biçimlendirmeyi iptal etmek için <b>Hayır</b>'ı seçip <Circle className="inline-icon button"/> 
    düğmesine basın.
    <Box>
     <ArrowForwardIcon className="inline-icon xs"/>
     Biçimlendirme tamamlanınca <b>Cihaz Bilgileri</b> menüsü görüntülenir.
    </Box>
  </Box>
]