import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ul } from "./Ambalajİmha_";

export default function Ambalajınİmha() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Çevre Talimatları ve Genel Bilgiler / Ambalajın İmha Edilmesi
        İle İlgili Bilgiler
      </p>
      <Box className="container">
        <h1>Ambalajın İmha Edilmesi İle İlgili Bilgiler</h1>
        <ul>
        {ul.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
