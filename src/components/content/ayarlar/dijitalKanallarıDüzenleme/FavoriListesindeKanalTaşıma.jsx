import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/png/back.png"

export default function FavoriListesindeKanalTaşıma() {
  return (
    <div className="page">
      <p>
        Anasayfa / Ayarlar / Dijital Kanalları Düzenleme / Favori Listesinde Kanal Taşıma
      </p>
      <div className="container">
        <h1>Favori Listesinde Kanal Taşıma</h1>
        <p>Favori Kanallarınızı istediğiniz kanal konumuna taşıyıp listeyi düzenleyin.</p>
        <ol>
          <li>
            <b>Kanal Düzenleyici</b> menüsünde düzenlemek istediğiniz favori
            listesini seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Taşımak istediğiniz kanal/kanalları seçip <Circle className="inline-icon button"/>
            düğmesiyle işaretleyin.
          </li>
          <li>
          <Circle className="inline-icon button-green button"/> (yeşil) düğmesine basın.
          </li>
          <li>
            Yeni kanal konumunu seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Kanal Düzenleyici</b> menüsünden çıkmak için <img src={back} className="inline-icon"/> 
            ardından, <b>Evet</b>'i seçip <Circle className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      
      
      </div>
    </div>
  );
}
