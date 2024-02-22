import React from "react";
import "../style.css";
import { not, ol1, ol2, notlar } from "./ZamanKaydırmaVeSürekliKayıtİleProgramlarınDuraklatılması_";
import { Box } from "@mui/material";

export default function ZamanKaydırmaVeSürekliKayıtİleProgramlarınDuraklatılması() {
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / Zaman Kaydırma Ve Sürekli Kayıt İle Programların Duraklatılması</p>
      <Box className="container">
        <h1>Zaman Kaydırma Ve Sürekli Kayıt İle Programların Duraklatılması</h1>
        <p>
          İzlediğiniz bir programı duraklatabilirsiniz. Örneğin bir film seyrederken telefon çaldı, filmi durdurup hiçbir şey kaçırmadan kaldığınız
          yerden devam edin. Son sahne görüntüsü durdurulur ve zaman kaydırma harici veri ortamına kaydedilir.
        </p>
        <p>
          Sürekli kayıt özelliği ile TV o an izlemekte olduğunuz kanalı harici veri ortamında oluşturduğunuz zaman kaydırma belleği kadar kaydeder. 
          Böylece izlemekte olduğunuz kanalda geriye doğru gidebilirsiniz.
        </p>
        <h2>Not:</h2>
        <ul>
        {not.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
        <ol>
        {ol1.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
        <h2>Notlar:</h2>
        <ul>
        {notlar.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
        <ol start="3">
        {ol2.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
      </Box>
    </Box>
  );
}
