import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { notlar, ol } from "./FavoriListesiOluşturma_";

export default function FavoriListesiOluşturma() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Favori Listesi Oluşturma
      </p>
      <Box className="container">
        <h1>Favori Listesi Oluşturma</h1>
        <p>Favori Kanallarınızı liste halinde kaydedebilirsiniz.</p>
        <h2>Notlar:</h2>
        <ul>
        {notlar.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
