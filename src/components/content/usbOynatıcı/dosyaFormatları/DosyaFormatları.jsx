import React from "react";
import "../../style.css";
import { links } from "./DosyaFormatları_";
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

export default function DosyaFormatları() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Oynatıcı / Dosya Formatları</p>
      <Box className="container">
        <h1>Dosya Formatları</h1>
        <p>Televizyonunuzu aşağıdaki dosya formatlarıyla USB girişi üzerinden kullanabilirsiniz:</p>
        <h2>Ek bilgiler</h2>
        {links.map((link) => {
          return ( 
            <Box className="link-container">
            <LinkIcon />
            <Link to={link.url} className="link"
            onClick={() => {
              dispatch(select_item(link.focus_item));
              dispatch(activate_l1_subcategory(110000));
              dispatch(activate_l2_subcategory(110100));
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
