import React from "react";
import "../style.css";
import tv_icon from "../../../assets/images/png/tv_icon.png";
import options from "../../../assets/images/png/options.png";
import home from "../../../assets/images/png/home.png"
import back from "../../../assets/images/png/back.png";
import { Circle } from "@mui/icons-material";

export default function SesStili() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Sesi Stili</p>
      <div className="container">
        <h1>Sesi Stili</h1>
        <ol>
          <li>
            <img src={tv_icon} alt="TV" className="inline-icon"/> ardından <img src={options} alt="Seçenekler" className="inline-icon"/>
            düğmesine basın.
          </li>
          <li>
            <b>Ses</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Ses Stili</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Ses stili tipini seçip <Circle className="inline-icon button"/> düğmesine basın.
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

