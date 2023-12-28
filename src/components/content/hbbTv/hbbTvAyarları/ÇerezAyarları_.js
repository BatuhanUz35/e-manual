import down from "../../../../assets/images/png/down.png";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/png/back.png";
import tv_icon from "../../../../assets/images/png/tv_icon.png";

export const texts = [
  "HbbTV servisleri için çerez tercihini ayarlayın.",
]

export const ol = [
  <div>
    <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
    <b> Çerez Ayarları</b>'i seçip <Circle className="inline-icon button" /> düğmesine basın.
  </div>,
  <div>
    <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
    <b> Tümünü Engelle</b>, <b>3. taraf çerezleri engelle</b> veya <b>Varsayılan</b>'ı seçip <Circle className="inline-icon button" /> düğmesine basın.
  </div>,
  <div>
    Yayına dönmek için <img src={back} alt="Geri" className="inline-icon" /> veya <img src={tv_icon} alt="TV" className="inline-icon" />
    {" "} düğmesine basın.
  </div>
]