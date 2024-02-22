import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./Earc_";

export default function Earc() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / eARC</p>
      <Box className="container">
        <h1>eARC</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
