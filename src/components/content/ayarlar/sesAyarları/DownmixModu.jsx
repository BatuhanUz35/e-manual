import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./DownmixModu_";

export default function DownmixModu() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Downmix Modu</p>
      <Box className="container">
        <h1>Downmix Modu</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
