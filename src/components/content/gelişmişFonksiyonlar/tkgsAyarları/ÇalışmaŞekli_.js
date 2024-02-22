import { Box } from "@mui/material";
import down from "../../../../assets/images/icons/down.png";
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    <b>TKGS Ayarı</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="aşağı" className="inline-icon sm" /> düğmesiyle
    <b> Çalışma Şekli</b>'ni seçip <Circle className="inline-icon button" />
    {" "} düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="aşağı" className="inline-icon sm" /> düğmesiyle
    <b> Otomatik</b>, <b>Esnek</b> veya <b>TKGS Kapalı</b> seçimini yapıp <Circle className="inline-icon button" /> düğmesine basın.
  </Box>
]