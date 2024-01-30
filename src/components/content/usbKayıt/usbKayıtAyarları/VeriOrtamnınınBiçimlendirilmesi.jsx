import React from "react";
import "../../style.css";
import { ol, important } from "./VeriOrtamnınınBiçimlendirilmesi_";
import { Box } from "@mui/material";


export default function VeriOrtamınınBiçimlendirilmesi() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Kayıt / USB Kayıt Ayarları / Veri Ortamının Biçimlendirilmesi</p>
      <Box className="container">
        <h1>Veri Ortamının Biçimlendirilmesi</h1>
        <h2>Önemli</h2>
        <ul>
        {important.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
        <ol>
        {ol.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
      </Box>
    </Box>
  );
}
