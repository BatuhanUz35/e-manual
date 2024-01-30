import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function GüçAyarları() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Güç Ayarları</p>
      <Box className="container">
        <h1>Güç Ayarları</h1>
        <h2>Ek bilgiler</h2>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/güç-ayarları/uyku-zamanlayıcısı" className="link">
            Uyku Zamanlayıcısı
          </Link>      
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/güç-ayarları/görüntüyü-kapatma" className="link">
            Görüntüyü Kapatma
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/güç-ayarları/kapanma-zamanlayıcısı" className="link">
            Kapanma Zamanlayıcısı
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/temel-fonksiyonlar/güç-ayarları/sinyal-olmadığında-otomatik-kapanma" className="link">
            Sinyal Olmadığında Otomatik Kapanma
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
