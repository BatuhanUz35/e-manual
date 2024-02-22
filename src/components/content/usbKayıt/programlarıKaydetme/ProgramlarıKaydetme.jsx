import React from "react";
import "../../style.css";
import { notlar, ol, links } from "./ProgramlarıKaydetme_";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory
} from "../../../../redux/menuSlice";

export default function ProgramlarıKaydetme() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p>Ana sayfa / USB Kayıt / Programları Kaydetme</p>
      <Box className="container">
        <h1>Programları Kaydetme</h1>
        <p>
          Bir televizyon kanalını kaydedebilirsiniz. Kayıt verileri harici veri
          ortamında saklanır ve bu kayıtlar televizyon aracılığıyla yönetilir.
        </p>
        <p>
          Minimum 1 dakikalık kayıt süresi için 44 MB ila 110 MB'lık hafıza
          gereklidir.
        </p>
        <h2>Notlar:</h2>
        <ul>
          {notlar.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Ek bilgiler</h2>
        {links.map((link) => {
          return ( 
            <Box className="link-container">
            <LinkIcon />
            <Link to={link.url} className="link"
             onClick={() => {
              dispatch(select_item(link.focus_item));
              dispatch(activate_l1_subcategory(100000));
              dispatch(activate_l2_subcategory(100800));
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
