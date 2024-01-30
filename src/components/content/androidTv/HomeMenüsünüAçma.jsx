import React from "react";
import "../style.css";
import { ol, not } from "./HomeMenüsünüAçma_";
import { Box } from "@mui/material";
import home_menu from "../../../assets/images/in-page-images/home_menu.png";

export default function HomeMenüsünüAçma() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Android TV / Home Menüsünü Açma</p>
      <Box className="container">
        <h1>Home Menüsünü Açma</h1>
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
        <img src={home_menu} alt="Home menüsü" className="in-page-img" />
      </Box>
    </Box>
  );
}
