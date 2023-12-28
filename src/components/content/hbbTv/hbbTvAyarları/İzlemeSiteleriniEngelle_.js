import down from "../../../../assets/images/png/down.png";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/png/back.png";
import tv_icon from "../../../../assets/images/png/tv_icon.png";

export const texts = [
  "İzleme sitelerini engelleyin / izin verin.",
]

export const ol = [
  <div>
    <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
    <b> İzleme Sitelerini Engelle</b>'yi seçip <Circle className="inline-icon button" /> <b>Açık</b> veya <b>Kapalı</b> konumu seçin.
  </div>,
  <div>
    Yayına dönmek için <img src={back} alt="Geri" className="inline-icon" /> veya <img src={tv_icon} alt="TV" className="inline-icon" />
    {" "} düğmesine basın.
  </div>
]