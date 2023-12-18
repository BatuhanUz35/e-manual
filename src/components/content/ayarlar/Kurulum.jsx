import React from "react";
import "../style.css";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import back from "../../../assets/images/png/back.png"
import home from "../../../assets/images/png/home.png"
import left from "../../../assets/images/png/left.png"
import { Circle } from "@mui/icons-material";

export default function Kurulum() {
  return (
    <div className="page">
      <p>Anasayfa / Ayarlar / İlk Kurulum ve Televizyonu Ayarlama</p>
      <div className="container">
        <h1>İlk Kurulum ve Televizyonu Ayarlama</h1>
        <ol>
          <li>Anten ve harici cihaz kablolarını bağlayın.</li>
          <li>Elektrik fişini prize takın.</li>
          <li>
            Televizyonu, uzaktan kumandadaki
            <PowerSettingsNewIcon className="inline-icon" /> düğmesiyle açın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Bir süre sonra ekranda <b>Hoş geldiniz</b> menüsü görüntülenir
            </div>
            <h2>img gelcek</h2>
          </li>
          <li>
            Dil seçimini yapın.
          </li>
          <li>
            Aksesuarlar menüsü görüntülenir. Bir Bluetooth aksesuar eşleştirmek istemiyorsanız 
            {" "}<img src={back} className="inline-icon"/> düğmesine basın.
          </li>
          <li>
            Bluetooth kumandayı eşleştirmek için {" "}<img src={home} className="inline-icon"/>
            ve {" "}<img src={left} className="inline-icon"/> düğmelerine aynı anda 5sn basılı tutun.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Kumanda üzerinde beyaz led yanıp sönmeye başlar
            </div>
          </li>
          <li>
            Bulunan Bluetooth cihazlar görüntülenir. <b>Android TV Remote Control'u</b> seçip 
            <Circle className="inline-icon button"/> düğmesine basın.
            <div>
              <ArrowForwardIcon className="inline-icon xs"/>
              Kumanda ile televizyon eşleştirme işlemi tamamlanır.
            </div>
          </li>
        </ol>
        <h2>Önemli:</h2>
        <ul>
          <li>
            Bluetooth kumandada eşleme sorunu yaşamanız durumunda kumandayı sıfırlanamanız gerekir,
            bunun için; kumandanın  {" "}<img src={home} className="inline-icon"/> ve {" "}<img src={left} className="inline-icon"/>
            düğmelerine aynı anda 5sn. basılı tutun.
          </li>
        </ul>
      </div>
    </div>
  );
}
