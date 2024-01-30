import React from "react";
import "../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function Ayarlar() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ayarlar</p>
      <Box className="container">
        <h1>Ayarlar</h1>
        <h2>Ek bilgiler</h2>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/hazırlık" className="link">
            Hazırlık
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/kurulum" className="link">
            İlk Kurulum ve Televizyonu Ayarlama
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/dijital-kanalları-düzenleme" className="link">
            Dijital Kanalları Düzenleme
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/görüntü-ayarları" className="link">
            Görüntü Ayarları
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/ayarlar/ses-ayarları" className="link">
            Ses Ayarları
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
