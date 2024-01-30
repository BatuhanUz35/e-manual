import React from "react";
import "../../style.css";
import { ol } from "./UygulamalarınKaldırılması_";
import { Box } from "@mui/material";

export default function UygulamalarınKaldırılması() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Android TV / Uygulama Ayarları / Uygulamaların Kaldırılması
      </p>
      <Box className="container">
        <h1>Uygulamaların Kaldırılması</h1>
        <p>
        İhtiyacınızın olmadığı uygulamaları kaldırabilirsiniz.
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
