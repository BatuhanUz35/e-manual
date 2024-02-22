import down from "../../../../assets/images/icons/down.png";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import { Box } from "@mui/material";

export const texts = [
  "İzleme sitelerini engelleyin / izin verin.",
]

export const ol = [
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle
    <b> İzleme Sitelerini Engelle</b>'yi seçip <Circle className="inline-icon button" /> <b>Açık</b> veya <b>Kapalı</b> konumu seçin.
  </Box>,
  <Box>
    Yayına dönmek için <img src={back} alt="Geri" className="inline-icon" /> veya <img src={tv_icon} alt="TV" className="inline-icon" />
    {" "} düğmesine basın.
  </Box>
]