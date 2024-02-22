import React from "react";
import "../../style.css";
import { ol } from "./VideoDosyalarındaGörüntüAyarları_";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  select_item,
  focus_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
} from "../../../../redux/menuSlice";
import { Link } from "react-router-dom";

export default function VideoDosyalarındaGörüntüAyarları() {
  const dispatch = useDispatch();

  return (
    <Box className="page">
      <p>
        Ana sayfa / USB Oynatıcı / İlave Oynatma Fonksiyonları / Video Dosyalarında Görüntü Ayarları
      </p>
      <Box className="container">
        <h1>Video Dosyalarında Görüntü Ayarları</h1>
        <p>Video dosyalarını oynatırken görüntü ayarlarını değiştirebilirsiniz.</p>
        <ol>
          {ol.map((li) => {
            return <li>{li}</li>;
          })}
        </ol>
        <h2>Not:</h2>
        <Box>
          Diğer ayarlar için{" "}
          <Link
            to="/ayarlar/görüntü-ayarlarları"
            onClick={() => {
              dispatch(select_item(50400));
              dispatch(activate_l1_subcategory(50000));
              focus_item(50400);
              dispatch(activate_l2_subcategory(50400));
            }}
            className="link"
          >
            Görüntü Ayarları
          </Link>{" "}
          bölümüne bakın.
        </Box>
      </Box>
    </Box>
  );
}
