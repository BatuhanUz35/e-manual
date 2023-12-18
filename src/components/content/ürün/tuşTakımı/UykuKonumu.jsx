import React from "react";
import "../../style.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function UykuKonumu() {
  return (
    <div className="page">
      <p>Anasayfa / Ürününüz / Tuş Takımı / Cihazın Uyku Konumuna Alınması ve Açılması</p>
      <div className="container">
        <h1>Cihazın Uyku Konumuna Alınması ve Açılması</h1>
        <ol>
          <li>
            Televizyonu açık iken <PowerSettingsNewIcon className="inline-icon"/>
            düğmesine kısa basıldığında uyku konumuna geçer.
          </li>
          <li>
            Televizyonu uyku konumunda iken <PowerSettingsNewIcon className="inline-icon"/>
            düğmesine kısa basıldığında uyku konumundan açılır.
          </li>
        </ol>
      </div>
    </div>
  );
}
