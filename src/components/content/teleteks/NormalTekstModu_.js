import txt from "../../../assets/images/icons/txt.png"
import zero from "../../../assets/images/icons/zero.png"
import one from "../../../assets/images/icons/one.png"
import right from "../../../assets/images/icons/right.png"
import left from "../../../assets/images/icons/left.png"
import channel_direction from "../../../assets/images/icons/channel_direction.png"
import { Box } from "@mui/material"

export const ol1 = [
  <Box>
    Teleteks moduna geçmek için <img src={txt} alt="TXT" className="inline-icon" /> düğmesine
    basın.
  </Box>,
  <Box>
    Teleteks sayfalarını doğrudan <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" />
    {" "} düğmeleri ile seçebilirsiniz.
  </Box>,
  <Box>
    Bir sayfa geri veya ileri gitmek için <img src={channel_direction} alt="Kanal Yön Tuşu" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    Teleteks modundan çıkmak için <img src={txt} alt="TXT" className="inline-icon" /> düğmesine basın.
  </Box>,
]

export const texts = [
  "Seçilen Teleteks sayfasında alt sayfalar varsa, seçilmiş olan alt sayfanın numarası ve toplam sayfa sayısı görüntülenir."
]

export const ol2 = [
  <Box>
    Alt sayfa seçmek için <img src={left} className="inline-icon sm" alt="Sol"/>/<img src={right} className="inline-icon sm" alt="Sağ"/> düğmesine basın.
  </Box>
]