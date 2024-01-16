import { MenuItems } from "./MenuItems_";
import "./Menu.css";
import { useSelector, useDispatch } from "react-redux";
import { select_item, activate_l1_subcategory, activate_l2_subcategory } from "../../redux/menuSlice";
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
        document.getElementById(999).focus();
        break;
      default:
        break;
    }
  }
  
  return (
      MenuItems.map((item) => {
      return (
        <Box>
          <Box onKeyDown={handleKeyDown} onClick={() => dispatch(activate_l1_subcategory(item.id))}>
            <Link
              to={item.url}
              className={
                selected_item_id === item.id ? "selected item" : "item"
              }
              id={item.id}
              focusKey={item.id}
              onClick={() => dispatch(select_item(item.id))}
            >
              <Box className="icon">
                {active_l1_subcategory === item.id ? item.iconActive : item.icon}
              </Box>
              <p className="title">{item.title}</p>
            </Link>
            {item.subcategory 
              ? item.subcategory.map((l1_subcategory_item) => {
                  return (
                    <Box div onClick={() => dispatch(activate_l2_subcategory(l1_subcategory_item.id))}>
                      <Link
                        to={l1_subcategory_item.url}
                        className={
                          `${selected_item_id === l1_subcategory_item.id ? "selected l1_subcategory_item" : "l1_subcategory_item"} 
                          ${active_l1_subcategory === item.id ? "" : "hidden"}`}
                        id={l1_subcategory_item.id}
                        focusKey={l1_subcategory_item.id}
                        onClick={() => dispatch(select_item(l1_subcategory_item.id))}
                      >
                        <Box className="l1_subcategory_item-icon">
                        {active_l2_subcategory === l1_subcategory_item.id ? l1_subcategory_item.iconActive : l1_subcategory_item.icon}
                        </Box>
                        <Box className="l1_subcategory_item-title">{l1_subcategory_item.title}</Box>
                      </Link>
                      {l1_subcategory_item.subcategory
                        ? l1_subcategory_item.subcategory.map((l2_subcategory_item) => {
                            return (
                              <div>
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
                              </div>
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
