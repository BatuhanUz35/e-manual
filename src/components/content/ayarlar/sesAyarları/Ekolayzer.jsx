import React from "react";
import "../../style.css";
import home from "../../../../assets/images/png/home.png"
import back from "../../../../assets/images/png/back.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import right from "../../../../assets/images/png/right.png";
import left from "../../../../assets/images/png/left.png";
import tv_icon from "../../../../assets/images/png/tv_icon.png"
import { Circle } from "@mui/icons-material";

export default function Ekolayzer() {
  return (
    <div className="page">
      <p>Anasayfa / Ayarlar / Ses Ayarları / Ekolayzer</p>
      <div className="container">
        <h1>Ekolayzer</h1>
        <p>Ekolayzer, oluşturabileceğiniz bir ses ayarı sunmaktadır.</p>
        <h2>Not:</h2>
        <ul>
          <li>
            <b>Ekolayzer Ayrıntıları, Ses Stili, Kullanıcı</b> seçildiğinde menüde aktiftir.
          </li>
        </ul>
        <ol>
          <li>
            Ses menüsünden <b>Ekolayzer Ayrıntıları</b>'nı seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/> <b>Ekolayzer Ayrıntıları</b> menüsü görüntülenir.
            </div>
          </li>
          <li>
            <b>120Hz</b> frekans bandı etkindir.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/> 
              <img src={left} alt="sol" className="inline-icon sm"/> veya <img src={right} alt="sağ" className="inline-icon sm"/> tercih edilen değeri ayarlayın.
            </div>
          </li>
          <li>
            Sonraki frekans bandını seçip ayar işlemini tekrarlayın.
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
