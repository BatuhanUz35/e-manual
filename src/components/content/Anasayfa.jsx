import React from "react";
import "./style.css";
import tv from "../../assets/images/in-page-images/tv.png";
import { Box } from "@mui/material";

export default function Anasayfa() {

  return (
    <Box className="page">
      <p>Ana sayfa</p>
      <Box className="container">
        <h1 variant="h1">Televizyon </h1>
        <h1>B55 C 985 B</h1>
        <img src={tv} alt="tv"></img>
      </Box>
    </Box>
  );
}
