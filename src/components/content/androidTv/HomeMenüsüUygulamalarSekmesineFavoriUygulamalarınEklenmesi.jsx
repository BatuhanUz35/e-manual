import React from "react";
import "../style.css";
import { ol } from "./HomeMenüsüUygulamalarSekmesineFavoriUygulamalarınEklenmesi_";
import { Box } from "@mui/material";

export default function HomeMenüsüUygulamalarSekmesineFavoriUygulamalarınEklenmesi() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Android TV / Home Menüsü Uygulamalar Sekmesine Favori Uygulamaların Eklenmesi
      </p>
      <Box className="container">
        <h1>Home Menüsü Uygulamalar Sekmesine Favori Uygulamaların Eklenmesi</h1> 
        <p>Home menüsü uygulamalar sekmesine favori uygulamalarınızı ekleyin.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
