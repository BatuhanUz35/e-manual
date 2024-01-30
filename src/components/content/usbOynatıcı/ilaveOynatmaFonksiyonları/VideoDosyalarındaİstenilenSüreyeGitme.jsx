import React from "react";
import "../../style.css";
import { ol } from "./VideoDosyalarındaİstenilenSüreyeGitme_";
import { Box } from "@mui/material";

export default function VideoDosyalarındaİstenilenSüreyeGitme() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / USB Oynatıcı / İlave Oynatma Fonksiyonları / Video Dosyalarında İstenilen Süreye Gitme
      </p>
      <Box className="container">
        <h1>Video Dosyalarında İstenilen Süreye Gitme</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
