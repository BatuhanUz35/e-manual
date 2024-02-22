import React from "react";
import "../../style.css";
import { ol } from "./KanalListesindenBirProgramıKaydetme_";
import { Box } from "@mui/material";

export default function KanalListesindenBirProgramıKaydetme() {
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / Programları Kaydetme / Kanal Listesinden Bir Programı Kaydetme</p>
      <Box className="container">
        <h1>Kanal Listesinden Bir Programı Kaydetme</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
