import { Box } from "@mui/material";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import options from "../../../../assets/images/icons/options.png";
import back from "../../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const ol = [
  <Box>
    <img src={tv_icon} alt="TV" className="inline-icon" /> ardından <img src={options} alt="Seçenekler" className="inline-icon" />
    düğmesine basın.
  </Box>,
  <Box>
    <b>Güç</b>'ü seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Güç</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Sinyal Olmadığında Otomatik Kapanma</b>'yı seçip <Circle className="inline-icon button" /> düğmesiyle onaylayın.
  </Box>,
  <Box>
    Kapanma zamanını seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Yayına dönmek için <img src={back} alt="Geri" className="inline-icon" /> veya
    {" "}<img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>
]