import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./DijitalÇıkış_";

export default function DijitalÇıkış() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Dijital Çıkış</p>
      <Box className="container">
        <h1>Dijital Çıkış</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
