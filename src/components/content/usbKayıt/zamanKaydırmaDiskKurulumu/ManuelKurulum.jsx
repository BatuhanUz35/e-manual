import React from "react";
import "../../style.css";
import { ol1, not, ol2, önemli, ol3 } from "./ManuelKurulum_";
import { Box } from "@mui/material";

export default function ManuelKurulum() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Kayıt / Zaman Kaydırma Disk Kurulumu / Manuel Kurulum</p>
      <Box className="container">
        <h1>Manuel Kurulum</h1>
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
        {önemli.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
        <ol start="5">
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
