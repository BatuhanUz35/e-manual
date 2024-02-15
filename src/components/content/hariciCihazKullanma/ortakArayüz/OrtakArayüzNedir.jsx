import React from "react";
import "../../style.css";
import { ul } from "./OrtakArayüzNedir_";
import { Box } from "@mui/material";

export default function OrtakArayüzNedir() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Harici Cihaz Kullanma / CI (Ortak Arayüz) / Ortak Arayüz Nedir?</p>
      <Box className="container">
        <h1>Ortak Arayüz Nedir?</h1>
        <ul>
        {ul.map((li) => {
          return <li>{li}</li>;
        })}
        </ul>   
      </Box>
    </Box>
  );
}
