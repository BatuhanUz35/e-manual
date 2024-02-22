import React from "react";
import "../style.css";
import { texts, ol, dosya_tarayıcısı } from "./MultiMedyaPlayerMenüsü_";
import { Box } from "@mui/material";

export default function MultiMedyaPlayerMenüsü() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / USB Oynatıcı / Multi Medya Player Menüsü
      </p>
      <Box className="container">
        <h1>Multi Medya Player Menüsü</h1>
        {texts.map((text) => {
          return <p>{text}</p>;
        })}
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Dosya tarayıcsı</h2>
        <ol>
          {dosya_tarayıcısı.map((not) => {
            return <li>{not}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
