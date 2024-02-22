import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import dvbs_uydu_anten_bağlantısı from "../../../../assets/images/in-page-images/dvbs_uydu_anten_bağlantısı.png"

export default function DvbsAntenBağlantııs() {
  return (
    <Box className="page">
      <p>Ana sayfa / Ürününüz / Anten ve Elektrik Kablosunu Bağlama / DVB-S Uydu Anten Bağlantısı</p>
      <Box className="container">
      <h1>DVB-S Uydu Anten Bağlantısı</h1>
      <img src={dvbs_uydu_anten_bağlantısı} alt="DVB-S Uydu Anten Bağlantısı" className="in-page-img" />
      <ol>
        <li>
          Dijital uydu kanlları (DVB-S) için uydu anteni kablosunu televizyon üzerindeki <b>SATELLITE </b>
          anten girişine takın.
        </li>
      </ol>
      </Box>
    </Box>
  );
}
