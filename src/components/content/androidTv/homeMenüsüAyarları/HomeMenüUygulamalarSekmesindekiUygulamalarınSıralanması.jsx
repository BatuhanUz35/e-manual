import React from "react";
import "../../style.css";
import { ol, not } from "./HomeMenüUygulamalarSekmesindekiUygulamalarınSıralanması_";
import { Box } from "@mui/material";

export default function HomeMenüUygulamalarSekmesindekiUygulamalarınSıralanması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Android TV / Home Menüsü Ayarları / Home Menü Uygulamalar Sekmesindeki Uygulamaların Sıralanması
      </p>
      <Box className="container">
        <h1>Home Menü Uygulamalar Sekmesindeki Uygulamaların Sıralanması</h1>
        <p>
          Home menü uygulamalar menüsündeki uygulamaları kişisel tercihinize göre sıralayın.
        </p>
        <h2>Not:</h2>
        <ul>
          {not.map((li) => {
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
