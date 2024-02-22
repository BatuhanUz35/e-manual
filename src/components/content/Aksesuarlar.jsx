import React from "react";
import "./style.css";
import info from "../../assets/images/icons/info.png";
import { Box } from "@mui/material";
import { ol } from "./Aksesuarlar_";

export default function PilAtıkları() {
  return (
    <Box className="page">
      <p>Ana sayfa / Aksesuarlar </p>
      <Box className="container">
        <h1>Aksesuarlar</h1>
        <p>
        Televizyonunuza çeşitli aksesuarlar örneğin Bluetooth uzaktan kumanda, oyun kumandası, klavye veya mouse bağlayabilirsiniz. 
        Bu menüden bağladığınız aksesuarın durumun görüntüleyip ayarlar yapabilirsiniz.
        </p>
        <Box className="uyarı-başlık blue-bg">DUYURU</Box>
        <Box className="uyarı-container">
          <img src={info} alt="Info" className="icon"></img>
          <Box>
            <p className="uyarı-içerik">
             Aksesuarlar ayrı olarak satılmaktadır. Televizyon ile verilmemektedir. Daha ayrıntılı 
             satın alma bilgisi için televizyonu satın almış olduğunuz bayi ile iletişime geçin.
            </p>
          </Box>
        </Box>
        <hr className="uyarı-bitiş blue-bg"/>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </Box>
    </Box>
  );
}
