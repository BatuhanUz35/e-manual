import React from "react";
import "../style.css";
import { texts, not } from "./HomeMenü_";
import { Box } from "@mui/material";

export default function HomeMenü() {
  return (
    <Box className="page">
      <p>Ana sayfa / Android TV / Home Menü (Ana Ekran)</p>
      <Box className="container">
        <h1>Home Menü (Ana Ekran)</h1>
        {texts.map((li) => {
          return ( 
            <p>{li}</p>
          )})}
          <h2>Not:</h2>
          <ul>
          {not.map((li) => {
          return ( 
            <li>{li}</li>
          )})}
          </ul>
      </Box>
    </Box>
  );
}
