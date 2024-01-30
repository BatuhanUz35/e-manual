import React from "react";
import "../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function Ürün() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ürününüz</p>
      <Box className="container">
       <h1>Ürününüz</h1>
        <h2>Ek bilgiler</h2>
        <Box className="link-container">
          <LinkIcon /> <Link to="/ürün/paketin-içindekiler" className="link">Paketin İçindekiler</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/ürün/kurulum-veya-asma" className="link">Kurulum veya Asma</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/ürün/uzaktan-kumanda-pil" className="link">Uzaktan Kumandaya Pillerin Takılması</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/ürün/ürün-tanıtım" className="link">Ürün Tanıtımı</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/ürün/tuş-takımı" className="link">Ürün Tanıtımı</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/ürün/anten-ve-elektrik-kablosu" className="link">Anten ve Elektrik Kablosunu Bağlama</Link>
        </Box>
        <Box className="link-container">
          <LinkIcon /> <Link to="/ürün/uzaktan-kumanda" className="link">Uzaktan Kumanda</Link>
        </Box>
      </Box>
    </Box>
  );
}