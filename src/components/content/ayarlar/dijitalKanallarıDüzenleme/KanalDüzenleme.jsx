import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./KanalDüzenleme_";


export default function KanalDüzenleme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Düzenleme
      </p>
      <Box className="container">
        <h1>Kanal Düzenleme</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
