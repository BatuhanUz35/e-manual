import React from "react";
import "../../style.css";
import { links } from "./Hakkında_";
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

export default function Hakkında() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Cihaz Tercihleri / Hakkında</p>
      <Box className="container">
        <h1>Hakkında</h1>
        <p>
          Bu menüde sistem güncellemelerini kontrol edebilir, cihaz adını
          değiştirebilir ve cihaza ait durum ve lisans bilgilerini
          görüntüleyebilirsiniz.
        </p>
        <ol>
          <li>
          <b>Cihaz Tercihleri</b> menüsünden <b>Hakkında</b>'yı seçip{" "}
          <Circle className="inline-icon button" /> düğmesine basın.
          <Box className="flex-container padding-1">
            <ArrowForwardIcon className="inline-icon xs" />
            <Box>
              <b>Hakkında</b> menüsü görüntülenir.
            </Box>
          </Box>
          <h2>img gelcek</h2>
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
                  dispatch(activate_l2_subcategory(140100));
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
