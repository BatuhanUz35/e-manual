import React from "react";
import "../style.css";
import { ol } from "./ChromecastİleTvyiAçma_";
import { Box } from "@mui/material";
import home from "../../../assets/images/icons/home.png";
import back from "../../../assets/images/icons/back.png";

export default function ChromecastİleTvyiAçma() {
  return (
    <Box className="page">
      <p>
        Ana sayfa / Chromecast Built-in™ / Chromecast ile TV'yi Açma
      </p>
      <Box className="container">
        <h1>Chromecast ile TV'yi Açma</h1>
        <p>
          TV bekleme (stand-by) konumunda ilken Chromecast ile TV'ye içerik
          gönderip TV'nin açılmasını saylayabilirsiniz.
        </p>
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            Bu Ayar Açık olarak ayarlandığında TV'nizin güç tüketimi artabilir.
          </li>
        </ul>
        <ol start="5">
          Önceki menüye dönmek için{" "}
          <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne
          dönmek için <img src={home} alt="Home" className="inline-icon" />{" "}
          düğmesine basın.
        </ol>
      </Box>
    </Box>
  );
}
