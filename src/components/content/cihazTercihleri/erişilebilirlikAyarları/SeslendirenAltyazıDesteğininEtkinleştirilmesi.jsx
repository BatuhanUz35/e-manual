import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol } from "./SeslendirenAltyazıDesteğininEtkinleştirilmesi_";

export default function SeslendirenAltyazıDesteğininEtkinleştirilmesi() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Erişilebilirlik Ayarları / Seslendiren Altyazı Desteğinin Etkinleştirilmesi
      </p>
      <Box className="container">
        <h1>Seslendiren Altyazı Desteğinin Etkinleştirilmesi</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
