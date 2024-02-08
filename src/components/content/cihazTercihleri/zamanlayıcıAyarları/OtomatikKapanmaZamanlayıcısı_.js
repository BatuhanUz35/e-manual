import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import down from "../../../../assets/images/icons/down.png";
import right from "../../../../assets/images/icons/right.png"
import home from "../../../../assets/images/icons/home.png";
import back from "../../../../assets/images/icons/back.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol1 = [
  <Box>
    <b>Zamanlayıcı</b> menüsünden <b>Kapanma Zamanı Türü</b>‘nü seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Açık</b> veya <b>Bir defa</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Açık:</b> Girilen zamanda TV her gün kapanır.</Box>
    </Box>
    <Box className="flex-container padding-1">
    <ArrowForwardIcon className="inline-icon xs" /><Box><b>Bir Defa:</b> Girilen zamanda TV bir kere kapanır, tekrar etmez.</Box>
    </Box>
  </Box>,
]

export const ol2 = [
  <Box>
    <b>Otomatik Kapanma Zamanı</b>’nı seçip <Circle className="inline-icon button" /> düğmesine basın.
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