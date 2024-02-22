import React from "react";
import "../style.css";
import { ul } from "./TelevizyonProgramlarınınKaydedilmesiVeOynatılması_";
import { Box } from "@mui/material";

export default function TelevizyonProgramlarınınKaydedilmesiVeOynatılması() {
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / Televizyon Programlarının Kaydedilmesi ve Oynatılmasıyla İlgili Bilgiler</p>
      <Box className="container">
        <h1>Televizyon Programlarının Kaydedilmesi ve Oynatılmasıyla İlgili Bilgiler</h1>
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
