import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function YayınKaynağıSeçimi() {
  return (
    <div className="page">
      <p>
        Anasayfa / Ayarlar / Dijital Kanalları Düzenleme / Yayın Kaynağı Seçimi
      </p>
      <div className="container">
        <h1>Yayın Kaynağı Seçimi</h1>
        <p>
          Tüm kaynaklar için uydu (Standart), uydu (Operatör), kablo ve anten olarak kanal
          tablosu ayrı ayrı saklanmaktadır. Düzenleme yapmak için öncelikle düzenleyeceğiniz 
          yayın kaynağını seçin.
        </p>
        <ol>
          <li>
            <b>Kanal Düzenleyici</b> menüsünden <b>Kaynak</b> seçeneğini seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Uydu</b>, <b> Kablo</b> veya <b>Anten</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
            <div><ArrowForwardIcon className="inline-icon xs"/> Seçtiğiniz kaynağa ait kanal listesi görüntülenir.</div>
          </li>
        </ol>
      </div>
    </div>
  );
}
