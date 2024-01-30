import React from "react";
import "../../style.css";
import { ol, links } from "./HbbTvAyarları_";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function HbbTvAyarları() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / HBBTV / HBBTV Ayarları</p>
      <Box className="container">
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
            <Box className="link-container">
            <LinkIcon />
            <Link to={link.url} className="link">
              {link.title}
            </Link>
          </Box>
          )})}
      </Box>
    </Box>
  );
}
