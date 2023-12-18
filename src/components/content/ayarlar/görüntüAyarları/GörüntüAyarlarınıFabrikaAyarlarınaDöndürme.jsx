import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/png/back.png";
import home from "../../../../assets/images/png/home.png"
import tv_icon from "../../../../assets/images/png/tv_icon.png"

export default function GörüntüAyarlarınıFabrikaAyarlarınaDöndürme() {
  return (
    <div className="page">
      <p>Anasayfa / Ayarlar / Görüntü Ayarları / Görüntü Ayarlarını Fabrika Ayarlarına Döndürme</p>
      <div className="container">
        <h1>Görüntü Ayarlarını Fabrika Ayarlarına Döndürme</h1>
        <ol>
          <li>
            Resim menüsünden <b>Varsayılana Sıfırla</b>'yı seçip <Circle className="inline-icon button"/> düğmesiyle
            onaylayın.
          </li>
          <li>
            Sıfırlama işlemini onaylamak için <b>Tamam</b>'ı veya işlemi iptal etmek için <b>İptal</b>'i 
            seçip <Circle className="inline-icon button"/> düğmesine basın.
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
