import React from "react";
import "../../style.css";
import { ol } from "./İleriGeriGörüntüOynatma_";
import { Box } from "@mui/material";


export default function İleriGeriGörüntüOynatma() {
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / Oynatma / İleri - Geri Görüntü Oynatma</p>
      <Box className="container">
        <h1>İleri / Geri Görüntü Arama</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
