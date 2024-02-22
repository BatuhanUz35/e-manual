import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ul } from "./KurulumGüvenliği_";

export default function KurulumGüvenliği() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Güvenlik Talimatları / Kurulum Güvenliği
      </p>
      <Box className="container">
        <h1>Kurulum Güvenliği</h1>
        <ul>
          {ul.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
