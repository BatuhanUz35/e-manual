import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./PinKodunuDeğiştirme_";

export default function PinKodunuDeğiştirme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ebeveyn Ayarları / PIN Kodunu Değiştirme
      </p>
      <Box className="container">
        <h1>PIN Kodunu Değiştirme</h1>
        <p>İlk kurulumda oluşturmuş olduğunuz PIN kodunu değiştirin.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
