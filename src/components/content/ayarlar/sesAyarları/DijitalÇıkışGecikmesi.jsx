import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./DijitalÇıkışGecikmesi_";

export default function DijitalÇıkışGecikmesi() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Dijital Çıkış Gecikmesi</p>
      <Box className="container">
        <h1>Dijital Çıkış Gecikmesi</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
