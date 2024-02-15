import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import { ol, ol_2 } from "./AğŞifresiniGirerekManuelBağlantı_";
import { Circle } from "@mui/icons-material";

export default function AğŞifresiniGirerekManuelBağlantı() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ağ Kurulumu / Kablosuz Ağ Ayarları / Ağ Şifresini Girerek Manuel Bağlantı</p>
      <Box className="container">
        <h1>Ağ Şifresini Girerek Manuel Bağlantı</h1>
        <p>
        Bazı ağlar Statik IP adresi gerektirir. Ağınız Statik bir IP adresi gerektiriyorsa, <b>IP Adresi</b>, <b>Netmask</b> , <b>Gateway</b> ve <b>DNS</b> değerlerini 
        manuel olarak girmelisiniz. <b>IP Adresi</b>, <b>Netmask</b> , <b>Gateway</b> ve <b>DNS</b> değerlerini, (ISS) Internet Servis Sağlayıcınızdan alabilirsiniz.
        </p>
        <ol>
        {ol.map((li) => {
          return ( 
            <li>{li}</li>
          )})}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            Kullanılabilir ağlar arasında ağınızı görüntülenmiyorsa <b>Tümünü Göster</b>‘i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ul>
        <ol start={ol.length+1}>
        {ol_2.map((li) => {
          return ( 
            <li>{li}</li>
          )})}
        </ol>
      </Box>
    </Box>
  );
}
