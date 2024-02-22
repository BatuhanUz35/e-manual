import React from "react";
import "../../style.css";
import { ol } from "./Uygulamaİzinleri_";
import { Box } from "@mui/material";

export default function Uygulamaİzinleri() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Android TV / Uygulama Ayarları / Uygulama İzinleri
      </p>
      <Box className="container">
        <h1>Uygulama İzinleri</h1>
        <p>
        Uygulama izinlerini düzenleyebilirsiniz.
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
