import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./DtsDrc_";

export default function DtsDrc() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Ses Ayarları / DTS DRC</p>
      <Box className="container">
        <h1>DTS DRC</h1>
        En yüksek ses ile en alçak ses arasındaki aralığı ayarlar.
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
