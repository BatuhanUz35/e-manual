import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./OtomatikSes_";

export default function OtomatikSes() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Otomatik Ses</p>
      <Box className="container">
        <h1>Otomatik Ses</h1>
        <p>
          Televizyon kanalları farklı ses seviyelerinde yayınlanır. Otomatik Ses Düzeyi Denetimi fonksiyonu, kanal değiştirdiğinizde
          sesin aynı seviyede kalmasını sağlar.
        </p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
