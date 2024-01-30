import React from "react";
import "../../style.css";
import { ol } from "./HomeMenüOyunlarSekmesindekiUygulamalarınSıralanması_";
import { Box } from "@mui/material";

export default function HomeMenüOyunlarSekmesindekiUygulamalarınSıralanması() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Android TV / Home Menüsü Ayarları / Home Menü Oyunlar Sekmesindeki Uygulamaların Sıralanması
      </p>
      <Box className="container">
        <h1>Home Menü Oyunlar Sekmesindeki Uygulamaların Sıralanması</h1>
        <p>
          Home menü oyunlar menüsündeki uygulamaları kişisel tercihinize göre sıralayın.
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
