import React from "react";
import "../../style.css";
import { Box } from "@mui/material";


export default function KurulumVeyaAsma() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ürününüz / Kurulum veya Asma / Ayaklı Kurulum</p>
      <Box className="container">
       <h1>Ayaklı Kurulum</h1>
       <ul>
        <li>
          Ayağı monte etmek için, birlikte verilen montaj talimatlarına bakın.
        </li>
        <li>
          Televizyonu, sert ve dengeli bir yüzeye yerleştirin.
        </li>
       </ul>
      </Box>
    </Box>
  );
}
