import React from "react";
import "../style.css";
import { ol, notlar } from "./OynatmaÇalmaTemelFonksiyonlar_";
import { Box } from "@mui/material";

export default function OynatmaÇalmaTemelFonksiyonlar() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / USB Oynatıcı / Oynatma - Çalma Temel Fonksiyonlar
      </p>
      <Box className="container">
        <h1>Oynatma/Çalma Temel Fonksiyonlar</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Notlar:</h2>
        <ol>
          {notlar.map((not) => {
            return <li>{not}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
