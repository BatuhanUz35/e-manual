import React from "react";
import "../../style.css";
import home from "../../../../assets/images/png/home.png"
import back from "../../../../assets/images/png/back.png";
import tv_icon from "../../../../assets/images/png/tv_icon.png"
import { Circle } from "@mui/icons-material";

export default function DownmixModu() {
  return (
    <div className="page">
      <p>Anasayfa / Ayarlar / Ses Ayarları / Downmix Modu</p>
      <div className="container">
        <h1>Downmix Modu</h1>
        <ol>
          <li>
            Ses menüsünden <b>Downmix Modu</b>'nu seçip <Circle className="inline-icon button"/> düğmesine basın. 
          </li>
          <li>
            <b>Stereo</b> veya <b>Surround Ses</b>'i seçip <Circle className="inline-icon button"/> düğmesiyle onaylayın.
          </li>
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/>, Home menüsüne dönmek
            için <img src={home} alt="home" className="inline-icon"/> veya TV yayınına dönmek için
            {" "}<img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}
