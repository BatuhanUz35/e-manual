import { MenuItems } from "./MenuItems_";
import "./Menu.css";
import { useSelector, useDispatch } from "react-redux";
import {
  select_item,
  activate_l1_subcategory,
  activate_l2_subcategory,
  focus_item,
} from "../../redux/menuSlice";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import React, { useEffect } from "react";

const MenuItem = () => {
  const active_l1_subcategory = useSelector(
    (state) => state.menu.active_l1_subcategory
  );
  const active_l2_subcategory = useSelector(
    (state) => state.menu.active_l2_subcategory
  );
  const selected_item_id = useSelector((state) => state.menu.selected_item_id);
  const focused_item = useSelector((state) => state.menu.focused_item);
  const dispatch = useDispatch();

  const focusItemAction = (itemId) => {
    return async (dispatch) => {
      await dispatch(focus_item(itemId));
      document.getElementById(itemId).focus();
    };
  };

  const findL2Subcategory = (id) => {
    const mainCategory = MenuItems.find(item => item.id === id - id % 10000);
    const l1SubCategory = mainCategory.subcategory.find(item => item.id === id - id % 100);
    const lastItem = l1SubCategory.subcategory[l1SubCategory.subcategory.length - 1];
    return lastItem;
  };

  const findL1Subcategory = (id) => {
    const mainCategory = MenuItems.find(item => item.id === id - id % 10000);
    const lastItem = mainCategory.subcategory[mainCategory.subcategory.length - 1];
    return lastItem;
  };

  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowRight":
        dispatch(focusItemAction(999));
        break;
      case "ArrowDown":
        event.preventDefault();
        if(active_l2_subcategory !== null &&
          (focused_item % 1000 - focused_item % 100) === active_l2_subcategory % 1000 &&
          document.getElementById(focused_item + 1) !== null){
            dispatch(focusItemAction(focused_item + 1));
          }
        else if (active_l1_subcategory !== null && focused_item % 100 !== 0 &&
            focused_item.toString()[0] === active_l1_subcategory.toString()[0] &&
            document.getElementById(focused_item - focused_item %100 + 100) !== null){
            dispatch(focusItemAction(focused_item - focused_item %100 + 100));
          }
        else if (active_l1_subcategory !== null &&
          focused_item - focused_item %10000 === active_l1_subcategory &&
          document.getElementById(focused_item + 100) !== null){
          dispatch(focusItemAction(focused_item + 100));
          }
        else if (active_l1_subcategory !== null &&
          focused_item - focused_item %10000 === active_l1_subcategory &&
          document.getElementById(focused_item + 100) === null){
            dispatch(focusItemAction(Math.round(focused_item/10000) * 10000 + 10000));
          }  
        else if (document.getElementById((Math.round(focused_item/1000)*1000) + 10000) !== null) {
          dispatch(focusItemAction(focused_item + 10000));
        }
        console.log(focused_item)
        break;
      case "ArrowUp":
        event.preventDefault();
        if(focused_item === 0){
          dispatch(focusItemAction(9999)); // If on top go to menu button
        }
        else if (active_l2_subcategory && // Inside of level 2 and from level 2 to 1
          focused_item % 100 !== 0 && document.getElementById(focused_item - 1) !== null){
          dispatch(focusItemAction(focused_item - 1));
        }
        else if (active_l2_subcategory && // from main category to level 2
          active_l2_subcategory - active_l2_subcategory % 10000 === focused_item - 10000 &&
          active_l2_subcategory === findL1Subcategory(active_l1_subcategory).id &&
          document.getElementById(focused_item - 10000)){
          const lastItem = (findL2Subcategory(active_l2_subcategory))
          dispatch(focusItemAction(lastItem.id));
        }
        else if (active_l2_subcategory && // from level 1 to level 2
          active_l2_subcategory === focused_item - 100 &&
          document.getElementById(focused_item - 100)){
          const lastItem = (findL2Subcategory(active_l2_subcategory))
          dispatch(focusItemAction(lastItem.id));
        } 
        else if (active_l1_subcategory && // from main to level 1
          active_l1_subcategory === focused_item - 10000 &&
          document.getElementById(focused_item - 10000)){
          const lastItem = (findL1Subcategory(active_l1_subcategory))
          dispatch(focusItemAction(lastItem.id));
        }
       
        else if (active_l1_subcategory  && // level 1 to level 1 and to main
          focused_item.toString()[0] === active_l1_subcategory.toString()[0] &&
          document.getElementById(focused_item - 100)){
          dispatch(focusItemAction(focused_item - 100));
        }
        else if (document.getElementById(focused_item - 10000)) { // from main to main
          dispatch(focusItemAction(focused_item - 10000));
        }
        console.log(focused_item)
        break;
      default:
        break;
    }
  }

  return MenuItems.map((item) => {
    // Main items
    return (
      <Box>
        <Box
          onKeyDown={handleKeyDown}
          onClick={() => {
            item.subcategory
              ? dispatch(activate_l1_subcategory(item.id))
              : dispatch(activate_l1_subcategory(null));
          }}
        >
          <Link
            to={item.url}
            className={selected_item_id === item.id ? "selected item" : "item"}
            id={item.id}
            focusKey={item.id}
            onClick={() => {
              dispatch(select_item(item.id));
              dispatch(focus_item(item.id));
            }}
          >
            <Box className="icon">
              {active_l1_subcategory === item.id ? item.iconActive : item.icon}
            </Box>
            <p className="title">{item.title}</p>
          </Link>
          {item.subcategory
            ? item.subcategory.map((l1_subcategory_item) => {
                // Level 1 subcategory of selected main item
                return (
                  <Box
                    div
                    onClick={() => {
                      l1_subcategory_item.subcategory
                        ? dispatch(
                            activate_l2_subcategory(l1_subcategory_item.id)
                          )
                        : dispatch(activate_l2_subcategory(null));
                    }}
                  >
                    <Link
                      to={l1_subcategory_item.url}
                      className={`${
                        selected_item_id === l1_subcategory_item.id
                          ? "selected l1_subcategory_item"
                          : "l1_subcategory_item"
                      } 
                          ${active_l1_subcategory === item.id ? "" : "hidden"}`}
                      id={l1_subcategory_item.id}
                      focusKey={l1_subcategory_item.id}
                      onClick={() => {
                        dispatch(select_item(l1_subcategory_item.id));
                        dispatch(focus_item(l1_subcategory_item.id));
                      }}
                    >
                      <Box className="l1_subcategory_item-icon">
                        {active_l2_subcategory === l1_subcategory_item.id
                          ? l1_subcategory_item.iconActive
                          : l1_subcategory_item.icon}
                      </Box>
                      <Box className="l1_subcategory_item-title">
                        {l1_subcategory_item.title}
                      </Box>
                    </Link>
                    {l1_subcategory_item.subcategory
                      ? l1_subcategory_item.subcategory.map(
                          (l2_subcategory_item) => {
                            // Level 2 subcategory of selected level 1 subcategory item
                            return (
                              <Box>
                                <Link
                                  to={l2_subcategory_item.url}
                                  className={`${
                                    selected_item_id === l2_subcategory_item.id
                                      ? "selected l2_subcategory_item"
                                      : "l2_subcategory_item"
                                  }
                                    ${
                                      active_l2_subcategory ===
                                      l1_subcategory_item.id
                                        ? ""
                                        : "hidden"
                                    }`}
                                  id={l2_subcategory_item.id}
                                  focusKey={l2_subcategory_item.id}
                                  onClick={() => {
                                    dispatch(select_item(l2_subcategory_item.id));
                                    dispatch(
                                      activate_l2_subcategory(
                                        l1_subcategory_item.id
                                      )
                                    );
                                    dispatch(
                                      focus_item(l2_subcategory_item.id)
                                    );
                                  }}
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
                          }
                        )
                      : null}
                  </Box>
                );
              })
            : null}
        </Box>
      </Box>
    );
  });
};

export default withFocusable()(MenuItem);
