
import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../../assets/images/png/tv_icon.png";
import back from "../../../../assets/images/png/back.png";
import down from "../../../../assets/images/png/down.png";
import one from "../../../../assets/images/png/one.png"
import zero from "../../../../assets/images/png/zero.png"
import check from "../../../../assets/images/png/check.png";

export default function TabloVersiyonuSıfırlama() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / TKGS Ayarları / Tablo Versiyonu Sıfırlama</p>
      <div className="container">
        <h1>Tablo Versiyonu Sıfırlama</h1>
        <ol>
          <li>
            <b>TKGS Ayarı</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b>Tablo Versiyonunu Sıfırla</b>'yı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Uyarı mesajı görüntülenir.
          </li>
          <li>
            Sıfırlama işlemini onaylamak için <b>Tamam</b> veya işlemi iptal etmek için <b>İptal</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="o" className="inline-icon xs"/> düğmeleriyle
            kanal konum listesi frekansı girip sanal klavyeden <img src={check} alt="Check" className="inline-icon sm"/> tuşunu
            seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            yayına dönmek için <img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}

