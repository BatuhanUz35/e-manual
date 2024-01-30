import { MenuItems } from "./MenuItems_";
import "./Menu.css";
import { useSelector, useDispatch } from "react-redux";
import { select_item, activate_l1_subcategory, activate_l2_subcategory, focus_item } from "../../redux/menuSlice";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import React from "react"

const MenuItem = () => {
  const active_l1_subcategory = useSelector((state) => state.menu.active_l1_subcategory);
  const active_l2_subcategory = useSelector((state) => state.menu.active_l2_subcategory);
  const selected_item_id = useSelector((state) => state.menu.selected_item_id);
  const dispatch = useDispatch();

  function handleKeyDown(event) {
    switch (event.key){
      case 'ArrowRight':
        focus_item(999);
        document.getElementById(999).focus(); // Focus to the content
        break;
      default:
        break;
    }
  }
  
  return (
      MenuItems.map((item) => { // Main items
      return (
        <Box>
          <Box onKeyDown={handleKeyDown} onClick={() => {
            console.log('Before state change:', active_l1_subcategory);
            dispatch(activate_l1_subcategory(item.id));
            focus_item(item.id)
            }}>
            <Link
              to={item.url}
              className={
                selected_item_id === item.id ? "selected item" : "item"
              }
              id={item.id}
              focusKey={item.id}
              onClick={() => {dispatch(select_item(item.id))
              }}
            >
              <Box className="icon">
                {active_l1_subcategory === item.id ? item.iconActive : item.icon}
              </Box>
              <p className="title">{item.title}</p>
            </Link>
            {item.subcategory 
              ? item.subcategory.map((l1_subcategory_item) => { // Level 1 subcategory of selected main item
                  return (
                    <Box div onClick={() => dispatch(activate_l2_subcategory(l1_subcategory_item.id))}>
                      <Link
                        to={l1_subcategory_item.url}
                        className={
                          `${selected_item_id === l1_subcategory_item.id ? "selected l1_subcategory_item" : "l1_subcategory_item"} 
                          ${active_l1_subcategory === item.id ? "" : "hidden"}`}
                        id={l1_subcategory_item.id}
                        focusKey={l1_subcategory_item.id}
                        onClick={() => {
                          dispatch(select_item(l1_subcategory_item.id));
                          dispatch(focus_item(selected_item_id));
                        }}
                      >
                        <Box className="l1_subcategory_item-icon">
                        {active_l2_subcategory === l1_subcategory_item.id ? l1_subcategory_item.iconActive : l1_subcategory_item.icon}
                        </Box>
                        <Box className="l1_subcategory_item-title">{l1_subcategory_item.title}</Box>
                      </Link>
                      {l1_subcategory_item.subcategory
                        ? l1_subcategory_item.subcategory.map((l2_subcategory_item) => { // Level 2 subcategory of selected level 1 subcategory item
                            return (
                              <Box>
                                <Link
                                  to={l2_subcategory_item.url}
                                  className={
                                    `${selected_item_id === l2_subcategory_item.id ? "selected l2_subcategory_item" : "l2_subcategory_item"}
                                    ${active_l2_subcategory === l1_subcategory_item.id ? "" : "hidden"}`}
                                  id={l2_subcategory_item.id}
                                  focusKey={l2_subcategory_item.id}
                                  onClick={() => dispatch(select_item(l2_subcategory_item.id))}
                                >
                                  <Box className="l2_subcategory_item-icon">
                                    {selected_item_id === l2_subcategory_item.id
                                      ? l2_subcategory_item.iconActive
                                      : l2_subcategory_item.icon}
                                  </Box>
                                  <Box className="l2_subcategory_item-title">
                                    {l2_subcategory_item.title}
                                  </Box>
                                </Link>
                              </Box>
                            );
                          })
                        : null}
                    </Box>
                  );
                })
              : null}
          </Box>
        </Box>
      );
    })
  );
}



export default withFocusable()(MenuItem);
