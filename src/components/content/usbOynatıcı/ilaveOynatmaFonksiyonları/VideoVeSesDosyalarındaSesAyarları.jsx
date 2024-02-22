import React from "react";
import "../../style.css";
import { ol } from "./VideoVeSesDosyalarındaSesAyarları_";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";
import { Link } from "react-router-dom";

export default function VideoVeSesDosyalarındaSesAyarları() {
  const dispatch = useDispatch();

  return (
    <Box className="page">
      <p>
        Ana sayfa / USB Oynatıcı / İlave Oynatma Fonksiyonları / Video Ve Ses Dosyalarında Ses Ayarları
      </p>
      <Box className="container">
        <h1>Video Ve Ses Dosyalarında Ses Ayarları</h1>
        <p>Video ve ses dosyalarını oynatırken ses ayarlarını değiştirebilirsiniz.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <Box>
          Diğer ayarlar için{" "}
          <Link
            to="/ayarlar/ses-ayarları"
            onClick={() => {
              dispatch(select_item(50500));
              dispatch(activate_l1_subcategory(50000));
              focus_item(50500);
              dispatch(activate_l2_subcategory(50500));
            }}
            className="link"
          >
            Ses Ayarları
          </Link>{" "}
          bölümüne bakın.
        </Box>
      </Box>
    </Box>
  );
}
