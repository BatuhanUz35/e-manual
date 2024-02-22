import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";
import { links } from "./TeleteksDilSeçimi_";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";

export default function TeleteksDilSeçimi() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / Teleteks Dil Seçimi</p>
      <Box className="container">
        <h1>Teleteks Dil Seçimi</h1>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <b>Teleteks</b>'i seçip <Circle className="inline-icon button"/>
            {" "} düğmesine basın.
            <Box>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>Teleteks</b> menüsü görüntülenir.
            </Box>
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
                  dispatch(
                    activate_l1_subcategory(
                      link.focus_item - (link.focus_item % 10000)
                    )
                  );
                  dispatch(
                    activate_l2_subcategory(
                      link.focus_item - (link.focus_item % 100)
                    )
                  );
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

