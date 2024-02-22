import React from "react";
import "../style.css";
import { ol } from "./YüklüBirUygulamanınBaşlatılması_";
import { Box } from "@mui/material";

export default function YüklüBirUygulamanınBaşlatılması() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Android TV / Yüklü Bir Uygulamanın Başlatılması
      </p>
      <Box className="container">
        <h1>Yüklü Bir Uygulamanın Başlatılması</h1> 
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
