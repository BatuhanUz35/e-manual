import React from "react";
import "../style.css";
import { Box, Table, TableCell, TableRow } from "@mui/material";
import paketin_içindekiler from "../../../assets/images/in-page-images/paketin_içindekiler.png"

export default function Paketinİçindekiler() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ürününüz / Paketin İçindekiler</p>
      <Box className="container">
        <h1>Paketin İçindekiler</h1>
        <img src={paketin_içindekiler} alt="Paketin İçindekiler" className="in-page-img" />
        <Table>
          <TableRow >
            <TableCell class="column-sm table-cell">1</TableCell>
            <TableCell class="table-cell">Televizyon.</TableCell>
            <TableCell class="column-sm table-cell">2</TableCell>
            <TableCell class="table-cell">Uzaktan kumanda</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="column-sm table-cell">3</TableCell>
            <TableCell class="table-cell">Ayak</TableCell>
            <TableCell class="column-sm table-cell">4</TableCell>
            <TableCell class="table-cell">Uzaktan kumanda için pil</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="column-sm table-cell">5</TableCell>
            <TableCell class="table-cell">Ayak için vidalar ve montaj talimatları</TableCell>
            <TableCell class="column-sm table-cell">6</TableCell>
            <TableCell class="table-cell">Kolay kullanım kılavuzu</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="column-sm table-cell">7</TableCell>
            <TableCell class="table-cell">Şebeke kablosu</TableCell>
            <TableCell class="column-sm table-cell"></TableCell>
            <TableCell class="table-cell"></TableCell>
          </TableRow>
          </Table>
      </Box>
    </Box>
  );
}
