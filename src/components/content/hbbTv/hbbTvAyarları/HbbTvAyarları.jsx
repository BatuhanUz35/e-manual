import React from "react";
import "../../style.css";
import { ol, links } from "./HbbTvAyarları_";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory
} from "../../../../redux/menuSlice";

export default function HbbTvAyarları() {
  const dispatch = useDispatch();
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
            <Link to={link.url} className="link"
            onClick={() => {
              dispatch(select_item(link.focus_item));
              dispatch(activate_l1_subcategory(80000));
              dispatch(activate_l2_subcategory(80400));
              dispatch(focus_item(link.focus_item));    
            }}>
              {link.title}
            </Link>
          </Box>
          )})}
      </Box>
    </Box>
  );
}
