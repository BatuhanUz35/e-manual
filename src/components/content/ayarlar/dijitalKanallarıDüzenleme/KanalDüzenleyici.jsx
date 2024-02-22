import React from "react";
import "../../style.css"; 
import { Box } from "@mui/material";
import { ol } from "./KanalDüzenleyici_";
import kanal_düzenleyici from "../../../../assets/images/in-page-images/kanal_düzenleyici.png"

export default function KanalDüzenleyici() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Düzenleyici
        Uygulamasını Başlatma
      </p>
      <Box className="container">
        <h1>Kanal Düzenleyici Uygulamasını Başlatma</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>İlave işemler aşağıdaki bölümlerde açıklanmıştır.</li>
        </ul>
        <img src={kanal_düzenleyici} alt="Kanal Düzenleyici" className="in-page-img" />
      </Box>
    </Box>
  );
}
