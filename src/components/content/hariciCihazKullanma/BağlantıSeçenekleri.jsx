import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { texts, ul } from "./BağlantıSeçenekleri_";
import bağlantı from "../../../assets/images/in-page-images/bağlantı.png";

export default function BağlantıSeçenekleri() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Harici Cihaz Kullanma / Bağlantı Seçenekleri
      </p>
      <Box className="container">
        <h1>Bağlantı Seçenekleri</h1>
        {texts.map((text) => {
          return <p>{text}</p>;
        })}
        <ul>
        {ul.map((li) => {
          return <li>{li}</li>;
        })}
        </ul>
        <img src={bağlantı} alt="Bağlantı" className="in-page-img"/>
      </Box>
    </Box>
  );
}
