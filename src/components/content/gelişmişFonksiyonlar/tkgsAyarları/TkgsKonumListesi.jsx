import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../../assets/images/png/tv_icon.png";
import back from "../../../../assets/images/png/back.png";
import down from "../../../../assets/images/png/down.png";
import one from "../../../../assets/images/png/one.png"
import zero from "../../../../assets/images/png/zero.png"
import check from "../../../../assets/images/png/check.png";

export default function TkgsKonumListesi() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / TKGS Ayarları / TKGS Konum Listesi</p>
      <div className="container">
        <h1>TKGS Konum Listesi</h1>
        <ol>
          <li>
            <b>TKGS Ayarı</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b>TKGS Konum Listesi</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <b>Konum eklemek için tıklayın</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b>Frekans</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="o" className="inline-icon xs"/> düğmeleriyle
            kanal konum listesi frekansı girip sanal klavyeden <img src={check} alt="Check" className="inline-icon sm"/> tuşunu
            seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b>Sembol Oranı (Ksym/s)</b>'yi seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b>Polarizasyon</b>'u seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            polarizasyonunuzu seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> Program Kimliği</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="o" className="inline-icon xs"/> düğmeleriyle
            kanal konum listesi frekansı girip sanal klavyeden <img src={check} alt="Check" className="inline-icon sm"/> tuşunu
            seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> Konumu Kaydet</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            TKGS konum listesi için birden fazla frekans girilebilir. Farklı frekanslar eklemek için 2 ila 11. adımları tekrarlayın.
          </li>
        </ul>
        <ol start="12">
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            yayına dönmek için <img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}

