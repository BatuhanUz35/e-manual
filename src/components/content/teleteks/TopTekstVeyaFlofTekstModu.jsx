import React from "react";
import "../style.css";
import { ol1, ol2 } from "./TopTekstVeyaFlofTekstModu_";
import info from "../../../assets/images/png/info.png";

export default function TopTekstVeyaFlofTekstModu() {
  return (
    <div className="page">
      <p>Anasayfa / Teleteks / TOP Tekst veya FLOF Tekst Modu</p>
      <div className="container">
        <h1>TOP Tekst veya FLOF Tekst Modu</h1>
        <ol>
          {ol1.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <div className="uyarı-başlık blue-bg">DUYURU</div>
        <div className="uyarı-container">
          <img src={info} alt="İnfo" className="icon"></img>
          <div>
            <p className="uyarı-içerik">
              Ekranın alt kısmında, kırmızı, yeşil ve ayrıca kanala bağlı olarak
              sarı ve mavi metin alanlarından oluşan bir bilgi satırı
              görüntülenir. Uzaktan kumandanızda bunlara karşılık gelen düğmeler
              bulunmaktadır.
            </p>
          </div>
        </div>
        <hr className="uyarı-bitiş blue-bg" />
        <ol start="3">
        {ol2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
