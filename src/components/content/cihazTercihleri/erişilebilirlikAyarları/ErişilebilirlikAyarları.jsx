import React from "react";
import "../../style.css";
import { links } from "./ErişilebilirlikAyarları_";
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
import erişilebilirlik_menüsü from "../../../../assets/images/in-page-images/erişilebilirlik_menüsü.png"

export default function ErişilebilirlikAyarları() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Cihaz Tercihleri / Erişilebilirlik Ayarları</p>
      <Box className="container">
        <h1>Erişilebilirlik Ayarları</h1>
        <p>
          Bu menüde Erişilebilirlik ayarlarını yönetebilirsiniz.
        </p>
        <ol>
          <li>
          <b>Cihaz Tercihleri</b> menüsünden <b>Erişilebilirlik</b> seçip{" "}
          <Circle className="inline-icon button" /> düğmesine basın.
          <Box className="flex-container padding-1">
            <ArrowForwardIcon className="inline-icon xs" />
            <Box>
              <b>Erişilebilirlik</b> menüsü görüntülenir.
            </Box>
          </Box>
          <img src={erişilebilirlik_menüsü} alt="Erişilebilirlik Menüsü"className="in-page-img"/>
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
                  dispatch(activate_l2_subcategory(141400));
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
