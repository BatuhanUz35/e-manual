import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/png/back.png"
import check from "../../../../assets/images/png/check.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export default function KanalTaşıma() {
  return (
    <div className="page">
      <p>
        Anasayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Taşıma
      </p>
      <div className="container">
        <h1>Kanal Taşıma</h1>
        <ol>
          <li>
          <b>Kanal Düzenleyici</b> menüsünde taşımak istediğiniz kanal/kanlları
          seçip <Circle className="inline-icon button"/> düğmesine basın.
          <div><ArrowForwardIcon className="inline-icon xs"/> Kanal/kanallar <img src={check} className="inline-icon sm" alt="Check"/> ile işaretlenir.</div>
          </li>
          <li>
          <Circle className="inline-icon button-green button"/> (yeşil) düğmesine basın.
          </li>
          <li>
            Yeni kanal konumunu seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div><ArrowForwardIcon className="inline-icon xs"/> Kanal/kanallar yeni kanal konumuna taşınmıştır.</div>
          </li>
          <li>
            <b>
              Kanal Düzenleyici</b> menüsünden çıkmak için {" "}<img src={back} alt="geri" className="inline-icon"/> ardından, <b>Evet</b>'i
              seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
        <h2>
          Not:
        </h2>
        <ul>
          <li>
            Kanal sırasını değiştirmeniz halinde, yayıncının yollamış olduğu kanal numaraları değişecektir.
          </li>
        </ul>
      </div>
    </div>
  );
}
