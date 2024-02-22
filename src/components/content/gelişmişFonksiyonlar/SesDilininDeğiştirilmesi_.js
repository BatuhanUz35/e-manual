import { Box } from "@mui/material";
import tv_icon from "../../../assets/images/icons/tv_icon.png";
import back from "../../../assets/images/icons/back.png";
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <b>Gelişmiş Seçenekler</b> menüsünden <b>Seslendirme Dili</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Ses dilini seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>İkinci Seslendirme Dili</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    İkincil ses dilini seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Yayına dönmek için <img src={back} alt="geri" className="inline-icon" /> veya
    {" "}<img src={tv_icon} alt="tv" className="inline-icon" /> düğmesine basın.
  </Box>
]