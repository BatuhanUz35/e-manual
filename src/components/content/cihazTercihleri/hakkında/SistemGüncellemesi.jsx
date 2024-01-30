import React from "react";
import "../../style.css";
import { ol } from "./SistemGüncellemesi_";
import { Box } from "@mui/material";

export default function SistemGüncellemesi() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Cihaz Tercihleri / Hakkında / Sistem Güncellemesi</p>
      <Box className="container">
        <h1>Sistem Güncellemesi</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
