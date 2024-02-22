import { Box } from "@mui/material"
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import options from "../../../../assets/images/icons/options.png";
import right from "../../../../assets/images/icons/right.png";
import left from "../../../../assets/images/icons/left.png";
import down from "../../../../assets/images/icons/down.png";
import home from "../../../../assets/images/icons/home.png";
import delete_icon from "../../../../assets/images/icons/delete_icon.png";
import right_arrow from "../../../../assets/images/icons/right_arrow.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Tv moduna geçmek için <img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={options} alt="Seçenekler" className="inline-icon" /> ardından <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle
    <b> Ayarlar</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Kanal</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Kanallar</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    <b>Kanal Düzenleme</b>'yi seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Düzenlemek istediğiniz kanalı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Kanal Bilgileri</b> görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Kanal Adı</b>'nı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Mevcut adı silmek için <img src={left} alt="sol" className="inline-icon sm" />/<img src={right} alt="sağ" className="inline-icon sm" />
    /<img src={down} alt="yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="aşağı" className="inline-icon sm" /> düğmesiyle
    düğmesiyle <img src={delete_icon} alt="silme" className="inline-icon" /> tuşunu
    seçip <Circle className="inline-icon button" /> düğmesine basın
  </Box>,
  <Box>
    <img src={left} alt="Sol" className="inline-icon sm" />/<img src={right} alt="Sağ" className="inline-icon sm" />
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/ <img src={down} alt="Aşağı" className="inline-icon sm" /> düğmesiyle
    karakter/sayıyı seçip <Circle className="inline-icon button" /> düğmesiyle
    bir sonraki karaktere geçin, aynı işlemi tüm karakter/rakamlar için uygulayın.
  </Box>,
  <Box>
    Yeni adı kaydetmek için ekran klavyesinden  <img src={right_arrow} alt="Sağ ok" className="inline-icon xs" /> düğmesini
    seçip <Circle className="inline-icon button" /> düğmesine basın.
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne
    dönmek için <img src={home} alt="Home" className="inline-icon" /> veya
    TV yayınına dönmek için <img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>
]