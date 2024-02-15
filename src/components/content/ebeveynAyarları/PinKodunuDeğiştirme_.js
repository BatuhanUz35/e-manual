import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import zero from "../../../assets/images/icons/zero.png"
import one from "../../../assets/images/icons/one.png"
import back from "../../../assets/images/icons/back.png"
import home from "../../../assets/images/icons/home.png"


export const ol = [
  <Box>
    <b>Ebeveyn Denetimleri</b> menüsünden <b>PIN'i değiştirin</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Mevcut PIN kodunu <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle
    dört haneli olarak girin.
  </Box>,
  <Box>
    Yeni PIN kodunu <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle
    dört haneli olarak girin.
  </Box>,
  <Box>
    Onaylamak için yeni PIN kodunu tekrar <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/> düğmeleriyle
    dört haneli olarak girin.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]