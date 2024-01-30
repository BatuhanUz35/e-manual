import React from "react";
import "../../style.css";
import elektrik from "../../../../assets/images/safety/voltage_voltage_new.png";
import { Box } from "@mui/material";

export default function ElektrikBağlantısı() {
  return (
    <Box className="page">
      <p classname="text">
        Ana sayfa / Ürününüz / Anten ve Elektrik Kablosunu Bağlama / Elektrik
        Bağlantısı
      </p>
      <Box className="container">
        <h1>Elektrik Bağlantısı</h1>
        <h2>img gelcek</h2>
        <ol>
          <li>
            Elektrik kablosunu <b>AC IN </b> girişine takın.
          </li>
          <li>
            Elektrik kablosunu duvardaki prize takın.
          </li>
        </ol>
        <Box className="uyarı-başlık gri-bg">TEHLİKE</Box>
        <Box className="uyarı-container">
          <img src={elektrik} alt="electric" className="icon"></img>
          <Box>
            <p className="uyarı-içerik">
              Cihazı elektrik prizine yalnızca harici cihazları ve anteni bağladıktan sonra takın.
            </p>
            <p className="uyarı-içerik">
              Yürürlükteki güvenlik standartlarını karşılamayan adaptör fişi ya da uzatma kablosu kullanmayın.
              Elektrk kablosunun üzerinde değişiklik yapmayın
            </p>
          </Box>
        </Box>
        <hr className="uyarı-bitiş gri-bg"/>
      </Box>
    </Box>
  );
}
