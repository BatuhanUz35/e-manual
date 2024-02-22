import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./FavoriListesindenKanalSilme_";

export default function FavoriListesindenKanalSilme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Favori Listesinden Kanal Silme
      </p>
      <Box className="container">
        <h1>Favori Listesinden Kanal Silme</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
