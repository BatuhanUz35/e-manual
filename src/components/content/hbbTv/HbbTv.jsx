import React from "react";
import "../style.css";
import { links } from "./HbbTv_";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function HbbTv() {
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / HBBTV</p>
      <Box className="container">
        <h1>HBBTV</h1>
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
