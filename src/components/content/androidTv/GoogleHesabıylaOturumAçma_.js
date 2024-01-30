import { Box } from "@mui/material";
import down from "../../../assets/images/icons/down.png";
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import settings from "../../../assets/images/icons/settings.png"
import right_arrow from "../../../assets/images/icons/right_arrow.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <Box>
    Home menüsünden  <img src={left} alt="Sol" className="inline-icon sm"/>/<img src={right} alt="Sağ" className="inline-icon sm"/>
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle
    {" "}<img src={settings} alt="Ayarlar" className="inline-icon"/> Ayarlar öğesini seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
  </Box>,
  <Box>
    <img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle <b>Hesaplar ve Oturum Açma</b>'yı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    <b>Oturum Açın</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    <b>Uzaktan kumandanızı kullanın</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    E-Posta adresinizi ekran klavyesinden girip devam etmek için <img src={right_arrow} alt="Sağ Ok" className="inline-icon"/> öğesini
    seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Hesap şifresini ekran klavyesinden girip devam etmek için <img src={right_arrow} alt="Sağ Ok" className="inline-icon"/> öğesini 
    seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Televizyon ve telefonunuzun ekranında görüntülenen yönergeleri izleyin.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>TV ekranındaki <b>Başarılı</b> mesajı görüntülenir.</Box>
    </Box>
  </Box>
]