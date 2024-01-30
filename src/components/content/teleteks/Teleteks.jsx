import React from "react";
import "../style.css";
import { links } from "./Teleteks_";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function Teleteks() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Teleteks</p>
      <Box className="container">
        <h1>Teleteks</h1>
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
