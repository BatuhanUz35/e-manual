import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./DijitalGiriş_";

export default function DijitalGiriş() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Dijital Giriş</p>
      <Box className="container">
        <h1>Dijital Giriş</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
