import React from "react";
import "../style.css";

export default function YetkiliSatıcılar() {
  return (
    <div className="page">
      <p>
        Anasayfa / Çevre Talimatları ve Genel Bilgiler / Yetkili Satıcılar İçin
        Servis Bilgileri
      </p>
      <div className="container">
        <h1>Yetkili Satıcılar İçin Servis Bilgileri</h1>
        <p>
          Bu ürün aşağıdaki Avrupa birliği direktifleri ve regülasyonlarına
          uygundur:
        </p>
        <ul>
          <li>2014/53/AB sayılı Telsiz ekipmanları Direktifleri</li>
          <li>
            2009/125/EC: Enerji kullanan ürünler için eko-tasarım ile ilgili
            direktif ve aşağıdaki alt direktifler;
          </li>
          <li>
            278/2009: Harici güç kaynaklarının yüksüz durumdaki enerji tüketimi ve ortalama
            aktif verimi ile ilgili çevreye duyarlı tasarım gerekliliklerine dair regülasyon
            (AC/DC adaptörlü modeller için);
          </li>
          <li>
            642/2009: Televizyonlar ile ilgili çevreye duyarlı tasarım gerekliliklerine dair regülasyon.
          </li>
          <li>
            801/2013 Televizyonlar ile ilgili çevreye duyarlı tasarım gereklilikleri ile ilgili değişiklik regülasyonu.
          </li>
          <li>
            2010/30/EU: Enerji İle İlgili Ürünlerin Enerji Etiketlemesi direktifi ve aşağıdaki alt direktifler;
          </li>
          <li>
            1062/2010: Televizyonların enerji etiketlemesine dair regülasyon.
          </li>
          <li>
            2011/65/EU: Elektrik, elektronik ev ve ofis ekpimanları belirli tehlikeli maddelerin
            kullanılmasının kısıtlanması direktifi.
          </li>
        </ul>
      </div>
    </div>
  );
}
