import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./FavoriListesindeKanalTaşıma_";

export default function FavoriListesindeKanalTaşıma() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Favori Listesinde Kanal Taşıma
      </p>
      <Box className="container">
        <h1>Favori Listesinde Kanal Taşıma</h1>
        <p>Favori Kanallarınızı istediğiniz kanal konumuna taşıyıp listeyi düzenleyin.</p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
