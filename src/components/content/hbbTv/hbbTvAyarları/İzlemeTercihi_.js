import down from "../../../../assets/images/icons/down.png";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import { Box } from "@mui/material";

export const texts = [
  "HbbTV servisleri için izleme tercihinizi ayarlayın.",
]

export const ol = [
  <Box>
    <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
    <b> Do Not Track</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
    <b> Açık</b>, <b>Kapalı</b> veya <b>Varsayılan</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Yayına dönmek için <img src={back} alt="Geri" className="inline-icon" /> veya <img src={tv_icon} alt="TV" className="inline-icon" />
    {" "} düğmesine basın.
  </Box>
]