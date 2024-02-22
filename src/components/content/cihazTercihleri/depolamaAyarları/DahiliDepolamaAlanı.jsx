import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./DahiliDepolamaAlanı_";

export default function DahiliDepolamaAlanı() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Depolama Ayarları / Dahili Depolama Alanı
      </p>
      <Box className="container">
        <h1>Dahili Depolama Alanı</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
