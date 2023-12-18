import React from "react";
import "../../style.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

export default function BeklemeKonumuAçılma() {
  return (
    <div className="page">
      <p>Anasayfa / Ürününüz / Tuş Takımı / Cihazın Bekleme Konumundan Açılması</p>
      <div className="container">
        <h1>Cihazın Bekleme Konumundan Açılması</h1>
        <ol>
          <li>
            Televizyonu bekleme konumundan açmak için<PowerSettingsNewIcon className="inline-icon"/>
            düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}
