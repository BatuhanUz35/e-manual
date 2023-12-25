import tv_icon from "../../../../assets/images/png/tv_icon.png"
import options from "../../../../assets/images/png/options.png"
import right from "../../../../assets/images/png/right.png"
import left from "../../../../assets/images/png/left.png"
import down from "../../../../assets/images/png/down.png"
import { Circle } from "@mui/icons-material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const ol = [
  <div>
    TV moduna geçmek için <img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </div>,
  <div>
    <img src={options} alt="Seçenekler" className="inline-icon" /> ardından <img src={left} alt="Sol" className="inline-icon sm" />/
    <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesi ile <b>Gelişmiş Seçenekler</b>'i seçip <Circle className="inline-icon button" />
    {" "} düğmesine basın.
  </div>,
  <div>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Yukarı" className="inline-icon sm" /> düğmesiyle <b>HBBTV Ayarları</b>'nı
    seçip <Circle className="inline-icon button" /> düğmesine basın.
    <div>
      <ArrowForwardIcon className="inline-icon xs" />
      <b>HBBTV Ayarları</b> menüsü görüntülenir.
      <h2>img gelcek</h2>
    </div>
  </div>

]

export const links = [
  {
    title: "HBBTV Desteği",
    url: "/hbbtv/hbbtv-ayarları/hbbtv-desteği"
  },
  {
    title: "İzleme Tercihi",
    url: "/hbbtv/hbbtv-ayarları/izleme-tercihi"
  },
  {
    title: "Çerez Ayarları",
    url: "/hbbtv/hbbtv-ayarları/çerez-ayarları"
  },
  {
    title: "Kalıcı Depolama",
    url: "/hbbtv/hbbtv-ayarları/kalıcı-depolama",
  },
  {
    title: "İzleme Sitelerini Engelle",
    url: "/hbbtv/hbbtv-ayarları/izleme-sitelerini-engelle",
  },
  {
    title: "Cihaz Kimliği",
    url: "/hbbtv/hbbtv-ayarları/cihaz-kimliği",
  },
  {
    title: "Cihaz Kimliğini Sıfırlama",
    url: "/hbbtv/hbbtv-ayarları/cihaz-kimliğini-sıfırlama",
  },
]