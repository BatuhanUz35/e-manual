import React from "react";
import "../style.css";
import { texts, not_1, notlar, not_2 } from "./HbbTvKullanımı_";

export default function HbbTvKullanımı() {
  return (
    <div className="page">
      <p>Anasayfa / HBBTV / HbbTV'nin Kullanımı</p>
      <div className="container">
        <h1>HbbTV'nin Kullanımı</h1>
        {texts.map((text) => {
          return <p>{text}</p>;
        })}
        <h2>Not:</h2>
        <ul>
        {not_1.ul.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
        <ol>
        {not_1.ol.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
        <h2>Notlar:</h2>
        <ul>
        {notlar.ul.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
        <ol>
        {notlar.ol.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ol>
        <h2>Not:</h2>
        <ul>
        {not_2.ul.map((li) => {
          return (
              <li>{li}</li>
          );
        })}
        </ul>
      </div>
    </div>
  );
}
