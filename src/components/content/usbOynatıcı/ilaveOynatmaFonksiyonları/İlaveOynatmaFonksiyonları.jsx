import React from "react";
import "../../style.css";
import { links } from "./İlaveOynatmaFonksiyonları_";
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

export default function İlaveOynatmaFonksiyonları() {
  const dispatch = useDispatch();
  
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Oynatıcı / İlave Oynatma Fonksiyonları</p>
      <Box className="container">
        <h1>İlave Oynatma Fonksiyonları</h1>
        <p>Kullanılan dosya biçimlerine bağlı olarak, aşağıdaki ilave fonksiyonları kullanmak mümkündür.</p>
        <h2>Ek bilgiler</h2>
        {links.map((link) => {
          return ( 
            <Box className="link-container">
            <LinkIcon />
            <Link to={link.url} className="link"
                        onClick={() => {
                          dispatch(select_item(link.focus_item));
                          dispatch(activate_l1_subcategory(110000));
                          dispatch(activate_l2_subcategory(110600));
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
