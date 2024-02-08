import React from "react";
import "../style.css";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import tv_icon from "../../../assets/images/icons/tv_icon.png";
import options from "../../../assets/images/icons/options.png";
import { Circle } from "@mui/icons-material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from "@mui/material";
import { links } from "./GelişmişFonksiyonlar_";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory
} from "../../../redux/menuSlice";

export default function GelişmişFonksiyonlar() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p classname="text">Ana sayfa / Televizyonun Çalıştırılması Gelişmiş Fonksiyonlar</p>
      <Box className="container">
        <h1>Televizyonun Çalıştırılması Gelişmiş Fonksiyonlar</h1>
        <p classname="text">
          Gelişmiş Seçenekler menüsünden TV'nin gelişmiş ayarlarını yapabilirsiniz.
        </p>
        <ol>
          <li>
            <img src={tv_icon} alt="TV" className="inline-icon"/> ardından <img src={options} alt="Seçenekler" className="inline-icon"/>
            düğmesine basın.
          </li>
          <li>
            <b>Gelişmiş Seçenekler</b>'i seçip <Circle className="inline-icon button"/> düğmesine basın.
            <Box>
              <ArrowForwardIcon className="inline-icon xs"/> <b>Gelişmiş Seçenekler</b> menüsü görüntülenir.
              <h2>img gelcek</h2>
            </Box>
          </li>
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            İlave işlemler aşğıdaki bölümlerde açıklanmıştır.
          </li>
        </ul>
        <h2>Ek bilgiler</h2>
        {links.map((link) => {
          return ( 
            <Box className="link-container">
            <LinkIcon />
            <Link to={link.url} className="link"
             onClick={() => {
              dispatch(select_item(link.focus_item));
              dispatch(activate_l1_subcategory(70000));
              dispatch(activate_l2_subcategory(link.focus_item));
              dispatch(focus_item(link.focus_item));    
            }}>
              {link.title}
            </Link>
          </Box>
          )})}
        
      </Box>
    </Box>
  );
}
