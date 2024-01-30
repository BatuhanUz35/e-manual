import React from "react";
import "../style.css";
import usb from "../../../assets/images/in-page-images/usb.png";
import { texts, notlar, ol } from "./HariciVeriOrtamınınBağlanması_";
import { Box } from "@mui/material";

export default function HariciVeriOrtamınınBağlanması() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / USB Oynatıcı / Harici Veri Ortamının Bağlanması
      </p>
      <Box className="container">
        <h1>Harici Veri Ortamının Bağlanması</h1>
        {texts.map((text) => {
          return <p>{text}</p>;
        })}
        <h2>Notlar:</h2>
        <ul>
          {notlar.map((not) => {
            return <li>{not}</li>;
          })}
        </ul>
        <img src={usb} className="in-page-img" alt="Usb"></img>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
