import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png";
import back from "../../../../assets/images/icons/back.png";

export const ol = [
  <Box>
    <b>Erişilebilirlik</b> menüsünden <b>Yüksek kontrastlı metin</b>'i seçip <b>Açık</b> seçimini yapmak için <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne
    dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]