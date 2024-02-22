import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./HoparlörGecikmesi_";

export default function HoparlörGecikmesi() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Hoparlör Gecikmesi</p>
      <Box className="container">
        <h1>Hoparlör Gecikmesi</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
