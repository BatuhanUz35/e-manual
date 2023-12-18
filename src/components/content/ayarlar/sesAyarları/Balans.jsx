import React from "react";
import "../../style.css";
import home from "../../../../assets/images/png/home.png"
import tv_icon from "../../../../assets/images/png/tv_icon.png"
import back from "../../../../assets/images/png/back.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import right from "../../../../assets/images/png/right.png";
import left from "../../../../assets/images/png/left.png";

export default function Balans() {
  return (
    <div className="page">
      <p>Anasayfa / Ayarlar / Ses Ayarları / Balans</p>
      <div className="container">
        <h1>Balans</h1>
        <ol>
          <li>
            Ses menüsünden <b>Denge</b>'yi seçin.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/> 
              <img src={left} alt="sol" className="inline-icon sm"/> veya <img src={right} alt="sağ" className="inline-icon sm"/> düğmesiyle değeri seçin.
            </div>
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/>, Home menüsüne dönmek
            için <img src={home} alt="home" className="inline-icon"/> veya TV yayınına dönmek için 
            {" "}<img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}
