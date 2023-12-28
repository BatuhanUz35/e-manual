import React from "react";
import "../../style.css";
import { ol } from "./CihazKimliğiniSıfırlama_";

export default function CihazKimliğiniSıfırlama() {
  return (
    <div className="page">
      <p>Anasayfa / HBBTV / HBBTV Ayarları / Cihaz Kimliğini Sıfırlama</p>
      <div className="container">
        <h1>Cihaz Kimliğini Sıfırlama</h1>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
