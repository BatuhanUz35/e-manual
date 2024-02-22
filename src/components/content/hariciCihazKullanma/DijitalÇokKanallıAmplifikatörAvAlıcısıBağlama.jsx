import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./DijitalÇokKanallıAmplifikatörAvAlıcısıBağlama_";

export default function DijitalÇokKanallıAmplifikatörAvAlıcısıBağlama() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Harici Cihaz Kullanma / Dijital Çok kanallı Amplifikatör - AV Alıcısı Bağlama
      </p>
      <Box className="container">
        <h1>Dijital Çok kanallı Amplifikatör / AV Alıcısı Bağlama</h1>
        <ol>
          <li>
          Televizyonun üzerindeki <b>HDMI1 (e-ARC)</b> soketini HDMI e-ARC / ARC uyumlu Dijital çok kanallı amplifikatör / AV alıcısı üzerindeki ilgili sokete standart
          HDMI kablosu kullanarak bağlayın veya televizyonun üzerindeki <b>Optic Out</b> soketini AV alıcısı üzerindeki ilgili sokete standart optik dijital kablo kullanarak bağlayın.
          </li>
        </ol>
        <h2>Önemli:</h2>
        <ul>
          <li>
            HDMI e-ARC/ARC bağlantısında 5 metreden daha uzun bir HDMI kablosu kullanmayın.
          </li>
        </ul>
        <ol>
        {ol.map((li) => {
          return <li>{li}</li>;
        })}
        </ol>
      
      </Box>
    </Box>
  );
}
