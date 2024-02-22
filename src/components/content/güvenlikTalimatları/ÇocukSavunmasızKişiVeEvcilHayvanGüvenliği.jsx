import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ul } from "./ÇocukSavunmasızKişiVeEvcilHayvanGüvenliği_";

export default function ÇocukSavunmasızKişiVeEvcilHayvanGüvenliği() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Güvenlik Talimatları / Çocuk, Savunmasız Kişi ve Evcil
        Hayvan Güvenliği
      </p>
      <Box className="container">
        <h1>Çocuk, Savunmasız Kişi ve Evcil Hayvan Güvenliği</h1>
        <ul>
          {ul.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
