import React from "react";
import "../style.css";
import { ul, ol, notlar } from "./HariciVeriOrtamınınBağlanması_";
import { Box } from "@mui/material";

export default function HariciVeriOrtamınınBağlanması() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Kayıt / Harici Veri Ortamının Bağlanması</p>
      <Box className="container">
        <h1>Harici Veri Ortamının Bağlanması</h1>
        <ul>
        {ul.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
        <h2>img gelcek</h2>
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
