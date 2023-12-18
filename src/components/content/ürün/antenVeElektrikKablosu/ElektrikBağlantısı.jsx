import React from "react";
import "../../style.css";
import elektrik from "../../../../assets/images/safety/voltage_voltage_new.png";

export default function ElektrikBağlantısı() {
  return (
    <div className="page">
      <p>
        Anasayfa / Ürününüz / Anten ve Elektrik Kablosunu Bağlama / Elektrik
        Bağlantısı
      </p>
      <div className="container">
        <h1>Elektrik Bağlantısı</h1>
        <h2>img gelcek</h2>
        <ol>
          <li>
            Elektrik kablosunu <b>AC IN </b> girişine takın.
          </li>
          <li>
            Elektrik kablosunu duvardaki prize takın.
          </li>
        </ol>
        <div className="uyarı-başlık gri-bg">TEHLİKE</div>
        <div className="uyarı-container">
          <img src={elektrik} alt="electric" className="icon"></img>
          <div>
            <p className="uyarı-içerik">
              Cihazı elektrik prizine yalnızca harici cihazları ve anteni bağladıktan sonra takın.
            </p>
            <p className="uyarı-içerik">
              Yürürlükteki güvenlik standartlarını karşılamayan adaptör fişi ya da uzatma kablosu kullanmayın.
              Elektrk kablosunun üzerinde değişiklik yapmayın
            </p>
          </div>
        </div>
        <hr className="uyarı-bitiş gri-bg"/>
      </div>
    </div>
  );
}
