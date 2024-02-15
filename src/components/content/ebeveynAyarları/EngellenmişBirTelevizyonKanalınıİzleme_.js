import { Box } from "@mui/material";
import one from "../../../assets/images/icons/one.png";
import zero from "../../../assets/images/icons/zero.png";
import direction from "../../../assets/images/icons/direction.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Engellenmiş kanalı <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/>
    veya <img src={direction} alt="Yön tuşu" className="inline-icon"/> düğmeleriyle seçin.
  </Box>,
  <Box>
    Gelen şifre ekranına <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle
    PIN kodunu girin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Engellenmiş kanal görüntülenir.</Box>
    </Box>
  </Box>,
]