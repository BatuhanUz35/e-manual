import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import uzaktan_kumanda from "../../../assets/images/in-page-images/uzaktan_kumanda.png"
import { ol } from "./UzaktanKumanda_";

export default function UzaktanKumanda() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ürününüz / Uzaktan Kumanda</p>
      <h1>Uzaktan Kumanda</h1>
      <Box className="flex-container">
        <img src={uzaktan_kumanda} alt="Uzaktan Kumanda" className="in-page-img padding-10" />
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
