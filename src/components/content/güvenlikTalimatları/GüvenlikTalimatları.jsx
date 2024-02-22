import React from "react";
import "../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { ul, links } from "./GüvenlikTalimatları_";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../redux/menuSlice";

export default function GüvenlikTalımatları() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / Güvenlik Talimatları</p>
      <Box className="container">
        <h1>Güvenlik Talimatları</h1>
        <p>
          Bu bölümde, kişisel yaralanma ya da maddi hasar tehlikelerini önlemeye
          yardımcı olacak güvenlik talimatları yer almaktadır.
        </p>
        <p>
          Firmamız bu talimatları uyulmaması halinde ortaya çıkabilecek
          zararlardan sorumlu tutulamaz.
        </p>
        <ul>
        {ul.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
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
