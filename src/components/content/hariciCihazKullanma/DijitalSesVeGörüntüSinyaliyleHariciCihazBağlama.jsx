import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import {  ul } from "./DijitalSesVeGörüntüSinyaliyleHariciCihazBağlama_";

export default function DijitalSesVeGörüntüSinyaliyleHariciCihazBağlama() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Harici Cihaz Kullanma / Dijital Ses ve Görüntü Sinyaliyle Harici Cihaz Bağlama
      </p>
      <Box className="container">
        <h1>Dijital Ses ve Görüntü Sinyaliyle Harici Cihaz Bağlama</h1>
        <ul>
        {ul.map((li) => {
          return <li>{li}</li>;
        })}
        </ul>
        <ol>
          <li>
          Televizyon üzerindeki <b>HDMI1, HDMI2, HDMI3</b> soketiyle harici cihazın üzerindeki ilgili HDMI soketini standart bir HDMI kablosu 
          (dijital görüntü ve ses sinyali) kullanarak bağlayın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
