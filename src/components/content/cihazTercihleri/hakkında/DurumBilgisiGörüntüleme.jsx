import React from "react";
import "../../style.css";
import { ol } from "./DurumBilgisiGörüntüleme_";
import { Box } from "@mui/material";


export default function DurumBilgisiGörüntüleme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Hakkında / Durum Bilgisi Görüntüleme
      </p>
      <Box className="container">
        <h1>Durum Bilgisi Görüntüleme</h1>
        <p>
        Bu menüde cihazın IP adresini, MAC adreslerini ve seri numarasını görüntüleyebilirsiniz.
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
