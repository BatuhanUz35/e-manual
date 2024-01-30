import { Box } from "@mui/material";
import options from "../../../../assets/images/icons/options.png";
import down from "../../../../assets/images/icons/down.png";
import back from "../../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Oynatma esnasında <img src={options} alt="Seçenekler" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
   <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle <b>Görüntüyü Kapat</b>‘ı seçip <Circle className="inline-icon button"/> düğmesine basın.
   <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>Güç menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle <b>Görüntüyü Kapat</b>‘ı seçip <Circle className="inline-icon button"/> düğmesine basın.
   <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>TV Ekranı kapanır ses dosyaları oynatılmaya devam eder.</Box>
    </Box>
  </Box>,
  <Box>
    Görüntüyü tekrar açmak için <img src={back} alt="Geri" className="inline-icon"/> düğmesine basın.
  </Box>
]