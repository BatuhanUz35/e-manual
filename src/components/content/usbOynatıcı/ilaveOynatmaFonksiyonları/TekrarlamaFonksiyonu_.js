import { Box } from "@mui/material";
import options from "../../../../assets/images/icons/options.png";
import down from "../../../../assets/images/icons/down.png";
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    Oynatma sırasında <img src={options} alt="Seçenekler" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
   <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle <b>Tümünü Tekrarla</b>‘yı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
   <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmeleriyle <b>Yok, Birini Tekrarla</b> veya <b>Tümünü Tekrarla</b>'yı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>
]