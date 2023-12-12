import React from "react";
import "../style.css";
import electric from "../../../assets/images/safety/voltage_voltage_new.png";

export default function ElektrikGüvenliği() {
  return (
    <div className="page">
      <p>Anasayfa / Çevre Talimatları ve Genel Bilgiler / AB Direktifleri</p>
      <div className="container">
        <h1>AB Direktifleri</h1>
        <p>
          Bu ürün, 2014/53/EU, 2009/125/EC, 278/2009, 642/2009, 2017/1369/EU,
          1062/2010, 2011/65/EU, 2019/2013/EU, 2019/2021/EU, direktifleriyle uyumludur:
        </p>
        <p>
          Uygunluk beyanının (DoC) bir kopyasını elde etmek için;
        </p>
        <p>
          https://www.beko.com.tr/destek adresini ziyaret ediniz. Ürün modelinden arama kısmına
          kullanma kılavuzu kapağnda belirtilen model numarasını yazarak televizyon modelini
          aratıp uygunluk beyanına ulaşabilirsiniz.
        </p>
        <div className="uyarı-başlık mavi">DUYURU</div>
        <div className="uyarı-container" >
          <img src={electric} alt="electric" className="icon"></img>
          <div>
            <p className="uyarı-içerik">
              Bu cihaz aşağıdaki Avrupa ülkelerinde yasal düzenlemeler göz önünde bulundurularak kullanılabilir.
            </p>
            <p className="uyarı-içerik">
              AT, BE, BG, CH, CY, CZ, DE, DK, EE, ES, FI, FR, GB, GR, HU, IE, IS, IT, LI, LT,
              LU, LV, MT, NL, NO, PL, PT, RO, SE, SI, SK, HR, TR
            </p>
            <p className="uyarı-içerik">
              5150 - 5350 MHz bandı yalnızca iç mekanlarda kullanılabilir. (Wi-Fi/Bluetooth entegre model ya da
              Wi-Fi entegre model için). Bu cihaz Avrupa harici ülkelerde çalıştırılabilir.
            </p>
          </div>
        </div>
        <hr className="uyarı-bitiş mavi"/>
      </div>
    </div>
  );
}
