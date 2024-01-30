import React from "react";
import "../style.css";
import { links, texts } from "./Chromecast_";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory
} from "../../../redux/menuSlice";

export default function Chromecast() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Chromecast Built-in™</p>
      <Box className="container">
        <h1>Chromecast Built-in™</h1>
        {texts.map((text) => {
          return ( 
            <p>{text}</p>
          )})}
        <h2>Ek bilgiler</h2>
        {links.map((link) => {
          return ( 
            <Box className="link-container">
            <LinkIcon />
            <Link to={link.url} className="link"
            onClick={() => {
              dispatch(select_item(link.focus_item));
              dispatch(activate_l1_subcategory(130000));
              dispatch(activate_l2_subcategory(link.focus_item));
              dispatch(focus_item(link.focus_item));    
             
            }}
            >
              {link.title}
            </Link>
          </Box>
          )})}
      </Box>
    </Box>
  );
}
