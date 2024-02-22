import React from "react";
import "../../style.css";
import { ol } from "./KayıtZamanlayıcısınınSilinmesi_";
import { Box } from "@mui/material";


export default function KayıtZamanlayıcısınınSilinmes() {
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / Kayıt Zamanlayıcısı / Kayıt Zamanlayıcısının Silinmesi</p>
      <Box className="container">
        <h1>Kayıt Zamanlayıcısının Silinmesi</h1>
        <p>Programlanmış zamanlayıcıları silebilirsiniz.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
