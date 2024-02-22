import { Box } from "@mui/material";
import tv_icon from "../../../assets/images/icons/tv_icon.png";
import back from "../../../assets/images/icons/back.png";
import sound_language from "../../../assets/images/icons/sound_language.png";
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <b>Gelişmiş Seçenekler</b> menüsünden <b>Ses Dili</b>'ni seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Desteklenen ses dilini seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>
]

export const not = [
  <Box>
    Televizyon modunda kumanda üzerinde bulunan <img src={sound_language} alt="Ses dili" className="inline-icon" />
    {" "} düğmesine basarak <b>Ses Dili</b>'ni değiştirebilirsiniz.
  </Box>,
  <Box>
    Yayına dönmek için <img src={back} alt="Geri" className="inline-icon" /> veya
    {" "}<img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>
]