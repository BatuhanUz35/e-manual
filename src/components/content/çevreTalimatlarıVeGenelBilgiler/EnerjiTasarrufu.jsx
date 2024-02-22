import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ul } from "./EnerjiTasarrufu_";

export default function EnerjiTasarrufu() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Enerji Tasarrufu
        İle İlgili Bilgiler
      </p>
      <Box className="container">
        <h1>Enerji Tasarrufu İle İlgili Bilgiler</h1>
        <ul>
        {ul.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
