import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./KanalTaşıma_";


export default function KanalTaşıma() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Taşıma
      </p>
      <Box className="container">
        <h1>Kanal Taşıma</h1>
        <p>Kanalları istediğiniz kanal konumuna taşıyıp listeyi düzenleyin.</p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>
          Not:
        </h2>
        <ul>
          <li>
            Kanal sırasını değiştirmeniz halinde, yayıncının yollamış olduğu kanal numaraları değişecektir.
          </li>
        </ul>
      </Box>
    </Box>
  );
}
