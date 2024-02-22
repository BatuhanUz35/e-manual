import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/icons/back.png"
import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import options from "../../../../assets/images/icons/options.png"
import right from "../../../../assets/images/icons/right.png"
import home from "../../../../assets/images/icons/home.png"
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
    <b>Kanal Atlama</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs start" /><Box><b>Kanal Atlama</b> menüsü görüntülenir</Box>
    </Box>
  </Box>,
  <Box>
    Kanal listesinden atlatmak istediğiniz kanal/kanalları
    seçip <Circle className="inline-icon button" /> düğmesiyle işaretleyin.
    <Box>
      <h2>Not:</h2>
      <ul>
        <li>
          Kanal atlatma menüsünde önceki sayfayı görüntülemek için <Circle className="inline-icon button-red button" /> (kırmızı)
          sonraki sayfayı görüntülemek için <Circle className="inline-icon button-green button" /> (yeşil) düğmesine basın.
        </li>
      </ul>
    </Box>
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon" /> Home menüsüne
    dönmek için <img src={home} alt="home" className="inline-icon" /> veya
    TV yayınına dönmek için <img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>
]