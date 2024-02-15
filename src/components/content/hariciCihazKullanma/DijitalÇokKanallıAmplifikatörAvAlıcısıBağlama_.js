import { Box } from "@mui/material"
import home from "../../../assets/images/icons/home.png"
import down from "../../../assets/images/icons/down.png"
import left from "../../../assets/images/icons/left.png"
import right from "../../../assets/images/icons/right.png"
import settings from "../../../assets/images/icons/settings.png"
import back from "../../../assets/images/icons/back.png"
import { Circle } from "@mui/icons-material"

export const ol = [
  <Box>
    <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>,
  <Box>
    <img src={left} alt="Sol" className="inline-icon sm"/>/<img src={right} alt="Sağ" className="inline-icon sm"/>
    /<img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="Aşağı" className="inline-icon sm"/> düğmesiyle
    {" "}<img src={settings} alt="Ayarlar" className="inline-icon"/> Ayarlar'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    <b>Cihaz Tercihleri</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    <b>Ses</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
     <b>Dijital Giriş</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
  </Box>,
  <Box>
    Dijital ses çıkışını <b>Otomatik</b>, <b>Direkt Geçiş</b>, <b>PCM</b>, <b>Dolby Digital Plus</b> veya <b>Dolby Digital</b>'i
    seçip <Circle className="inline-icon button"/> düğmesine basın. 
  </Box>,
  <Box>
    Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon"/> Home menüsüne dönmek için <img src={home} alt="Home" className="inline-icon"/> düğmesine basın.
  </Box>
]
