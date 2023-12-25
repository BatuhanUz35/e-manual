import React from "react";
import "../../style.css";
import { ol, links } from "./HbbTvAyarları_";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

export default function HbbTvAyarları() {
  return (
    <div className="page">
      <p>Anasayfa / HBBTV / HBBTV Ayarları</p>
      <div className="container">
        <h1>HBBTV Ayarları</h1>
        <ol>
        {ol.map((li) => {
          return ( 
            <li>{li}</li>
          )})}
          </ol>
        <h2>Ek bilgiler</h2>
        {links.map((link) => {
          return ( 
            <div className="link-container">
            <LinkIcon />
            <Link to={link.url} className="link">
              {link.title}
            </Link>
          </div>
          )})}
      </div>
    </div>
  );
}
