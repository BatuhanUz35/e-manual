import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./MetinKonuşma_";

export default function MetinKonuşma() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Cihaz Tercihleri / Erişilebilirlik Ayarları / Metin - Konuşma
      </p>
      <Box className="container">
        <h1>Metin - Konuşma</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
