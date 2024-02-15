import { Box } from "@mui/material";
import tv_icon from "../../../../assets/images/icons/tv_icon.png";
import options from "../../../../assets/images/icons/options.png";
import right from "../../../../assets/images/icons/right.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine ardından  <img src={options} alt="seçenekler" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
    <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesiyle CI Kart'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="padding-1">
    <ArrowForwardIcon className="inline-icon xs"/> Cam Bilgileri menüsü görüntülenir.
    </Box>
  </Box>,
]

export const notlar = [
  <Box>
    Bu menüde, kullanma talimatları sunulur ve PIN kodunuzu girdikten sonra Ücretli TV yayını sağlayıcısının kanallarına erişim sağlanır.
  </Box>,
  <Box>
    Diğer ayarlar, CA modülünüz ve akıllı kartınıza ait kılavuzlarda açıklanmaktadır.
  </Box>,
  <Box>
    CA, bazı ülkelerde ve bölgelerde desteklenmemektedir. Lütfen yetkili satıcınıza danışın.
  </Box>
]