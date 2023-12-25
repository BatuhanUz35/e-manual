import React from "react";
import "../style.css";
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../assets/images/png/tv_icon.png";
import back from "../../../assets/images/png/back.png";
import down from "../../../assets/images/png/down.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function SinyalBilgileri() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Sinyal Bilgileri</p>
      <div className="container">
        <h1>Sinyal Bilgileri</h1>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/
            <img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle <b>Sistem Bilgileri</b>'ni seçip
            {" "}<Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Bir süre sonra ekranda <b>Hoş geldiniz</b> menüsü görüntülenir
            </div>
          </li>
        </ol>
        <h2>Notlar:</h2>
        <ul>
          <li>
            Bulunduğunuz kaynağa göre sinyal bilgileri değişmektedir.
          </li>
          <li>
            Sinyal düzeyi yalnızca alıcı sisteminizde değil, halihazırda aktif olan kanala da bağlıdır. Sinyal düzeyi
            ekranını kullanarak anteninizi ayarlarken bunu unutmayın.
          </li>
        </ul>
        <ol start="2">
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            yayına dönmek için <img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}

