import React from "react";
import "../style.css";
import { ol, notlar } from "./PcİleChromeTarayıcıSekmesiniTvnizdeYayınlama_";
import { Box } from "@mui/material";

export default function PcİleChromeTarayıcıSekmesiniTvnizdeYayınlama() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Chromecast Built-in™ / PC ile Chrome Tarayıcı Sekmesini TV'nizde Yayınlama
      </p>
      <Box className="container">
        <h1>PC ile Chrome Tarayıcı Sekmesini TV'nizde Yayınlama</h1>
        <p>
        Chrome sekmesini veya PC ekranınızı Chromecast ile TV'nizde gösterebilirsiniz.
        </p>
        <p>
        Çoğu web içeriğini gösterebilirsiniz, bazı eklentiler çalışmaz.
        </p>
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
