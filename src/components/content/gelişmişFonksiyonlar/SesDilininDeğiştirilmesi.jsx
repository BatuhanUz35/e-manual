import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./SesDilininDeğiştirilmesi_"

export default function SesDilininDeğiştirilmesi() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Ses Dilinin Değiştirilmesi</p>
      <Box className="container">
        <h1>Ses Dilinin Değiştirilmesi</h1>
        <p>
          (yalnızca dijital televizyon kanalları için)
        </p>
        <p>
          Birincil ve ikincil bir ses dili tanımlayabilirsiniz.
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

