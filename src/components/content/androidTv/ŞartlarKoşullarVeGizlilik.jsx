import React from "react";
import "../style.css";
import { texts } from "./ŞartlarKoşullarVeGizlilik_";
import { Box } from "@mui/material";

export default function ŞartlarKoşullarVeGizlilik() {
  return (
    <Box className="page">
      <p>Ana sayfa / Android TV / Şartlar, Koşullar ve Gizlilik</p>
      <Box className="container">
        <h1>Şartlar, Koşullar ve Gizlilik</h1>
        {texts.map((text) => {
          return ( 
            <p>{text}</p>
          )})}
      </Box>
    </Box>
  );
}
