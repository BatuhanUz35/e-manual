import { Box } from "@mui/material";
import home from "../../../../assets/images/icons/home.png"
import back from "../../../../assets/images/icons/back.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import right from "../../../../assets/images/icons/right.png";
import left from "../../../../assets/images/icons/left.png";
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import { Circle } from "@mui/icons-material";

export const ol = [
  <Box>
    Ses menüsünden <b>Ekolayzer Ayrıntıları</b>'nı seçip <Circle className="inline-icon button" /> düğmesiyle onaylayın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>
      <b>Ekolayzer Ayrıntıları</b> menüsü görüntülenir.
      </Box>
    </Box>
  </Box>,
  <Box>
    <b>120Hz</b> frekans bandı etkindir.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box>
      <img src={left} alt="Sol" className="inline-icon sm" /> veya <img src={right} alt="Sağ" className="inline-icon sm" /> tercih edilen değeri ayarlayın.
      </Box>
    </Box>
  </Box>,
  <Box>
    Sonraki frekans bandını seçip ayar işlemini tekrarlayın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne dönmek
    için <img src={home} alt="Home" className="inline-icon" /> veya TV yayınına dönmek için
    {" "}<img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>
]