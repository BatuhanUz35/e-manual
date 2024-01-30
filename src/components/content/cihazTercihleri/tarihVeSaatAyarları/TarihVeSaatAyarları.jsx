import React from "react";
import "../../style.css";
import { links } from "./TarihVeSaatAyarları_";
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
import tarih_ve_saat_menüsü from "../../../../assets/images/in-page-images/tarih_ve_saat_menüsü.png"

export default function TarihVeSaatAyarları() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Cihaz Tercihleri / Tarih ve Saat Ayarları</p>
      <Box className="container">
        <h1>Tarih ve Saat Ayarları</h1>
        <p>
        Bu menüde sistem tarih ve saat bilgilerini görüntüleyebilir ve yönetebilirsiniz.
        </p>
        <ol>
          <li>
          <b>Cihaz Tercihleri</b> menüsünden <b>Tarih ve Saat</b>'yı seçip{" "}
          <Circle className="inline-icon button" /> düğmesine basın.
          <Box className="flex-container padding-1">
            <ArrowForwardIcon className="inline-icon xs" />
            <Box>
              <b>Tarih ve Saat</b> menüsü görüntülenir.
            </Box>
          </Box>
          <img src={tarih_ve_saat_menüsü} alt="Tarih ve Saat Menüsü"className="in-page-img"/>
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
                  dispatch(activate_l2_subcategory(140200));
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
