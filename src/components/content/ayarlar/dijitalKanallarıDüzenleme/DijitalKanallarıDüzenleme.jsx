import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { texts, links } from "./DijitalKanallarıDüzenleme_";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";

export default function DijitalKanallarıDüzenleme() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Dijital Kanalları Düzenleme</p>
      <Box className="container">
        <h1>Dijital Kanalları Düzenleme</h1>
        {texts.map((text) => {
            return <p>{text}</p>;
          })}
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
