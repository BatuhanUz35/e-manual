import React from "react";
import "../../style.css";
import { ol } from "./KayıtSırasındaTelevizyonunBeklemeKonumunaAlınması_";
import { Box } from "@mui/material";

export default function KayıtSırasındaTelevizyonunBeklemeKonumunaAlınması() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Kayıt / Programları Kaydetme / Kayıt Sırasında Televizyonun Bekleme Konumuna Alınması</p>
      <Box className="container">
        <h1>Kayıt Sırasında Televizyonun Bekleme Konumuna Alınması</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
