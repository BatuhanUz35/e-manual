import React from "react";
import "../../style.css";
import home from "../../../../assets/images/png/home.png";
import back from "../../../../assets/images/png/back.png";
import tv_icon from "../../../../assets/images/png/tv_icon.png";
import { Circle } from "@mui/icons-material";

export default function Earc() {
  return (
    <div className="page">
      <p>Anasayfa / Ayarlar / Ses Ayarları / eARC</p>
      <div className="container">
        <h1>eARC</h1>
        <ol>
          <li>
            Ses menüsünden <b>eARC</b>'yi seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Otomatik</b>, veya <b>Kapalı</b>'yı seçip <Circle className="inline-icon button"/> düğmesine basın.
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
