import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./KanalListesiniSilme_";


export default function KanalListesiniSilme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Listesini Silme
      </p>
      <Box className="container">
        <h1>Kanal Listesini Silme</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
