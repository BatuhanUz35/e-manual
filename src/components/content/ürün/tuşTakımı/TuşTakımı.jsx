import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import tuş_takımı from "../../../../assets/images/in-page-images/tuş_takımı.png";
import { Box } from "@mui/material";
import { links } from "./TuşTakımı_";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";

export default function TuşTakımı() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / Ürününüz / Tuş Takımı</p>
      <Box className="container">
        <h1>Tuş Takımı </h1>
        <img src={tuş_takımı} alt="tuş takımı" className="in-page-img"></img>
        <h2>Ek bilgiler</h2>
        {links.map((link) => {
          return (
            <Box className="link-container">
              <LinkIcon />
              <Link
                to={link.url}
                className="link"
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
          );
        })}
      </Box>
    </Box>
  );
}
