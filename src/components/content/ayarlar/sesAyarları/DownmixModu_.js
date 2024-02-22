import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png";
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    Ses menüsünden <b>Downmix Modu</b>'nu seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Stereo</b> veya <b>Surround Ses</b>'i seçip <Circle className="inline-icon button" /> düğmesiyle onaylayın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne dönmek
    için <img src={home} alt="Home" className="inline-icon" /> veya TV yayınına dönmek için
    {" "}<img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>
]