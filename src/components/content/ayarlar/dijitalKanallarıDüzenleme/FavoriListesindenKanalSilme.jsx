import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/png/back.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function FavoriListesindenKanalSilme() {
  return (
    <div className="page">
      <p>
        Anasayfa / Ayarlar / Dijital Kanalları Düzenleme / Favori Listesinden Kanal Silme
      </p>
      <div className="container">
        <h1>Favori Listesinden Kanal Silme</h1>
        <ol>
          <li>
          <b>Kanal Düzenleyici</b> menüsünde düzenlemek istediğiniz favori listesini
          seçip <Circle className="inline-icon button"/> düğmesine basın.
          <div><ArrowForwardIcon className="inline-icon xs"/> Seçilen favori listesi kanalları görüntülenir.</div>
          </li>
          <li>
            Silmek istediğiniz kanal/kanalları seçip <Circle className="inline-icon button"/> düğmesiyle işaretleyin.
          </li>
          <li>
            Seçili kanalları silmek için <Circle className="inline-icon button-blue button"/> (mavi) 
            düğmesine basın. <div><ArrowForwardIcon className="inline-icon xs"/> Kanal/kanallar seçili favori listesinden silinmiştir.</div>
          </li>
          <li>
            <b>Kanal Düzenleyici</b> menüsünden çıkmak için <img src={back} className="inline-icon"/> ardından, 
            {" "}<b>Evet</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}
