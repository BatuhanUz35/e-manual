import React from "react";
import "../style.css";
import battery from "../../../assets/images/safety/TV_icons_WEEE_battery.png";

export default function PilAtıkları() {
  return (
    <div className="page">
      <p>Anasayfa / Çevre Talimatları ve Genel Bilgiler / Pil Atıkları ile İlgili Bilgiler</p>
      <div className="container">
        <h1>Pil Atıkları ile İlgili Bilgiler</h1>
        <div className="uyarı-başlık mavi">DUYURU</div>
        <div className="uyarı-container">
          <img src={battery} alt="battery" className="icon"></img>
          <div>
            <p className="uyarı-içerik">
              Pilleri, evsel atıklarla birlikte atmayın. Kullanılmış piller, perakende
              mağazalarına veya genel toplama noktalarına teslim edilmelidir. Böylece çevrenin
              korunmasına yardımcı olabilirsiniz.
            </p>
            <p className="uyarı-içerik">
              Pil veya cihaz ambalajı üzerinde bulunan bu sembol, bu cihazla birlikte verilen
              pilin evsel atık olarak değerlendirilmemesi gerektiğini göstermektedir.Bazı piller
              üzerinde, bu sembol kimyasal bir sembolle birlikte kullanılabilir. Pillerin içindeki 
              cıva oranı %0,0005'den fazlaysa cıva için HG kimyasal sembolü, kurşun oranı %0,004'ten
              fazlaysa kurşun için Pb kimyasal sembolü eklenir.
            </p>
          </div>
        </div>
        <hr className="uyarı-bitiş mavi"/>
      </div>
    </div>
  );
}
