import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ul } from "./ElektromanyetikGürültü_";

export default function ElektromanyetikGürültü() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Elektromanyetik
        Gürültü İle İlgili Bilgiler
      </p>
      <Box className="container">
        <h1>Elektromanyetik Gürültü İle İlgili Bilgiler</h1>
        <ul>
          {ul.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
