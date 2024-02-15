import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./KlavyeleriYönet_";

export default function KlavyeleriYönet() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Cihaz Tercihleri / Klavye Ayarları / Klavyeleri Yönet
      </p>
      <Box className="container">
        <h1>Klavyeleri yönet</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
