import React from "react";
import "../../style.css";
import home from "../../../../assets/images/png/home.png"
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../../assets/images/png/tv_icon.png"
import back from "../../../../assets/images/png/back.png";

export default function SistemSesleri() {
  return (
    <div className="page">
      <p>Anasayfa / Ayarlar / Ses Ayarları / Sistem Sesleri</p>
      <div className="container">
        <h1>Sistem Sesleri</h1>
        <ol>
          <li>
            <b>Sistem Sesleri</b>'ni seçip <Circle className="inline-icon button"/> düğmesiyle 
            <b> Açık</b> veya <b>Kapalı</b> konumu seçin.
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
