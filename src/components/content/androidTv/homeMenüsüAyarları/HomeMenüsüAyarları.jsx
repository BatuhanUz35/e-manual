import React from "react";
import "../../style.css";
import { ol, not, links } from "./HomeMenüsüAyarları_";
import { Box } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory
} from "../../../../redux/menuSlice";


export default function HomeMenüsüAyarları() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / Android TV / Home Menüsü Ayarları</p>
      <Box className="container">
        <h1>Home Menüsü Ayarları</h1>
        <ol>
        {ol.map((li) => {
          return ( 
            <li>{li}</li>
          )})}
        </ol>
          <h2>Not:</h2>
          <ul>
          {not.map((li) => {
          return ( 
            <li>{li}</li>
          )})}
          </ul>
          <h2>Ek bilgiler</h2>
          {links.map((link) => {
          return ( 
            <Box className="link-container">
            <LinkIcon />
            <Link to={link.url} className="link"
            onClick={() => {
              dispatch(select_item(link.focus_item));
              dispatch(activate_l1_subcategory(120000));
              dispatch(activate_l2_subcategory(120500));
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
