import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./SpdifGecikmesi_";

export default function SpdifGecikmesi() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / SPDIF Gecikmesi</p>
      <Box className="container">
        <h1>SPDIF Gecikmesi</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
