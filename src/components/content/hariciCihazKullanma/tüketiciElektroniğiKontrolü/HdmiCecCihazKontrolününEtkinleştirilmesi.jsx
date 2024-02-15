import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./HdmiCecCihazKontrolünüEtkinleştirme_";

export default function HdmiCecCihazKontrolünüEtkinleştirme() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Harici Cihaz Kullanma / CEC (Tüketici Elektroniği Kontrolü) / HDMI CEC Cihaz Kontrolünü Etkinleştirme
      </p>
      <Box className="container">
        <h1>HDMI CEC Cihaz Kontrolünü Etkinleştirme</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
