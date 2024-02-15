import React from "react";
import "../style.css";
import { ol } from "./GoogleHesabıylaOturumAçma_";
import { Box } from "@mui/material";

export default function GoogleHesabıylaOturumAçma() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Android TV / Google Hesabıyla Oturum Açma</p>
      <Box className="container">
        <h1>Google Hesabıyla Oturum Açma</h1>
        <ol>
        {ol.map((li) => {
          return ( 
            <li>{li}</li>
          )})}
        </ol>
      </Box>
    </Box>
  );
}
