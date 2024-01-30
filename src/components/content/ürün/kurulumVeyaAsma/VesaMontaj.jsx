import React from "react";
import "../../style.css";
import { Box } from "@mui/material";

export default function VesaMontaj() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Ürününüz / Kurulum veya Asma / VESA Montaj Kiti ile Montaj Hazırlığı</p>
      <Box className="container">
        <h1>VESA Montaj Kiti ile Montaj Hazırlığı</h1>
        <p classname="text">Montaj kiti satın alma bilgisi için yetkili bayii ile görüşün.</p>
        <p classname="text">Şunlara ihtiyacınız olacaktır:</p>
        <ul>
          <li>Bir makas,</li>
          <li>Bir yıldız başlı tornovida.</li>
        </ul>
        <h2>img gelcek</h2>
        <p classname="text">VESA montaj kiti için montaj talimatlarını izleyin</p>
        <ol>
          <li>
            Televizyonu, üzerindeki filmi çıkartmadan, ekran altta kalacak şekilde düzgün bir yere koyun.
          </li>
          <li>
            Makasları kullanarak arka taraftaki filmi keserek açın.
          </li>
          <li>
            Gerekli kabloları televizyonun konektörlerine bağlayın. Bu kılavuzdaki "Anten ve Elektrik Kablosunu Bağlama" bölümüne bakın.
          </li>
          <li>
            Kabloları, yere doğru asılı kalmayacakları şekilde bağlayın.
          </li>
          <li>
            VESA montaj kitini televizyona vidalayın ve montaj talimatlarına göre monte edin.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
