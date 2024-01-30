import React from "react";
import "../../style.css";
import { ol1, not, ol2} from "./BilgileriManuelGirerekKayıtZamanlayıcıEklenmesi_";
import { Box } from "@mui/material";


export default function BilgileriManuelGirerekKayıtZamanlayıcıEklenmesi() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Kayıt / Kayıt Zamanlayıcısı / Bilgileri Manuel Girerek Kayıt Zamanlayıcı Eklenmesi</p>
      <Box className="container">
        <h1>Bilgileri Manuel Girerek Kayıt Zamanlayıcı Eklenmesi</h1>
        <ol>
          {ol1.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          {not.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
        <ol start="5">
          {ol2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
