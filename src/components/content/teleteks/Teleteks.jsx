import React from "react";
import "../style.css";
import { links } from "./Teleteks_";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

export default function Teleteks() {
  return (
    <div className="page">
      <p>Anasayfa / Teleteks</p>
      <div className="container">
        <h1>Teleteks</h1>
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
