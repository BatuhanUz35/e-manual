import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./Bas_";

export default function Bas() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Bas</p>
      <Box className="container">
        <h1>Bas</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
