import React from "react";
import "../style.css";
import { ol } from "./BilgisayardanMüzikVeyaVideoDosyalarınıTvdeYayınlama_";
import { Box } from "@mui/material";

export default function BilgisayardanMüzikVeyaVideoDosyalarınıTvdeYayınlama() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Chromecast Built-in™ / Bilgisayardan Müzik Veya Video Dosyalarını TV'de Yayınlama
      </p>
      <Box className="container">
        <h1>Bilgisayardan Müzik Veya Video Dosyalarını TV'de Yayınlama</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
