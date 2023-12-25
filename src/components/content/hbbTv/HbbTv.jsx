import React from "react";
import "../style.css";
import { links } from "./HbbTv_";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

export default function HbbTv() {
  return (
    <div className="page">
      <p>Anasayfa / HBBTV</p>
      <div className="container">
        <h1>HBBTV</h1>
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
