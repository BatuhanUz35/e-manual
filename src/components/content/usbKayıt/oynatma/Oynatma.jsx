import React from "react";
import "../../style.css";
import { links } from "./Oynatma_";
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

export default function Oynatma() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / Oynatma</p>
      <Box className="container">
        <h1>Oynatma</h1>
        <p>Kaydedilen programların tamamı harici veri ortamında saklanır. Harici veri ortamndaki arşivi <b>Kaydedilenler Listesi</b> menüsünden görüntüleyebilirsiniz.</p>
        <h2>Ek bilgiler</h2>
        {links.map((link) => {
          return ( 
            <Box className="link-container">
            <LinkIcon />
            <Link to={link.url} className="link"
            onClick={() => {
              dispatch(select_item(link.focus_item));
              dispatch(activate_l1_subcategory(100000));
              dispatch(activate_l2_subcategory(101000));
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
