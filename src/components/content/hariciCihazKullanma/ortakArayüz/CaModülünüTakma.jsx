import React from "react";
import "../../style.css";
import { ol, notlar } from "./CaModülünüTakma_";
import { Box } from "@mui/material";
import ca_modülü_takma from "../../../../assets/images/in-page-images/ca_modülü_takma.svg";

export default function CaModülünüTakma() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Harici Cihaz Kullanma / CI (Ortak Arayüz) / CA Modülünü Takma</p>
      <Box className="container">
        <h1>CA Modülünü Takma</h1>
        <h2>Önemli:</h2>
        <ul>
          <li>
            CA modülünü COMMON INTERFACE yuvasına takmadan önce cihazı kapatın.
          </li>
        </ul>
        <ol>
        {ol.map((li) => {
          return <li>{li}</li>;
        })}
        </ol>   
        <img src={ca_modülü_takma} alt="CA Modülünü Takma" className="in-page-img"/>
        <h2>Notlar:</h2>
        <ul>
        {notlar.map((li) => {
          return <li>{li}</li>;
        })}
        </ul>   
      </Box>
    </Box>
  );
}
