import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function Paketinİçindekiler() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ürününüz / Paketin İçindekiler</p>
      <Box className="container">
        <h1>Paketin İçindekiler</h1>
        <h2>img gelcek</h2>
        <table>
          <tr class="row">
            <td class="column-sm">1</td>
            <td class="column-l">Televizyon.</td>
            <td class="column-sm">2</td>
            <td class="column-l">Uzaktan kumanda</td>
          </tr>
          <tr class="row">
            <td class="column-sm">3</td>
            <td class="column-l">Ayak</td>
            <td class="column-sm">4</td>
            <td class="column-l">Uzaktan kumanda için pil</td>
          </tr>
          <tr class="row">
            <td class="column-sm">5</td>
            <td class="column-l">Ayak için vidalar ve montaj talimatları</td>
            <td class="column-sm">6</td>
            <td class="column-l">Kolay kullanım kılavuzu</td>
          </tr>
          <tr class="row">
            <td class="column-sm">7</td>
            <td class="column-l">Şebeke kablosu</td>
            <td class="column-sm"></td>
            <td class="column-l"></td>
          </tr>
          </table>
      </Box>
    </Box>
  );
}
