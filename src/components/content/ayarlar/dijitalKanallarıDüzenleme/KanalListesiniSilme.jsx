import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/png/back.png"
import tv_icon from "../../../../assets/images/png/tv_icon.png"
import options from "../../../../assets/images/png/options.png"
import right from "../../../../assets/images/png/right.png"
import home from "../../../../assets/images/png/home.png"


export default function KanalListesiniSilme() {
  return (
    <div className="page">
      <p>
        Anasayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Listesini Silme
      </p>
      <div className="container">
        <h1>Kanal Listesini Silme</h1>
        <ol>
          <li>
            Tv moduna geçmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
          </li>
          <li>
            <img src={options} alt="seçenekler" className="inline-icon"/> ardından <img src={right} alt="sağ" className="inline-icon"/> düğmesiyle
            <b>Ayarlar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Kanal</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Kanallar</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Kanal Listesini Temizle</b>'yi seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Silme işlemini onaylamak için <b>Tamam</b>'ı veya işlemi iptal etmek için <b>İptal</b>'i
            seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/>, Home menüsüne
            dönmek için <img src={home} alt="home" className="inline-icon"/>, veya
            TV yayınına dönmek için <img src={tv_icon} alt="TV" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}
