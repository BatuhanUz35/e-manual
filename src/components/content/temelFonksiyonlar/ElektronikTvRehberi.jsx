import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { notlar, ol } from "./ElektronikTvRehberi_";
import channel_direction from "../../../assets/images/icons/channel_direction.png";

export default function SinyalOlmadığındaOtomatikKapanma() {
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Elektronik TV Rehberi</p>
      <Box className="container">
        <h1>Elektronik TV Rehberi</h1>
        <p>
          Elektronik program rehberi, yayından aldığı sonraki hafta yayınlanacak olan tüm programlara
          genel bir bakış sunar (yalnızca dijital kanallar için).
        </p>
        <ol>
          <li>
            Elektronik TV rehberini başlatmak için kumanda üzerinde bulunan <img src={channel_direction} alt="Kanal Yön Tuşu" className="inline-icon" />
            düğmesine dik eksende basın.
          </li>
        </ol>
        <h2>Notlar:</h2>
        <ul>
        {notlar.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}

