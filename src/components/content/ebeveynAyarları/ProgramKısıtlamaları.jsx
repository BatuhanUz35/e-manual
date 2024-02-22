import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./ProgramKısıtlamaları_";

export default function ProgramKısıtlamaları() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ebeveyn Ayarları / Program Kısıtlamaları
      </p>
      <Box className="container">
        <h1>Program Kısıtlamaları</h1>
        <p>Çocuklar için uygun olmayan içeriklere veya sahnelere sahip filmler vardır.</p>
        <p>Bazı programlar, bu içerikleri ve sahneleri tanımlayan bilgiler içermekte olup bunlar için 4 ila 18 arasında bir erişim düzeyi tanımlanmıştır. 
          Bu erişim düzeylerinden birini seçerek yayının gösterilmesini sağlayın.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
