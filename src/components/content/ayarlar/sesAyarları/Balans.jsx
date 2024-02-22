import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./Balans_";

export default function Balans() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Balans</p>
      <Box className="container">
        <h1>Balans</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
