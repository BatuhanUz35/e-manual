import React from "react";
import "../../style.css";
import { Circle } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import down from "../../../../assets/images/icons/down.png";
import { Box } from "@mui/material";
import { links } from "./TkgsAyarları_";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";

export default function TkgsAyarları() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / Televizyonun Çalıştırılması Temel Fonksiyonlar / TKGS Ayarları</p>
      <Box className="container">
        <h1>TKGS Ayarları</h1>
        <h2>Not:</h2>
        <ul>
          <li>
            TKGS Ayarları öğesi sadece Kanal Kurulumu <b>Uydu (Operatör Modu)</b> olarak yapıldığında menüde görüntülenir.
          </li>
        </ul>
        <ol>
          <li>
            <b>Gelişmiş Seçenekler</b> menüsünden <img src={down} alt="yukarı" className="inline-icon rotate-180 sm"/>/<img src={down} alt="aşağı" className="inline-icon sm"/> düğmesiyle
            <b> TKGS</b>'yi seçip <Circle className="inline-icon button"/>
            {" "} düğmesine basın.
            <Box>
              <ArrowForwardIcon className="inline-icon xs"/>
              <b>TKGS Ayarı</b> menüsü görüntülenir.
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

