import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import back from "../../../../assets/images/png/back.png"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function KanalYeriniDeğiştirme() {
  return (
    <div className="page">
      <p>
        Anasayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Yerini Değiştirme
      </p>
      <div className="container">
        <h1>Kanal Yerini Değiştirme</h1>
        <p>
          Kanalların yerlerini karşılıklı olarak değiştirin. Örneğin; 2 numaralı kanalı 20 numaralı
          kanala, 20 numaralı kanalı 2 numaralı kanala taşıyın.
        </p>
        <ol>
          <li>
          <b>Kanal Düzenleyici</b> menüsünde taşımak karşılıklı yerini değiştirmek
          istediğiniz ilk kanalı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
          <Circle className="inline-icon button-yellow button"/> (sarı) düğmesine basın.
          </li>
          <li>
            Yer değiştirmek istediğiniz ikinci kanalı seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div><ArrowForwardIcon className="inline-icon xs"/>İki kanal karşılıklı olarak yer değiştirmiştir.</div>
          </li>
          <li>
            <b>
              Kanal Düzenleyici</b> menüsünden çıkmak için {" "}<img src={back} alt="geri" className="inline-icon"/> ardından, <b>Evet</b>'i
              seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}
