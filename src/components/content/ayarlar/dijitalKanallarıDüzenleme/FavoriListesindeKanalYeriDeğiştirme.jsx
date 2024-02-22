import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./FavoriListesindeKanalYeriDeğiştirme_";

export default function FavoriListesindeKanalYeriDeğiştirme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Favori Listesinde Kanal Yeri Değiştirme
      </p>
      <Box className="container">
        <h1>Favori Listesinde Kanal Yeri Değiştirme</h1>
        <p>
          Favori listesinde kanalların yerlerini karşılıklı olarak değiştirin. Örneğin; 2 nolu
          kanalı 20 nolu kanala, 20 nolu kanalı 2 nolu kanala taşıyın.
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
