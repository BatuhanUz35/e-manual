import { Box } from "@mui/material";
import options from "../../../../assets/images/icons/options.png";
import down from "../../../../assets/images/icons/down.png";
import one from "../../../../assets/images/icons/one.png";
import zero from "../../../../assets/images/icons/zero.png";
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    Oynatma sırasında <img src={options} alt="Seçenekler" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
   <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle <b>TV BLE Remote</b>‘yı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle gidilmesi istenen süreyi girip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>
]