import React from "react";
import "../style.css";
import { Circle } from "@mui/icons-material";
import down from "../../../assets/images/png/down.png";
import right from "../../../assets/images/png/right.png";
import left from "../../../assets/images/png/left.png";
import tv_icon from "../../../assets/images/png/tv_icon.png";
import back from "../../../assets/images/png/back.png";

export default function SinyalOlmadığındaOtomatikKapanma() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Elektronik TV Rehberi</p>
      <div className="container">
        <h1>Elektronik TV Rehberi</h1>
        <p>
          Elektronik program rehberi, yayından aldığı sonraki hafta yayınlanacak olan tüm programlara
          genel bir bakış sunar (yalnızca dijital kanallar için).
        </p>
        <ol>
          <li>
            Elektronik TV rehberini başlatmak için kumanda üzerinde bulunan <h2>img gelcek</h2>
            düğmesine dik eksende basın.
          </li>
        </ol>
        <h2>Notlar:</h2>
        <ul>
          <li>
            Her kanal detaylı bir TV rehberi sunmaz.
          </li>
          <li>
            Çoğu yayıncı günlük programı vermekle birlikte ayrıntılı açıklamalar yapmaz.
          </li>
          <li>
            Hiçbir bilgi vermeyen yayıncılar bile vardır.
          </li>
        </ul>
        <ol>
          <li>
            <img src={down} alt="Yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/>
            {" "} ile kanal seçin.
            <h4>Not:</h4>
            <ul>
              <li>
                Asıl program hakkındaki bilgi, seçili televizyon kanalında görüntülenir.
              </li>
            </ul>
          </li>
          <li>
            Sonraki program hakkındaki bilgileri seçmek için <img src={right} alt="Sağ" className="inline-icon"/>
            {" "}düğmesine, mevcut programa ait bilgilere dönmek için ise <img src={left} alt="Sol" className="inline-icon"/>
            {" "}düğmesine basın.
          </li>
          <li>
            Önceki günün programlarını görüntülemek için <Circle className="inline-icon button-red button"/> (kırmızı), 
            {" "}sonraki günün programlarını görüntülemek için <Circle className="inline-icon button-green button"/> (yeşil)
            {" "}düğmesine basın.
          </li>
          <li>
            Programları filtrelemek için <Circle className="inline-icon button-blue button"/> (mavi) düğmesine basın.
          </li>
          <li>
            Yayına dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            {" "}<img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}

