import React from "react";
import "../../style.css";
import { ol } from "./UygulamaVarsayılanAyarları_";
import { Box } from "@mui/material";

export default function UygulamaVarsayılanAyarları() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Android TV / Uygulama Ayarları / Uygulama Varsayılan Ayarları
      </p>
      <Box className="container">
        <h1>Uygulama Varsayılan Ayarları</h1>
        <p>
        Uygulama varsayılan tercihlerini silebilirsiniz.
        </p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
