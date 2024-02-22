import txt from "../../../assets/images/icons/txt.png"
import zero from "../../../assets/images/icons/zero.png"
import one from "../../../assets/images/icons/one.png"
import channel_direction from "../../../assets/images/icons/channel_direction.png"
import { Circle } from "@mui/icons-material"
import { Box } from "@mui/material"

export const ol1 = [
  <Box>
    Teleteks moduna geçmek için <img src={txt} alt="TXT" className="inline-icon" /> düğmesine
    basın.
  </Box>,
  <Box>
    Teleteks sayfalarını doğrudan <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" />
    {" "} düğmeleri ile veya aşamalı olarak <img src={channel_direction} alt="Kanal Yön Tuşu" className="inline-icon" /> düğmeleri ile seçebilirsiniz.
  </Box>,
]

export const ol2 = [
  <Box>
    Bir sayfa geri gitmek için <Circle className="inline-icon button-red button" /> (kırmızı) düğmesine basın.
  </Box>,
  <Box>
    Konu seçmek için <Circle className="inline-icon button-green button" /> (yeşil) düğmesine basın.
  </Box>,
  <Box>
    Bölüm seçmek için <Circle className="inline-icon button-yellow button" /> (sarı) düğmesine basın.
  </Box>,
  <Box>
    Bir sayfa ileri gitmek için <Circle className="inline-icon button-blue button" /> (mavi) düğmesine basın.
  </Box>,
  <Box>
    Teleteks modundan çıkmak için <img src={txt} alt="TXT" className="inline-icon" /> düğmesine basın.
  </Box>
]