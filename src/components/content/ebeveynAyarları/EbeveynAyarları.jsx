import React from "react";
import "../style.css";
import { links, ol, texts } from "./EbeveynAyarları_";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import one from "../../../assets/images/icons/one.png";
import zero from "../../../assets/images/icons/zero.png";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../redux/menuSlice";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ebeveyn_denetimleri_menüsü from "../../../assets/images/in-page-images/ebeveyn_denetimleri_menüsü.png"

export default function EbeveynAyarları() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / Ebeveyn Ayarları</p>
      <Box className="container">
        <h1>Ebeveyn Ayarları</h1>
        {texts.map((text) => {
            return <p>{text}</p>;
          })}
        <ol>
        {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul><li>PIN kodu ilk kurulumunda belirlemiş olduğunuz dört haneli rakamdır.</li></ul>
        <ol start={ol.length+1}>
          <li>
            <img src={one} alt="1" className="inline-icon xs"/>...<img src={zero} alt="0" className="inline-icon xs"/> düğmesiyle
            PIN kodunu girin.
            <Box className="flex-container padding-1">
              <ArrowForwardIcon className="inline-icon xs" /><Box><b>Ebeveyn Denetimleri</b> menüsü görüntülenir.</Box>
           </Box>
           <img src={ebeveyn_denetimleri_menüsü} alt="Ebeveyn Denetimleri Menüsü"className="in-page-img"/>
          </li>
        </ol>




        <h2>Not:</h2>
        <ul><li>İlave işlemler aşağıdaki bölümlerde açıklanmıştır.</li></ul>
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
                  dispatch(activate_l1_subcategory(160000));
                  dispatch(activate_l2_subcategory(link.focus_item));
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
