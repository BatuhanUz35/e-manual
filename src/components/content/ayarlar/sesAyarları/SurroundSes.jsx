import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./SurroundSes_";

export default function SurroundSes() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / Surround Ses</p>
      <Box className="container">
        <h1>Surround Ses</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
