import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import { routes } from "./Routes";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import "./page.css";

const Page = () => {
  const year = new Date().getFullYear();
  const page_id = 999;
  const selected_item_id = useSelector((state) => state.menu.selected_item_id);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    // Get the scroll position of the element
    const element = event.target;
    const currentPosition = element.scrollTop;

    // Update the state with the current scroll position
    setScrollPosition(currentPosition);
  };

  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowLeft":
        document.getElementById(selected_item_id).focus(); // Go back to selected item in sidemenu which is being displayed
        break;
      case "ArrowUp":
        if(scrollPosition === 0){
          document.getElementById(2).focus(); // Go to menu icon
        }
        break;
      default:
        break;
    }
  }

  function logScrollPosition() {
    // Get the scroll position of the document body
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
    // Log the scroll position
    console.log("Scroll Position:", scrollPosition);
  }
  
  // Attach the event listener to the scroll event
  window.addEventListener("scroll", logScrollPosition);

  return (
    <Box className="pages" id={page_id} onKeyDown={handleKeyDown} tabindex="0" onScroll={handleScroll}>
      <Routes>
        {routes.map((route) => {
          return <Route path={route.path} element={<route.element />}/>;
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
