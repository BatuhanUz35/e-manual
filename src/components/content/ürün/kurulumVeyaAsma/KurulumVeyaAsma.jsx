import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function KurulumVeyaAsma() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ürününüz / Kurulum veya Asma</p>
      <Box className="container">
       <h1>Kurulum veya Asma</h1>
       <p classname="text">Ekrana direkt güneş ışığının yansımayacağı bir yer seçin.</p>
        <h2>Ek bilgiler</h2>
        <Box className="link-container">
          <LinkIcon /> <Link to="/ürün/kurulum-veya-asma/ayaklı-kurulum" className="link">Ayaklı Kurulum</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/ürün/kurulum-veya-asma/vesa-montaj" className="link">VESA Montaj Kiti ile Montaj Hazırlığı</Link>
        </Box>
      </Box>
    </Box>
  );
}
