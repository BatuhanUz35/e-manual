import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./Altyazılar_";

export default function Altyazılar() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Cihaz Tercihleri / Erişilebilirlik Ayarları / Altyazılar
      </p>
      <Box className="container">
        <h1>Altyazılar</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
