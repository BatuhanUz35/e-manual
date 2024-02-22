import React from "react";
import "../style.css";
import { Box, Table, TableCell, TableRow } from "@mui/material";
import ürün_tanıtımı from "../../../assets/images/in-page-images/ürün_tanıtımı.png"

export default function ÜrünTanıtımı() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ürününüz / Ürün Tanıtımı</p>
      <Box className="container">
        <h1>Ürün Tanıtımı</h1>
        <img src={ürün_tanıtımı} alt="Ürün Tanıtımı" className="in-page-img" />
        <Table>
          <TableRow>
            <TableCell class="column-sm table-cell">1</TableCell>
            <TableCell class="table-cell">Şebeke kablosu girişi.</TableCell>
            <TableCell class="column-sm table-cell">2</TableCell>
            <TableCell class="table-cell">Servis amaçlıdır.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="column-sm table-cell">3</TableCell>
            <TableCell class="table-cell">Ağ bağlantısı.</TableCell>
            <TableCell class="column-sm table-cell">4</TableCell>
            <TableCell class="table-cell">Optik ses çıkışı.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="column-sm table-cell">5</TableCell>
            <TableCell class="table-cell">Harici veri ortamı için USB girişi.</TableCell>
            <TableCell class="column-sm table-cell">6</TableCell>
            <TableCell class="table-cell">Dijital ses ve görüntü verileri için HDMI giriş.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="column-sm table-cell">7</TableCell>
            <TableCell class="table-cell">Dijital ses ve görüntü verileri için HDMI girişi.</TableCell>
            <TableCell class="column-sm table-cell">8</TableCell>
            <TableCell class="table-cell">Uydu anteni sinyal girişi. Tek kablolu SCR sistemi için uygundur.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="column-sm table-cell">9</TableCell>
            <TableCell class="table-cell">Anten kablosu girişi (karasal anten veya kablo bağlantısı).</TableCell>
            <TableCell class="column-sm table-cell">10</TableCell>
            <TableCell class="table-cell">Kulaklık çıkışı.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="column-sm table-cell">11</TableCell>
            <TableCell class="table-cell">Veri ortamı ve klavye için USB girişi..</TableCell>
            <TableCell class="column-sm table-cell">12</TableCell>
            <TableCell class="table-cell">Dijital ses ve görüntü verileri için HDMI girişi.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="column-sm table-cell">13</TableCell>
            <TableCell class="table-cell">Şifreli kanalları alma amaçlı CA modül girişi.</TableCell>
            <TableCell class="column-sm table-cell"></TableCell>
            <TableCell class="table-cell"></TableCell>
          </TableRow>
        </Table>
      </Box>
    </Box>
  );
}
