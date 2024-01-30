import React from "react";
import "../style.css";
import { Box } from "@mui/material";

export default function ÜrünTanıtımı() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ürününüz / Ürün Tanıtımı</p>
      <Box className="container">
        <h1>Ürün Tanıtımı</h1>
        <h2>img gelcek</h2>
        <table>
          <tr class="row">
            <td class="column-sm">1</td>
            <td class="column-l">Şebeke kablosu girişi.</td>
            <td class="column-sm">2</td>
            <td class="column-l">Servis amaçlıdır.</td>
          </tr>
          <tr class="row">
            <td class="column-sm">3</td>
            <td class="column-l">Ağ bağlantısı.</td>
            <td class="column-sm">4</td>
            <td class="column-l">Optik ses çıkışı.</td>
          </tr>
          <tr class="row">
            <td class="column-sm">5</td>
            <td class="column-l">Harici veri ortamı için USB girişi.</td>
            <td class="column-sm">6</td>
            <td class="column-l">Dijital ses ve görüntü verileri için HDMI giriş.</td>
          </tr>
          <tr class="row">
            <td class="column-sm">7</td>
            <td class="column-l">Dijital ses ve görüntü verileri için HDMI girişi.</td>
            <td class="column-sm">8</td>
            <td class="column-l">Uydu anteni sinyal girişi. Tek kablolu SCR sistemi için uygundur.</td>
          </tr>
          <tr class="row">
            <td class="column-sm">9</td>
            <td class="column-l">Anten kablosu girişi (karasal anten veya kablo bağlantısı).</td>
            <td class="column-sm">10</td>
            <td class="column-l">Kulaklık çıkışı.</td>
          </tr>
          <tr class="row">
            <td class="column-sm">11</td>
            <td class="column-l">Veri ortamı ve klavye için USB girişi..</td>
            <td class="column-sm">12</td>
            <td class="column-l">Dijital ses ve görüntü verileri için HDMI girişi.</td>
          </tr>
          <tr class="row">
            <td class="column-sm">13</td>
            <td class="column-l">Şifreli kanalları alma amaçlı CA modül girişi.</td>
            <td class="column-sm"></td>
            <td class="column-l"></td>
          </tr>
        </table>
      </Box>
    </Box>
  );
}
