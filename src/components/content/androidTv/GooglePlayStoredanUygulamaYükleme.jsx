import React from "react";
import "../style.css";
import { texts, ol, not } from "./GooglePlayStoredanUygulamaYükleme_";
import { Box } from "@mui/material";

export default function GooglePlayStoredanUygulamaYükleme() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Android TV / Google Play Store'dan Uygulama Yükleme
      </p>
      <Box className="container">
        <h1>Google Play Store'dan Uygulama Yükleme</h1>
        {texts.map((text) => {
          return <p>{text}</p>;
        })}
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          {not.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
