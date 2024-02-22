import React from "react";
import "./style.css";
import { Box, Table, TableCell, TableRow } from "@mui/material";

export default function EkBilgiler() {
 
  return (
    <Box className="page">
      <p clasName="text">Ana sayfa / Ek Bilgiler</p>
      <Box className="container">
        <h1>Ek Bilgiler</h1>
        <Table>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Varsayılan Uydu</b></TableCell>
            <TableCell class="width_50 table-cell">15</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>LNB Güç Kaynağı</b></TableCell>
            <TableCell class="width_50 table-cell">13/18V, 14/19V*, maksimum 500 mA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>LNB Geçiş Sinyali</b></TableCell>
            <TableCell class="width_50 table-cell">0/22 kHz 650 mV +/- 250 mV Vpp</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>DiSEqC</b></TableCell>
            <TableCell class="width_50 table-cell">1.0 çalışma, 1.1 çalışma, 1.2 çalışma</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell" colSpan="2"><b>Dijital Yayın Alım Aralıkları</b></TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell" colSpan="2"><b>Uydu (DVB-S)</b></TableCell>
          </TableRow> 
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Ku Bandı</b></TableCell>
            <TableCell class="width_50 table-cell">10.700 MHz … 12.750 MHz</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Modülasyon</b></TableCell>
            <TableCell class="width_50 table-cell">DVBS QPSK, DVBS2 QPSK, 8 PSK</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>IF Bandı</b></TableCell>
            <TableCell class="width_50 table-cell">950 MHz … 2150 MHz</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Sinyal Seviyesi</b></TableCell>
            <TableCell class="width_50 table-cell">-25 dBm … -65 dBM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell" colSpan="2"><b>Kablo (DVB-C)</b></TableCell>
          </TableRow> 
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Genel Bant</b></TableCell>
            <TableCell class="width_50 table-cell">110 MHz … 862 MHz</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Modülasyon</b></TableCell>
            <TableCell class="width_50 table-cell">16 QAM, 32 QAM, 64 QAM, 128 QAM, 256 QAM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Sembol Oranı</b></TableCell>
            <TableCell class="width_50 table-cell">4.0 Msym/s … 7.2 Msym/s</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell" colSpan="2"><b>Kablo (DVB-C)</b></TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Genel Bant</b></TableCell>
            <TableCell class="width_50 table-cell">110 MHz … 862 MHz</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Modülasyon</b></TableCell>
            <TableCell class="width_50 table-cell">16 QAM, 32 QAM, 64 QAM, 128 QAM, 256 QAM</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Sembol Oranı</b></TableCell>
            <TableCell class="width_50 table-cell">4.0 Msym/s … 7.2 Msym/s</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell" colSpan="2"><b>Karasal (DVB-T2)*</b></TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>UHF/VHF-Bandı</b></TableCell>
            <TableCell class="width_50 table-cell">Bant Genişliği 7 MHz ve 8 MHz</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>FFT Boyutu</b></TableCell>
            <TableCell class="width_50 table-cell">2 k, 8 k</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Modülasyon</b></TableCell>
            <TableCell class="width_50 table-cell">16 QAM, 64 QAM, 256 QAM, QPSK</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Koruma Aralığı</b></TableCell>
            <TableCell class="width_50 table-cell">1/4, 19/256, 1/8, 19/128, 1/16, 1/32, 1/128</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell" colSpan="2"><b>Kanal Hafızası</b></TableCell>
          </TableRow> 
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Uydu (DVB-S)</b></TableCell>
            <TableCell class="width_50 table-cell">6000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Kablo (DVB-C)</b></TableCell>
            <TableCell class="width_50 table-cell">1000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Karasal (DVB-T)</b></TableCell>
            <TableCell class="width_50 table-cell">1000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Analog</b></TableCell>
            <TableCell class="width_50 table-cell">99</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell" colSpan="2"><b>Desteklenen Medya Formatları</b></TableCell>
          </TableRow> 
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Resim</b></TableCell>
            <TableCell class="width_50 table-cell">jpg/jpe, bmp, png</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Müzik</b></TableCell>
            <TableCell class="width_50 table-cell">m4a, aac</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell"><b>Video</b></TableCell>
            <TableCell class="width_50 table-cell">mov, xvid, mpg, mpe, vob, dat, TableRowp, ts, avi, mp4, mkv</TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="width_50 table-cell" colSpan="2">
              <p>(*) Opsiyoneldir tüm ürünlerde mevcut değildir.</p>
              <p>Teknik değişiklik ve hata yapma hakkı saklıdır.</p>  
            </TableCell>
          </TableRow>
        </Table>
      </Box>
    </Box>
  );
}
