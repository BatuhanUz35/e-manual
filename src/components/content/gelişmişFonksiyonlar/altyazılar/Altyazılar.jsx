import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sub from "../../../../assets/images/icons/sub.png"
import { Box } from "@mui/material";

export default function Altyazılar() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Altyazılar</p>
      <Box className="container">
        <h1>Altyazılar</h1>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <b>Altyazı</b>'yı seçip <Circle className="inline-icon button"/>
            {" "} düğmesine basın.
            <Box>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Altyazı</b> menüsü görüntülenir.
            </Box>
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            TV modunda kumanda üzerinde bulunan <img src={sub} alt="Sub" className="inline-icon"/> düğmesine
            basarak <b>Altyazı</b> menüsünü açabilirsiniz.
          </li>
        </ul>
        <h2>Ek bilgiler</h2>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/altyazılar/analog-altyazı" className="link">
            Analog Altyazı
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/altyazılar/dijital-altyazı" className="link">
            Dijital Altyazı
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/altyazılar/dijital-altyazı-dili" className="link">
            Dijital Altyazı Dili
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/altyazılar/ikinci-dijital-altyazı-dili" className="link">
            İkinci Dijital Altyazı Dili
          </Link>
        </Box>
        <Box className="link-container">
          <LinkIcon />
          <Link to="/gelişmiş-fonksiyonlar/altyazılar/altyazı-türü" className="link">
            Altyazı Türü
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

