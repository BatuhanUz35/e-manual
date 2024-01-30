import { Box } from "@mui/material";
import "../../style.css"
import down from "../../../../assets/images/icons/down.png"
import right from "../../../../assets/images/icons/right.png"
import left from "../../../../assets/images/icons/right.png"
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import options from "../../../../assets/images/icons/options.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    TV moduna geçmek için <img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={options} alt="Seçenekler" className="inline-icon" /> ardından <img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle <b>Kaydet</b> sekmesini seçin.
  </Box>,
  <Box>
    <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle <b>Program Listesi</b>'ni seçip <Circle className="inline-icon button" /> düğmesiyle <b>Ekle</b> öğesini
    seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" />
      <Box>
        Programlanmış kayıt zamanlayıcıları görüntülenir.
      </Box>
    </Box>
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle silmek istediğiniz kayıt zamanlayıcısını
    seçip <Circle className="inline-icon button-blue button"/> (mavi) düğmesine basın.
  </Box>,
  <Box>
    Zamanlayıcıyı silmek için <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle <b>Evet</b>'i veya silme işlemini iptal
    etmek için <b>Hayır</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>
]

