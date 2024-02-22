import React from "react";
import "../../style.css";
import { ol } from "./CihazAdıDeğiştirme_";
import { Box } from "@mui/material";

export default function CihazAdıDeğiştirme() {
  return (
    <Box className="page">
      <p>Ana sayfa / Cihaz Tercihleri / Hakkında / Cihaz Adı Değiştirme</p>
      <Box className="container">
        <h1>Cihaz Adı Değiştirme</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
