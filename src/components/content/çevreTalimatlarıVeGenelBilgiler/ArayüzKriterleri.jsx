import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function ArayüzKriterleri() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Arayüz Kriterleri ile İlgili Bilgiler
      </p>
      <Box className="container">
        <h1>Arayüz Kriterleri İle İlgili Bilgiler</h1>
        <ul>
          <li>Bu ürün Telekom şebekelerinde kullanıma uygun olarak üretilmiştir.</li>
        </ul>
      </Box>
    </Box>
  );
}
