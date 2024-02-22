import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./Tiz_";

export default function Tiz() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Tiz</p>
      <Box className="container">
        <h1>Tiz</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
