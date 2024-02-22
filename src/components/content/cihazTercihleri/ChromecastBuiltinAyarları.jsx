import React from "react";
import "../style.css";
import { Box } from "@mui/material";
import { ol } from "./ChromecastBuiltinAyarları_";
import home from "../../../assets/images/icons/home.png";
import back from "../../../assets/images/icons/back.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../redux/menuSlice";

export default function ChromecastBuiltinAyarları() {
  const dispatch = useDispatch();
  const focused_item = useSelector((state) => state.menu.focused_item);
  return (
    <Box className="page">
      <p>
        Ana sayfa / Cihaz Tercihleri / Chromecast Built-in Ayarları
      </p>
      <Box className="container">
        <h1>Chromecast Built-in Ayarları</h1>
        <p>
          Bu menüde yerleşik chromecast lisans, sürüm ve seri numarasını
          görüntüleyin.
        </p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <ul>
          <li>
            Chromecast özelliğinin kullanımı için {" "}
              <Link to="/chromecast-built-in" className="link"
               onClick={() => {
                dispatch(select_item(130000));
                dispatch(activate_l1_subcategory(130000));
                dispatch(focus_item(130000));
                dispatch(activate_l2_subcategory(130000));
                document.getElementById(focused_item).focus();
              }}>
                Chromecast Built-in™
              </Link>{" "}
              bölümüne bakın.
          </li>
        </ul>
        <ol start={ol.length + 1}>
          <li>
            Önceki menüye dönmek için <img src={back} alt="Geri" className="inline-icon" /> Home menüsüne
            dönmek için <img src={home} alt="Home" className="inline-icon" /> düğmesine basın.
          </li>
        </ol>
      </Box>
    </Box>
  );
}
