import txt from "../../../assets/images/png/txt.png"
import zero from "../../../assets/images/png/zero.png"
import one from "../../../assets/images/png/one.png"
import { Circle } from "@mui/icons-material"

export const ol1 = [
  <div>
    Teleteks moduna geçmek için <img src={txt} alt="TXT" className="inline-icon" /> düğmesine
    basın.
  </div>,
  <div>
    Teleteks sayfalarını doğrudan <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" />
    {" "} düğmeleri ile veya aşamalı olarak <b>img gelcek</b> düğmeleri ile seçebilirsiniz.
  </div>,
]

export const ol2 = [
  <div>
    Bir sayfa geri gitmek için <Circle className="inline-icon button-red button" /> (kırmızı) düğmesine basın.
  </div>,
  <div>
    Konu seçmek için <Circle className="inline-icon button-green button" /> (yeşil) düğmesine basın.
  </div>,
  <div>
    Bölüm seçmek için <Circle className="inline-icon button-yellow button" /> (sarı) düğmesine basın.
  </div>,
  <div>
    Bir sayfa ileri gitmek için <Circle className="inline-icon button-blue button" /> (mavi) düğmesine basın.
  </div>,
  <div>
    Teleteks modundan çıkmak için <img src={txt} alt="TXT" className="inline-icon" /> düğmesine basın.
  </div>
]