import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol1, ol2 } from "./MağazaModuAyarları_";

export default function MağazaModuAyarları() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Cihaz Tercihleri / Mağaza Modu Ayarları
      </p>
      <Box className="container">
        <h1>Mağaza Modu Ayarları</h1>
        <p>Mağaza modu cihazın tanıtım modudur cihaza ait tanıtım videosu ve özellik logoları görüntülenir. Bu menüden mağaza modunu açıp kapatabilirsiniz.</p>
        <ol>
          {ol1.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Önemli:</h2>
        <ul>
          <li>
            Mağaza modunun açılması televizyonun güç tüketimini arttırır.
          </li>
        </ul>
        <ol start={ol1.length+1}>
          {ol2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
