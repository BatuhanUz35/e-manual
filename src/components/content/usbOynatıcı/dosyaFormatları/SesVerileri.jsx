import React from "react";
import "../../style.css";
import { texts } from "./SesVerileri_";
import { Box } from "@mui/material";

export default function SesVerileri() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Oynatıcı / Dosya Formatları / Ses Verileri</p>
      <Box className="container">
        <h1>Ses Verileri</h1>
        {texts.map((text) => {
          return ( 
            <p>
              {text}
            </p>
          )})}
      </Box>
    </Box>
  );
}
