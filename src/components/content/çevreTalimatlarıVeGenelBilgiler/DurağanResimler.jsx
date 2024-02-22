import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ul } from "./DurağanResimler_";

export default function DurağanResimler() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Durağan Resimler İle
        İlgili Bilgiler
      </p>
      <Box className="container">
        <h1>Durağan Resimler İle İlgili Bilgiler</h1>
        <ul>
          {ul.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
