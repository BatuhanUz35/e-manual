import React from "react";
import "../../style.css";
import { texts } from "./GörüntüVerileri_";
import { Box } from "@mui/material";

export default function GörüntüVerileri() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Oynatıcı / Dosya Formatları / Görüntü Verileri</p>
      <Box className="container">
        <h1>Görüntü Verileri</h1>
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
