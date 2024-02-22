import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol, notlar } from "./UzaktanKumandaPil_";
import uzaktan_kumandaya_pillerin_takılması from "../../../assets/images/in-page-images/uzaktan_kumandaya_pillerin_takılması.png"

export default function UzaktanKumandaPil() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ürününüz / Uzaktan Kumandaya Pillerin Takılması</p>
      <Box className="container">
        <h1>Uzaktan Kumandaya Pillerin Takılması</h1>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <img src={uzaktan_kumandaya_pillerin_takılması} alt="Uzaktan Kumandaya Pillerin Takılması" className="in-page-img" />
        <h4>Notlar:</h4>
        <ul>
        {notlar.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
