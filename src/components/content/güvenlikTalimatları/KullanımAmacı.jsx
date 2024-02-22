import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ul } from "./KullanımAmacı_";

export default function KullanımAmacı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Güvenlik Talimatları / Kullanım Amacı</p>
      <Box className="container">
        <h1>Kullanım Amacı</h1>
        <ul>
        {ul.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
      </Box>
    </Box>
  );
}