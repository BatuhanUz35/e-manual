import React from "react";
import "../style.css";
import hdmi from "../../../assets/images/in-page-images/hdmi.png";
import { Box } from "@mui/material";
import { ul } from "./Lisanslar_";

export default function Lisanslar() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Lisanslar ile İlgili Bilgiler
      </p>
      <Box className="container">
        <h1>Lisanslar İle İlgili Bilgiler</h1>
        <img src={hdmi} alt="HDMI" className="in-page-img"></img>
        <ul>
        {ul.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
