import React from "react";
import "../../style.css";
import { ol, not, ol2, notlar} from "./ElektronikProgramRehberiKullanarakKayıtZamanlayıcıEklenmesi_";
import { Box } from "@mui/material";


export default function ElektronikProgramRehberiKullanarakKayıtZamanlayıcıEklenmesi() {
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / Kayıt Zamanlayıcısı / Elektronik Program Rehberi Kullanarak Kayıt Zamanlayıcı Eklenmesi</p>
      <Box className="container">
        <h1>Elektronik Program Rehberi Kullanarak Kayıt Zamanlayıcı Eklenmesi</h1>
        <p>
          Kayıt için elektronik program rehberi bilgileri kullanılabilir.
        </p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          {not.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
        <ol start="6">
          {ol2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <ul>
          {notlar.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      </Box>
    </Box>
  );
}
