import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ul } from "./AyaklıKurulum_";

export default function KurulumVeyaAsma() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Ürününüz / Kurulum veya Asma / Ayaklı Kurulum
      </p>
      <Box className="container">
        <h1>Ayaklı Kurulum</h1>
        <ul>
          {ul.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
