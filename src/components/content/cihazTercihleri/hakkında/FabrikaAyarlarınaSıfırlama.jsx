import React from "react";
import "../../style.css";
import { ol } from "./FabrikaAyarlarınaSıfırlama_";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";


export default function FabrikaAyarlarınaSıfırlama() {
  const dispatch = useDispatch();
  return (
    <Box className="page">
      <p classname="text">
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
                focus_item(50200);
                dispatch(activate_l2_subcategory(50200));
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
