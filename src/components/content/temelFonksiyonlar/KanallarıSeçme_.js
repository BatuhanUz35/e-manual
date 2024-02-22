import { Box } from "@mui/material";
import one from "../../../assets/images/icons/one.png"
import zero from "../../../assets/images/icons/zero.png"
import channel_direction from "../../../assets/images/icons/channel_direction.png"
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    Kanalları doğrudan seçmek için <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" />
    {" "} düğmelerine basın.
  </Box>,
  <Box>
    Kanalları adım adım seçmek için <img src={channel_direction} alt="Kanal Yön Tuşu" className="inline-icon" /> düğmelerine basın.
  </Box>,
  <Box>
    TV modunda <Circle className="inline-icon button" /> düğmesine basın. <b>Kanal Listesi - Tüm Kanallar</b> menüsünden 
    kanal seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>
]