import { Circle } from "@mui/icons-material";
import { Box } from "@mui/material";
import down from "../../../../assets/images/icons/down.png";
import left from "../../../../assets/images/icons/left.png";
import right from "../../../../assets/images/icons/right.png";
import home from "../../../../assets/images/icons/home.png";
import back from "../../../../assets/images/icons/back.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <b>Erişilebilirlik</b> menüsünden <b>Ses Dosyası Türü</b>'nü seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Sesli Açıklama</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Görme Engelli seçeneği etkindir.</b></Box>
    </Box>
  </Box>,
  <Box>
    <b>Görme Engelli</b>'yi seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Görme Engelli</b> menüsü görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> ile
    istenen satırı/işlevi seçin <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" /> veya
    {" "}<Circle className="inline-icon button" /> düğmesiyle değeri/seçeneği seçin
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne
    dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
  </Box>
]