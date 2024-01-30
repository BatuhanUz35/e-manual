import { Box } from "@mui/material"
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png"
import down from "../../../../assets/images/icons/down.png"
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <b>Ana Ekran</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
    <b> Video ön izlemeyi etkinleştir</b> ve/veya <b>Ses ön izlemeyi etkinleştir</b>'i seçin.
  </Box>,
  <Box>
    <Circle className="inline-icon button"/> düğmesiyle <b>Açık</b> veya <b>Kapalı</b> konumu seçin.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]