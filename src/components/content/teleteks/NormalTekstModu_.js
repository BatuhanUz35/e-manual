import txt from "../../../assets/images/png/txt.png"
import zero from "../../../assets/images/png/zero.png"
import one from "../../../assets/images/png/one.png"
import right from "../../../assets/images/png/right.png"
import left from "../../../assets/images/png/left.png"

export const ol1 = [
  <div>
    Teleteks moduna geçmek için <img src={txt} alt="TXT" className="inline-icon" /> düğmesine
    basın.
  </div>,
  <div>
    Teleteks sayfalarını doğrudan <img src={one} alt="1" className="inline-icon xs" />...<img src={zero} alt="0" className="inline-icon xs" />
    {" "} düğmeleri ile seçebilirsiniz.
  </div>,
  <div>
    Bir sayfa geri veya ileri gitmek için <b>img gelcek</b> düğmesine basın.
  </div>,
  <div>
    Teleteks modundan çıkmak için <img src={txt} alt="TXT" className="inline-icon" /> düğmesine basın.
  </div>,
]

export const texts = [
  "Seçilen Teleteks sayfasında alt sayfalar varsa, seçilmiş olan alt sayfanın numarası ve toplam sayfa sayısı görüntülenir."
]

export const ol2 = [
  <div>
    Alt sayfa seçmek için <img src={left} className="inline-icon sm" alt="Sol"/>/<img src={right} className="inline-icon sm" alt="Sağ"/> düğmesine basın.
  </div>
]