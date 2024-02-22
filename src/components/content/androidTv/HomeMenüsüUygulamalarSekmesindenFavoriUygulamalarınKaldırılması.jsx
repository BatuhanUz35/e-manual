import React from "react";
import "../style.css";
import { ol } from "./HomeMenüsüUygulamalarSekmesindenFavoriUygulamalarınKaldırılması_";
import { Box } from "@mui/material";

export default function HomeMenüsüUygulamalarSekmesindenFavoriUygulamalarınKaldırılması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Android TV / Home Menüsü Uygulamalar Sekmesinden Favori Uygulamaların Kaldırılması
      </p>
      <Box className="container">
        <h1>Home Menüsü Uygulamalar Sekmesinden Favori Uygulamaların Kaldırılması</h1> 
        <p>Home menüsü uygulamalar sekmesinden favori uygulamalarınızı kaldırın.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
