import React from "react";
import "../style.css";
import { ol } from "./BilgisayarEkranınıTvdeYayınlama_";
import { Box } from "@mui/material";

export default function BilgisayarEkranınıTvdeYayınlama() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Chromecast Built-in™ / Bilgisayar Ekranını TV'de Yayınlama
      </p>
      <Box className="container">
        <h1>Bilgisayar Ekranını TV'de Yayınlama</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
