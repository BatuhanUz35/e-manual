import React from "react";
import "../style.css";
import { ul, ol, notlar } from "./HariciVeriOrtamınınBağlanması_";
import { Box } from "@mui/material";
import harici_veri_ortamının_bağlanması from "../../../assets/images/in-page-images/harici_veri_ortamının_bağlanması.png"

export default function HariciVeriOrtamınınBağlanması() {
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / Harici Veri Ortamının Bağlanması</p>
      <Box className="container">
        <h1>Harici Veri Ortamının Bağlanması</h1>
        <ul>
        {ul.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
        <img src={harici_veri_ortamının_bağlanması} alt="Harici Veri Ortamının Bağlanması" className="in-page-img" />
        <ol>
        {ol.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
        <h2>Notlar:</h2>
        <ul>
        {notlar.ul.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
      </Box>
    </Box>
  );
}
