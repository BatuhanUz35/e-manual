import React from "react";
import "../style.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Box } from "@mui/material";


export default function SesAyarları() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Açma ve Kapatma</p>
      <Box className="container">
        <h1>Açma ve Kapatma</h1>
        <ol>
          <li>
            Televizyonu bekleme konumundan açmak için <PowerSettingsNewIcon className="inline-icon"/> 
            {" "}düğmesine basın.
          </li>
          <li>
            Televizyonu bekleme konumuna almak için <PowerSettingsNewIcon className="inline-icon"/>
            {" "}düğmesine basın
          </li>
        </ol>
      </Box>
    </Box>
  );
}
