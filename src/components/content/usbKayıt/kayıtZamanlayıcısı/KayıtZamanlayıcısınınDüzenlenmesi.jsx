import React from "react";
import "../../style.css";
import { ol } from "./KayıtZamanlayıcısınınDüzenlenmesi_";
import { Box } from "@mui/material";


export default function KayıtZamanlayıcısınınDüzenlenmesi() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Kayıt / Kayıt Zamanlayıcısı / Kayıt Zamanlayıcısının Düzenlenmesi</p>
      <Box className="container">
        <h1>Kayıt Zamanlayıcısının Düzenlenmesi</h1>
        <p classname="text">Programlanmış zamanlayıcıları değiştirebilirsiniz.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
