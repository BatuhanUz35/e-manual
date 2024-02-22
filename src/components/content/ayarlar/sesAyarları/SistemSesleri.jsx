import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./SistemSesleri_";

export default function SistemSesleri() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Sistem Sesleri</p>
      <Box className="container">
        <h1>Sistem Sesleri</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
