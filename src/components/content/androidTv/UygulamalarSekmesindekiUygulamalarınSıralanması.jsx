import React from "react";
import "../style.css";
import { ol, not } from "./UygulamalarSekmesindekiUygulamalarınSıralanması_";
import { Box } from "@mui/material";

export default function UygulamalarSekmesindekiUygulamalarınSıralanması() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Android TV / Uygulamalar Sekmesindeki Uygulamaların
        Sıralanması
      </p>
      <Box className="container">
        <h1>Home Menü Uygulamalar Sekmesindeki Uygulamaların Sıralanması</h1>
        <p>
          Home menüsü uygulamalar sekmesindeki uygulamaları kişisel tercihinize
          göre sıralayın.
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
