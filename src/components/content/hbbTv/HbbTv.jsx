import React from "react";
import "../style.css";
import { links } from "./HbbTv_";
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

export default function HbbTv() {
  const dispatch = useDispatch();
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
            <Link to={link.url} className="link"
            onClick={() => {
              dispatch(select_item(link.focus_item));
              dispatch(activate_l1_subcategory(80000));
              dispatch(activate_l2_subcategory(link.focus_item));
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
