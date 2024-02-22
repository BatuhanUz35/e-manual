import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./EngellenmişBirHariciKaynağıİzleme_";

export default function EngellenmişBirHariciKaynağıİzleme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ebeveyn Ayarları / Engellenmiş Bir Harici Kaynağı İzleme
      </p>
      <Box className="container">
        <h1>Engellenmiş Bir Harici Kaynağı İzleme</h1>
        <p>PIN kodu ile engellenmiş bir harici kaynağı izlemek için engellenmiş kaynağı seçip PIN kodu girin.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul><li>Kaynak değiştirildiğinde, kaynak tekrar engellenecektir.</li></ul>
      </Box>
    </Box>
  );
}
