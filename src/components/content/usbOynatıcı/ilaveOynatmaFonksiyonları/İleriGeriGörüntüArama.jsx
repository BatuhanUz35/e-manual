import React from "react";
import "../../style.css";
import { texts, ol } from "./İleriGeriGörüntüArama_";
import { Box } from "@mui/material";

export default function İleriGeriGörüntüArama() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / USB Oynatıcı / İlave Oynatma Fonksiyonları / İleri Geri Görüntü Arama
      </p>
      <Box className="container">
        <h1>İleri Geri Görüntü Arama</h1>
        {texts.map((text) => {
            return <p>{text}</p>;
          })}
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
