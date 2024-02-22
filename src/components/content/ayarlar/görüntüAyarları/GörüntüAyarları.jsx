import React from "react";
import "../../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { ol_1, ol_2,links } from "./GörüntüAyarları_";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";

export default function GörüntüAyarları() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / Ayarlar / Görüntü Ayarları</p>
      <Box className="container">
        <h1>Görüntü Ayarları</h1>
        <ol>
        {ol_1.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
          Diğer ayarlar <b>Gelişmiş Video</b>‘nun altında yer alır.
          </li>
        </ul>
        <ol>
        {ol_2.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
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
