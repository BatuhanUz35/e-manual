import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import down from "../../../../assets/images/icons/down.png";
import right from "../../../../assets/images/icons/right.png"
import home from "../../../../assets/images/icons/home.png";
import back from "../../../../assets/images/icons/back.png";

export const ol = [
  <Box>
    <b>Tarih ve Saat</b> menüsünden <b>Otomatik tarih ve saat</b>‘i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Kapalı</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Tarihi ayarla</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    değeri, <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle bir sonraki seçeneği seçerek sırasıyla gün, ay ve yılı seçip
    {" "}<Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Saati ayarla</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    değeri, <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle bir sonraki seçeneği seçerek sırasıyla saat ve dakikayı seçip
    {" "}<Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home
    menüsüne dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]