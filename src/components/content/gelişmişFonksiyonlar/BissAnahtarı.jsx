import React from "react";
import "../style.css";
import { Circle } from "@mui/icons-material";
import tv_icon from "../../../assets/images/png/tv_icon.png";
import back from "../../../assets/images/png/back.png";
import down from "../../../assets/images/png/down.png";
import one from "../../../assets/images/png/one.png"
import zero from "../../../assets/images/png/zero.png"
import check from "../../../assets/images/png/check.png";

export default function BissAnahtarı() {
  return (
    <div className="page">
      <p>Anasayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / BISS Anahtarı</p>
      <div className="container">
        <h1>BISS Anahtarı</h1>
        <p>Biss anahtarı bir şifreleme tekniğidir. Biss anahtarı ile şifrelenmiş bir frekansı Biss anahtarını girerek izleyebilirsiniz.</p>
        <h2>Not:</h2>
        <ul>
          <li>
            BISS Anahtarı sadece yayın kaynağı Uydu seçildiğinde menüde görüntülenir.
          </li>
        </ul>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/
            <img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle <b>BISS Anahtarı</b>'nı seçip
            {" "}<Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            Biss anahtarı eklemek için <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> Frekans</b>'ı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="o" className="inline-icon xs"/> düğmeleriyle
            Biss anahtarını gireceğiniz frekansı girip sanal klavyeden <img src={check} alt="Check" className="inline-icon sm"/> tuşunu
            seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> Sembol Oranı (Ksym/s)</b> seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="o" className="inline-icon xs"/> düğmeleriyle
            biss anahtarını gireceğiniz frekansın sembol oranını girip sanal klavyeden <img src={check} alt="Check" className="inline-icon sm"/>
            {" "} tuşunu seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> Polarizasyon</b>'u seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            biss anahtarını gireceğiniz frekansın polarizasyonunu seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> Program Kimliği</b>'ni seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="o" className="inline-icon xs"/> düğmeleriyle
            biss anahtarını gireceğiniz frekansın program kimliğini girip sanal klavyeden <img src={check} alt="Check" className="inline-icon sm"/>
            {" "} tuşunu seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> CW Anahtarı</b>'nı seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="o" className="inline-icon xs"/> düğmeleriyle
            biss anahtarını girip sanal klavyeden <img src={check} alt="Check" className="inline-icon sm"/> tuşunu seçip 
            {" "}<Circle className="inline-icon button"/> düğmesine basın.
          </li>
          <li>
            <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> Anahtarı Kaydet</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            BISS Anahtarı birden fazla frekans için girilebilir. Farklı frekanslara Biss anahtarı eklemek için 2 ila 13. 
            adımları tekrarlayın.
          </li>
        </ul>
        <ol start="14">
          <li>
            Önceki menüye dönmek için <img src={back} alt="geri" className="inline-icon"/> veya
            yayına dönmek için <img src={tv_icon} alt="tv" className="inline-icon"/> düğmesine basın.
          </li>
        </ol>
      </div>
    </div>
  );
}

