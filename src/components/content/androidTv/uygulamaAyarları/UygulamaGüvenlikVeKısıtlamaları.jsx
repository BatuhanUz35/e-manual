import React from "react";
import "../../style.css";
import { ol } from "./UygulamaGüvenlikVeKısıtlamaları_";
import { Box } from "@mui/material";

export default function UygulamaGüvenlikVeKısıtlamaları() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Android TV / Uygulama Ayarları / Uygulama Güvenlik ve Kısıtlamaları
      </p>
      <Box className="container">
        <h1>Uygulama Güvenlik ve Kısıtlamaları</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
