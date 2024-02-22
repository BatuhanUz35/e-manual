import React from "react";
import "../../style.css";
import { texts } from "./VideoVerileri_";
import { Box } from "@mui/material";

export default function VideoVerileri() {
  return (
    <Box className="page">
      <p>Ana sayfa / USB Oynatıcı / Dosya Formatları / Video Verileri</p>
      <Box className="container">
        <h1>Video Verileri</h1>
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
