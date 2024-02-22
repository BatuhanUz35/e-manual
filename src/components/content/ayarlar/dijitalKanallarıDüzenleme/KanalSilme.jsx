import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./KanalSilme_";

export default function KanalYeriniDeğiştirme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Silme
      </p>
      <Box className="container">
        <h1>Kanal Silme</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
