import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import down from "../../../../assets/images/icons/down.png";
import home from "../../../../assets/images/icons/home.png";
import back from "../../../../assets/images/icons/back.png";

export const ol = [
  <Box>
    <b>Tarih ve Saat</b> menüsünden <b>Saat dilimini ayarla</b>‘yı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    değeri düğmesiyle bulunduğunuz saat dilimini seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home
    menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]