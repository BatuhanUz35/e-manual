import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function Ambalajınİmha() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Ambalajın İmha Edilmesi
        İle İlgili Bilgiler
      </p>
      <Box className="container">
        <h1>Ambalajın İmha Edilmesi İle İlgili Bilgiler</h1>
        <ul>
          <li>Ürünün ambalajı geri dönüşümlü malzemelerden üretilmiştir</li>
          <li>Atık talimatlarına uygun bir şekilde tasnif ederek çöpe atın.</li>
          <li>Normal ev çöpüyle birlikte atmayın.</li>
        </ul>
      </Box>
    </Box>
  );
}
