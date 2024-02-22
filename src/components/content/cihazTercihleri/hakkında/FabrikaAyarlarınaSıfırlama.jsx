import React from "react";
import "../../style.css";
import { ol } from "./FabrikaAyarlarınaSıfırlama_";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";


export default function FabrikaAyarlarınaSıfırlama() {
  const dispatch = useDispatch();
  const focused_item = useSelector((state) => state.menu.focused_item);
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Hakkında / Fabrika Ayarlarına Sıfırlama
      </p>
      <Box className="container">
        <h1>Fabrika Ayarlarına Sıfırlama</h1>
        <p>
          Bu işlem, cihazınızın dahili depolamasındaki verilerin tümünü
          silecektir. Silinecek veriler; Google hesabı, sistem ve uygulama
          verileri ile bunların ayarları ve indirilen uygulamalardır.
        </p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
          <li>
            <Box>
              <Link to="/ayarlar/kurulum" className="link"
               onClick={() => {
                dispatch(select_item(50200));
                dispatch(activate_l1_subcategory(50000));
                dispatch(focus_item(50200));
                dispatch(activate_l2_subcategory(50200));
                document.getElementById(focused_item).focus();
              }}>
                İlk Kurulum ve Televizyonu Ayarlama
              </Link>{" "}
              bölümünden devam edin.
            </Box>
          </li>
        </ol>
      </Box>
    </Box>
  );
}
