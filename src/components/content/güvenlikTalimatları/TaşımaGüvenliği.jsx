import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ul } from "./TaşımaGüvenliği_";

export default function TaşımaGüvenliği() {
  return (
    <Box className="page">
      <p>Ana sayfa / Güvenlik Talimatları / Taşıma Güvenliği</p>
      <Box className="container">
        <h1>Taşıma Güvenliği</h1>
        <ul>
        {ul.map((li) => {
          return (
              <li>{li}</li>
          );
      })}
        </ul>
      </Box>
    </Box>
  );
}
