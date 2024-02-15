import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../assets/images/icons/tv_icon.png"
import options from "../../../assets/images/icons/options.png"
import entries from "../../../assets/images/icons/entries.png"
import down from "../../../assets/images/icons/down.png"
import zero from "../../../assets/images/icons/zero.png"
import one from "../../../assets/images/icons/one.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export const ol = [
  <Box>
    Tv moduna geçmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
     <img src={options} alt="Seçenekler" className="inline-icon"/> düğmesine basıp <b>Kaynak</b> seçip <Circle className="inline-icon button"/> düğmesine 
     basın veya <img src={entries} alt="Girişler" className="inline-icon"/> düğmesine basıp <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle
     sinyal kaynağını seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Gelen şifre ekranına <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle PIN kodunu girin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Engellenmiş kaynak görüntülenir.</Box>
    </Box>
  </Box>
]