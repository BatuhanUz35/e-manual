import down from "../../../../assets/images/icons/down.png";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import { Box } from "@mui/material";

export const texts = [
  "HbbTV servisleri için kalıcı depolamayı açma / kapama.",
]

export const ol = [
  <Box>
    <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
    <b> Kalıcı Depolama</b>'yı seçip <Circle className="inline-icon button" /> düğmesiyle <b>Açık</b> veya <b>Kapalı</b> konumu seçin.
  </Box>,
  <Box>
    Yayına dönmek için <img src={back} alt="Geri" className="inline-icon" /> veya <img src={tv_icon} alt="TV" className="inline-icon" />
    {" "} düğmesine basın.
  </Box>
]