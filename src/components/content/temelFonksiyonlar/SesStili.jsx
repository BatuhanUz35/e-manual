import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./SesStili_";

export default function SesStili() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Ses Stili</p>
      <Box className="container">
        <h1>Ses Stili</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

