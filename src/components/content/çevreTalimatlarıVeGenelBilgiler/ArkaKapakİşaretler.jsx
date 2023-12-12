import React from "react";
import "../style.css";
import çift_izolasyon from "../../../assets/images/safety/TV_icons_Double_isolation.png";
import alternatif_akım from "../../../assets/images/safety/TV_icons_AC.png";
import doğru_akım from "../../../assets/images/safety/TV_icons_DC.png";

export default function ArkaKapakİşaretler() {
  return (
    <div className="page">
      <p>
        Anasayfa / Çevre Talimatları ve Genel Bilgiler / Cihazın Arka Kapağında
        Bulunabilecek İşaretler ile İlgili Bilgiler
      </p>
      <div className="container">
        <h1>
          Cihazın Arka Kapağında Bulunabilecek İşaretler ile İlgili Bilgiler
        </h1>
        <div className="uyarı-başlık mavi">
          DUYURU
        </div>
        <div className="uyarı-container">
          <img src={çift_izolasyon} alt="çift izolasyon" className="icon"></img>
          <div>
            <h4 className="uyarı-içerik">
              Çift izolasyon işareti
            </h4>
            <p className="uyarı-içerik">
              Topraklama gerekliliği olmayan ürün olduğunu belirtir.
            </p>
          </div>
        </div>
        <hr className="uyarı-bitiş mavi"/>
        <div className="uyarı-başlık mavi">
          DUYURU
        </div>
        <div className="uyarı-container">
          <img src={alternatif_akım} alt="alternatif akım" className="icon"></img>
          <div>
            <h4 className="uyarı-içerik">
              Alternatif akım işareti
            </h4>
            <p className="uyarı-içerik">
              Şebeke voltajı ile çalıştığını belirtir.
            </p>
          </div>
        </div>
        <hr className="uyarı-bitiş mavi"/>
        <div className="uyarı-başlık mavi">
          DUYURU
        </div>
        <div className="uyarı-container">
          <img src={doğru_akım} alt="doğru akım" className="icon"></img>
          <div>
            <h4 className="uyarı-içerik">
              Doğru akım işareti
            </h4>
            <p className="uyarı-içerik">
              Sadece ürünle birlikte verilen AC / DC adaptör ile çalıştığını belirtir.
            </p>
          </div>
        </div>
        <hr className="uyarı-bitiş mavi"/>
      </div>
    </div>
  );
}
