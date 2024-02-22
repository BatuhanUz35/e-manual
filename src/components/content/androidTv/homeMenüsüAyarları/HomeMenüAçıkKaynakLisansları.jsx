import React from "react";
import "../../style.css";
import { ol } from "./HomeMenüAçıkKaynakLisansları_";
import { Box } from "@mui/material";

export default function HomeMenüAçıkKaynakLisansları() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Android TV / Home Menüsü Ayarları / Home Menü Açık Kaynak Lisansları
      </p>
      <Box className="container">
        <h1>Home Menü Açık Kaynak Lisansları</h1>
        <p>Home menü açık kaynak lisanslarını görüntüleyin.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
