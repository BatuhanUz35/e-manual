import React from "react";
import "../../style.css";
import { links } from "./ZamanKaydırmaDiskKurulumu_";
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


export default function ZamanKaydırmaDiskKurulumu() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / USB Kayıt / Zaman Kaydırma Disk Kurulumu</p>
      <Box className="container">
        <h1>Zaman Kaydırma Disk Kurulumu</h1>
        <p classname="text">Bir harici veri ortamını TV'ye ilk defa takıp zaman kaydırma için kullanacaksanız disk kurulumu
          yapılması gerekmektedir.
        </p>
        <h2>Ek bilgiler</h2>
        {links.map((link) => {
          return ( 
            <Box className="link-container">
            <LinkIcon />
            <Link to={link.url} className="link"
            onClick={() => {
              dispatch(select_item(link.focus_item));
              dispatch(activate_l1_subcategory(100000));
              dispatch(activate_l2_subcategory(100600));
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
