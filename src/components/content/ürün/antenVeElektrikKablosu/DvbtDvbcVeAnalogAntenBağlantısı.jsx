import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import dvbt_dvbc_ve_analog_anten_bağlantısı from "../../../../assets/images/in-page-images/dvbt_dvbc_ve_analog_anten_bağlantısı.png"

export default function DvbtDvbcVeAnalogAntenBağlantııs() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ürününüz / Anten ve Elektrik Kablosunu Bağlama / DVB-T, DVB-C ve Analog Anten Bağlantısı</p>
      <Box className="container">
      <h1>DVB-T, DVB-C ve Analog Anten Bağlantısı</h1>
      <img src={dvbt_dvbc_ve_analog_anten_bağlantısı} alt="DVB-T, DVB-C ve Analog Anten Bağlantısı" className="in-page-img" />
      <ol>
        <li>
          Karasal dijital kanalları (DVB-T), Kablolu dijital kanalları (DVB-C) veya Analog yayın
          kanalları için anten kablosunu <b>ANT IN </b> girişine takın.
        </li>
      </ol>
      <h2>Not:</h2>
      <ul>
        <li>
          İç mekan antenini bağlarken, yayını en iyi şekilde alana kadar anteni farklı konumlara çevirmeniz gerekebilir.
        </li>
      </ul>
      </Box>
    </Box>
  );
}
