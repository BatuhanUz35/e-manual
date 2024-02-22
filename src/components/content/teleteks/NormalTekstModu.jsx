import React from "react";
import "../style.css";
import { ol1, ol2, texts } from "./NormalTekstModu_";
import { Box } from "@mui/material";

export default function TopTekstVeyaFlofTekstModu() {
  return (
    <Box className="page">
      <p>Ana sayfa / Teleteks / Normal Tekst Modu</p>
      <Box className="container">
        <h1>Normal Tekst Modu</h1>
        <ol>
          {ol1.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Bir alt sayfayı doğrudan çağırma</h2>
        {texts.map((text) => {
            return <p>{text}</p>;
          })}
        <ol start={ol1.length+1}>
        {ol2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
