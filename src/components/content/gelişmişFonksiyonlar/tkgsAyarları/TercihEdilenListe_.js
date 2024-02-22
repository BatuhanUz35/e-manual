import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import back from "../../../../assets/images/icons/back.png";
import down from "../../../../assets/images/icons/down.png";

export const ol = [
  <Box>
    <b>TKGS Ayarı</b> menüsünden <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <b>Tercih Edilen Liste</b>'yi seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    <b> HD</b> veya <b>SD</b> seçimini yapıp <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> veya
    yayına dönmek için <img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>
]