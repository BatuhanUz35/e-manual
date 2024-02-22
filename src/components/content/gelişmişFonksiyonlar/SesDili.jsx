import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol, not } from "./SesDili_"

export default function SesDili() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Ses Dili</p>
      <Box className="container">
        <h1>Ses Dili</h1>
        <p>
          Dijital kanalları seyrederken çeşitli dilleri seçebilirsiniz. Bu, yayınlanan programa bağlıdır.
        </p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
        {not.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}

