import React from "react";
import "../style.css";
import electric from "../../../assets/images/safety/voltage_voltage_new.png";
import { Box } from "@mui/material";
import { texts, uyarı_texts } from "./ABDirektifleri_";

export default function ElektrikGüvenliği() {
  return (
    <Box className="page">
      <p>Ana sayfa / Çevre Talimatları ve Genel Bilgiler / AB Direktifleri</p>
      <Box className="container">
        <h1>AB Direktifleri</h1>
        {texts.map((text) => {
            return <p>{text}</p>;
          })}
        <Box className="uyarı-başlık blue-bg">DUYURU</Box>
        <Box className="uyarı-container" >
          <img src={electric} alt="electric" className="icon"></img>
          <Box>
          {uyarı_texts.map((uyarı_text) => {
            return <p className="uyarı-içerik">{uyarı_text}</p>;
          })}
          </Box>
        </Box>
        <hr className="uyarı-bitiş blue-bg"/>
      </Box>
    </Box>
  );
}
