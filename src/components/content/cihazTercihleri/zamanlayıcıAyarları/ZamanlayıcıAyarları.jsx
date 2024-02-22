import React from "react";
import "../../style.css";
import { links } from "./ZamanlayıcıAyarları_";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import zamanlayıcı from "../../../../assets/images/in-page-images/zamanlayıcı.png"

export default function ZamanlayıcıAyarları() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / Cihaz Tercihleri / Zamanlayıcı Ayarları</p>
      <Box className="container">
        <h1>Zamanlayıcı Ayarları</h1>
        <p>
        Bu menüde Açma ve kapanma zamanlayıcı ayarlarını yönetebilirsiniz.
        </p>
        <ol>
          <li>
          <b>Cihaz Tercihleri</b> menüsünden <b>Zamanlayıcı</b>'yı seçip <Circle className="inline-icon button" /> düğmesine basın.
          <Box className="flex-container padding-1">
            <ArrowForwardIcon className="inline-icon xs" />
            <Box>
              <b>Zamanlayıcı</b> menüsü görüntülenir.
            </Box>
          </Box>
          <img src={zamanlayıcı} alt="Zamanlayıcı"className="in-page-img"/>
          </li>
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
                  dispatch(activate_l1_subcategory(140000));
                  dispatch(activate_l2_subcategory(140300));
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
