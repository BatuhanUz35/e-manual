import React from "react";
import "../../style.css";
import { ol1, not, ol2, notlar, ol3 } from "./OtomatikKurulum_";
import { Box } from "@mui/material";

export default function OtomatikKurulum() {
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / Zaman Kaydırma Disk Kurulumu / Otomatik Kurulum</p>
      <Box className="container">
        <h1>Otomatik Kurulum</h1>
        <ol>
        {ol1.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
        <h2>Not:</h2>
        <ul>
        {not.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
        <ol start="2">
        {ol2.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
        <h2>Notlar:</h2>
        <ul>
        {notlar.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
        <ol start="4">
        {ol3.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
      </Box>
    </Box>
  );
}
