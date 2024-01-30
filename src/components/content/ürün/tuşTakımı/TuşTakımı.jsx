import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import tuş_takımı from "../../../../assets/images/in-page-images/tuş_takımı.png";
import { Box } from "@mui/material";

export default function TuşTakımı() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ürününüz / Tuş Takımı</p>
      <Box className="container">
        <h1>Tuş Takımı </h1>
        <img src={tuş_takımı} alt="tuş takımı" className="in-page-img"></img>
        <h2>Ek bilgiler</h2>
        <Box className="link-container">
          <LinkIcon /> <Link to="/ürün/tuş-takımı/bekleme-konumu-açılma" className="link">Cihazın Bekleme Konumundan Açılması</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/ürün/tuş-takımı/bekleme-konumuna-alma" className="link">Cihazın Bekleme Konumuna Alınması</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/ürün/tuş-takımı/uyku-konumu" className="link">Cihazın Uyku Konumuna Alınması ve Açılması</Link>
        </Box>
      </Box>
    </Box>
  );
}
