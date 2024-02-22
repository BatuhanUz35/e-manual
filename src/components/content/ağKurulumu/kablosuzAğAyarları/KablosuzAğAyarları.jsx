import React from "react";
import "../../style.css";
import { Box } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { ol, links } from "./KablosuzAğAyarları_";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";

export default function KablosuzAğAyarları() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / Ağ Kurulumu / Kablosuz Ağ Ayarları</p>
      <Box className="container">
        <h1>Kablosuz Ağ Ayarları</h1>
        <p>Kablosuz ağ ayarlarını yapmak için iki yol vardır.</p>
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
              dispatch(activate_l1_subcategory(link.focus_item - link.focus_item % 10000));
              dispatch(activate_l2_subcategory(link.focus_item - link.focus_item % 100));
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
