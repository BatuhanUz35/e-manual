import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./KanalYeriniDeğiştirme_";

export default function KanalYeriniDeğiştirme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme / Kanal Yerini Değiştirme
      </p>
      <Box className="container">
        <h1>Kanal Yerini Değiştirme</h1>
        <p>
          Kanalların yerlerini karşılıklı olarak değiştirin. Örneğin; 2 numaralı kanalı 20 numaralı
          kanala, 20 numaralı kanalı 2 numaralı kanala taşıyın.
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
