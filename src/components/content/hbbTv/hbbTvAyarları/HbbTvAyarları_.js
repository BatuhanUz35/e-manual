import tv_icon from "../../../../assets/images/icons/tv_icon.png"
import options from "../../../../assets/images/icons/options.png"
import right from "../../../../assets/images/icons/right.png"
import left from "../../../../assets/images/icons/left.png"
import down from "../../../../assets/images/icons/down.png"
import { Circle } from "@mui/icons-material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material"

export const ol = [
  <Box>
    TV moduna geçmek için <img src={tv_icon} alt="TV" className="inline-icon" /> düğmesine basın.
  </Box>,
  <Box>
    <img src={options} alt="Seçenekler" className="inline-icon" /> ardından <img src={left} alt="Sol" className="inline-icon sm" />/
    <img src={right} alt="Sağ" className="inline-icon sm" /> düğmesi ile <b>Gelişmiş Seçenekler</b>'i seçip <Circle className="inline-icon button" />
    {" "} düğmesine basın.
  </Box>,
  <Box>
    <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm" />/<img src={down} alt="Yukarı" className="inline-icon sm" /> düğmesiyle <b>HBBTV Ayarları</b>'nı
    seçip <Circle className="inline-icon button" /> düğmesine basın.
    <Box>
      <ArrowForwardIcon className="inline-icon xs" />
      <b>HBBTV Ayarları</b> menüsü görüntülenir.
      <h2>img gelcek</h2>
    </Box>
  </Box>

]

export const links = [
  {
    title: "HBBTV Desteği",
    url: "/hbbtv/hbbtv-ayarları/hbbtv-desteği",
    focus_item: 80401
  },
  {
    title: "İzleme Tercihi",
    url: "/hbbtv/hbbtv-ayarları/izleme-tercihi",
    focus_item: 80402
  },
  {
    title: "Çerez Ayarları",
    url: "/hbbtv/hbbtv-ayarları/çerez-ayarları",
    focus_item: 80403
  },
  {
    title: "Kalıcı Depolama",
    url: "/hbbtv/hbbtv-ayarları/kalıcı-depolama",
    focus_item: 80404
  },
  {
    title: "İzleme Sitelerini Engelle",
    url: "/hbbtv/hbbtv-ayarları/izleme-sitelerini-engelle",
    focus_item: 80405
  },
  {
    title: "Cihaz Kimliği",
    url: "/hbbtv/hbbtv-ayarları/cihaz-kimliği",
    focus_item: 80406
  },
  {
    title: "Cihaz Kimliğini Sıfırlama",
    url: "/hbbtv/hbbtv-ayarları/cihaz-kimliğini-sıfırlama",
    focus_item: 80407
  },
]