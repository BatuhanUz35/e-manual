import React from "react";
import "../../style.css";
import { ol } from "./YasalBilgileriGörüntüleme_";
import { Box } from "@mui/material";


export default function YasalBilgileriGörüntüleme() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Hakkında / Yasal Bilgileri Görüntüleme
      </p>
      <Box className="container">
        <h1>Yasal Bilgileri Görüntüleme</h1>
        <p>
        Bu menüde Açık kaynak lisanslarını, Google yasal bilgilendirmesini, Sistem web görünüm 
        lisanslarını ve Reklamlar ile ilgili bildirimleri görüntüleyebilirsiniz.
        </p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
