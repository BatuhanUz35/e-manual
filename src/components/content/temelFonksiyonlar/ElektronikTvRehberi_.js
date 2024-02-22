import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import down from "../../../assets/images/icons/down.png";
import right from "../../../assets/images/icons/right.png";
import left from "../../../assets/images/icons/left.png";
import tv_icon from "../../../assets/images/icons/tv_icon.png";
import back from "../../../assets/images/icons/back.png";

export const notlar = [
  <Box>
    Her kanal detaylı bir TV rehberi sunmaz.
  </Box>,
  <Box>
    Çoğu yayıncı günlük programı vermekle birlikte ayrıntılı açıklamalar yapmaz.
  </Box>,
  <Box>
    Hiçbir bilgi vermeyen yayıncılar bile vardır.
  </Box>
]

export const ol = [
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="aşağı" className="inline-icon sm" />
    {" "} ile kanal seçin.
    <h4>Not:</h4>
    <ul>
      <li>
        Asıl program hakkındaki bilgi, seçili televizyon kanalında görüntülenir.
      </li>
    </ul>
  </Box>,
  <Box>
    Sonraki program hakkındaki bilgileri seçmek için <img src={right} alt="Sağ" className="inline-icon sm" />
    {" "}düğmesine, mevcut programa ait bilgilere dönmek için ise <img src={left} alt="Sol" className="inline-icon sm" />
    {" "}düğmesine basın.
  </Box>,
  <Box>
    Önceki günün programlarını görüntülemek için <Circle className="inline-icon button-red button" /> (kırmızı),
    {" "}sonraki günün programlarını görüntülemek için <Circle className="inline-icon button-green button" /> (yeşil)
    {" "}düğmesine basın.
  </Box>,
  <Box>
    Programları filtrelemek için <Circle className="inline-icon button-blue button" /> (mavi) düğmesine basın.
  </Box>,
  <Box>
    Yayına dönmek için <img src={back} alt="geri" className="inline-icon" /> veya
    {" "}<img src={tv_icon} alt="tv" className="inline-icon" /> düğmesine basın.
  </Box>
]