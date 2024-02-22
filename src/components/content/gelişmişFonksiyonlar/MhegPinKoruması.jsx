import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./MhegPinKoruması_"

export default function MhegPinKoruması() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / MHEG PIN Koruması</p>
      <Box className="container">
        <h1>MHEG PIN Koruması</h1>
        <p>
          Etkileşimli MHEG uygulamalarında PIN korumasını aktif edin.
        </p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

