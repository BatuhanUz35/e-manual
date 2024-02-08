import React, { useEffect, useRef } from 'react';
import { Routes, Route } from "react-router-dom";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import { routes } from "./Routes";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { focus_item } from "../../redux/menuSlice";
import "./page.css";
import { useLocation } from 'react-router-dom';

const Page = () => {
  const year = new Date().getFullYear();
  const page_id = 999;
  const selected_item_id = useSelector((state) => state.menu.selected_item_id);
  const dispatch = useDispatch();

  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        dispatch(focus_item(selected_item_id));
        document.getElementById(selected_item_id).focus(); // Go back to selected item in sidemenu which is being displayed
        break;
      default:
        break;
    }
  }

  const { pathname } = useLocation();
  const componentRef = useRef(null);

  useEffect(() => {
    const scrollToTop = () => {
      if (componentRef.current) {
        componentRef.current.scrollTop = 0;
      }
    };

    scrollToTop();
  }, [pathname]);

  return (
    <Box
    ref={componentRef}
    activeClass="active"
      to="target"
      spy={true}
      smooth={true}
      hashSpy={true} 
      className="pages"
      id={page_id}
      onKeyDown={handleKeyDown}
      tabindex="0"
    >
      <Routes>
        
        {routes.map((route) => {
          return <Route path={route.path} element={<route.element />} />;
        })}
      </Routes>
      <footer>
        <hr />
        &copy; BEKO {year}
      </footer>
    </Box>
  );
};

export default withFocusable()(Page);
