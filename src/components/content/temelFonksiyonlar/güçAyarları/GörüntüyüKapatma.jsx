import React from "react";
import "../../style.css";
import tv_icon from "../../../../assets/images/png/tv_icon.png";
import options from "../../../../assets/images/png/options.png";
import back from "../../../../assets/images/png/back.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function GörüntüyüKapatma() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Güç Ayarları / Görüntüyü Kapatma</p>
      <div className="container">
        <h1>Görüntüyü Kapatma</h1>
        <p>
          Televizyonu stand-by moduna almadan sadece görüntüyü kapatabilirsiniz.
        </p>
        <ol>
          <li>
            <img src={tv_icon} alt="TV" className="inline-icon"/> ardından <img src={options} alt="Seçenekler" className="inline-icon"/>
            düğmesine basın.
          </li>
          <li>
            <b>Güç</b>'ü seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/> <b>Güç</b> menüsü görüntülenir.
            </div>
          </li>
          <li>
            <b>Görüntüyü Kapat</b>'ı seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/> Ekran görüntüsü kapatılır.
            </div>
          </li>
          <li>
            Görüntüyü tekrar açmak için kumandadan bir düğmeye basın.
          </li>
          <li>
            Yayına dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            {" "}<img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}

