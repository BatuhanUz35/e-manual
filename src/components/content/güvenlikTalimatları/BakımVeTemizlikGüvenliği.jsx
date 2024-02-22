import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ul } from "./BakımVeTemizlikGüvenliği_";

export default function BakımVeTemizlikGüvenliği() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Güvenlik Talimatları / Bakım Ve Temizlik Güvenliği
      </p>
      <Box className="container">
        <h1> Bakım Ve Temizlik Güvenliği</h1>
        <Box>
          <b>UYARI:</b> Kurulum, bakım, temizlik ve tamir işlemleri sırasında
          ürünün fişini prizden çıkarın.
        </Box>
        <ul>
          {ul.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
