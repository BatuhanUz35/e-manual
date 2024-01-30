import { Box } from "@mui/material"
import home from "../../../assets/images/icons/home.png"
import down from "../../../assets/images/icons/down.png";
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const texts = [
  <Box>
    Akıllı telefon ve tabletlerde olduğu gibi Google Play Store ile TV’ye uygulama ve oyunları indirebilirsiniz.
  </Box>,
  <Box>
    Yalnızca TV’nizle uyumlu uygulama ve oyunları indirebilirsiniz. Akıllı telefonlar/tabletler için olan uygulama ve oyunlardan farklı olabilirler.
  </Box>,
  <Box>
    Google Play Store'dan uygulama yüklemek için televizyon internete bağlı olmalı ve Google hesabı ile oturum açılmış olması gerekmektedir.
  </Box>
]

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
    Home menüsünde <b>Uygulamalar</b> sekmesini seçin.
  </Box>,
  <Box>
    Uygulamalar sekmesinden <b>Google Play Store</b> uygulamasını seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box><b>Google Play Store</b> ana ekranı görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
     <img src={left} alt="Sol" className="inline-icon sm"/>/<img src={right} alt="Sağ" className="inline-icon sm"/>
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle
    istediğiniz uygulamayı seçin veya arama çubuğundan istediğiniz uygulamayı aratıp seçin <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Uygulama açıklama ekranı görüntülenir.</Box>
    </Box>
  </Box>,
  <Box>
    <b>Yükle</b>'yi seçip <Circle className="inline-icon button"/> düğmesine basın.
    <Box className="flex-container padding-1">
      <ArrowForwardIcon className="inline-icon xs" /><Box>Uygulama indirilip televizyonunuza kurulacaktır.</Box>
    </Box>
  </Box>
]

export const not = [
  <Box>
    Uygulamanın boyutu ve internet hızınıza bağlı olarak uygulamanın yüklenme süresi değişiklik gösterebilir.
  </Box>
]