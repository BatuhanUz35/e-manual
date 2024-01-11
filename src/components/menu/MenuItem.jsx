import { MenuItems } from "./MenuItems";
import "./Menu.css";
import { useSelector, useDispatch } from "react-redux";
import { select_item, open_submenu, open_subsubmenu } from "../../redux/menuSlice";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import React from "react"

const MenuItem = () => {
  const opened_submenu = useSelector((state) => state.menu.open_submenu);
  const opened_subsubmenu = useSelector((state) => state.menu.open_subsubmenu);
  const selected_item_id = useSelector((state) => state.menu.selected_item_id);
  const dispatch = useDispatch();

  return (
      <Box>
      {MenuItems.map((item) => {
      return (
        <Box>
          <Box onClick={() => dispatch(open_submenu(item.id))}>
            <Link
              to={item.url}
              className={
                selected_item_id === item.id ? "selected item" : "item"
              }
              id={item.id}
              focusKey="MenuItem"
              onClick={() => { dispatch(select_item(item.id));}}
            >
              <Box className="icon">
                {opened_submenu === item.id ? item.iconActive : item.icon}
              </Box>
              <p className="title">{item.title}</p>
            </Link>
            {item.submenu && opened_submenu === item.id
              ? item.submenu.map((subitem) => {
                  return (
                    <Box div onClick={() => dispatch(open_subsubmenu(subitem.id))}>
                      <Link
                        to={subitem.url}
                        className={
                          selected_item_id === subitem.id
                            ? "selected subitem"
                            : "subitem"
                        }
                        id={subitem.id}
                        focusKey="MenuItem"
                        onClick={() => { dispatch(select_item(subitem.id));}}
                      >
                        <Box className="subitem-icon">
                        {opened_subsubmenu === subitem.id ? subitem.iconActive : subitem.icon}
                        </Box>
                        <Box className="subitem-title">{subitem.title}</Box>
                      </Link>
                      {subitem.submenu && opened_subsubmenu === subitem.id
                        ? subitem.submenu.map((subsubitem) => {
                            return (
                              <div>
                                <Link
                                  to={subsubitem.url}
                                  className={
                                    selected_item_id === subsubitem.id
                                      ? "selected subsubitem"
                                      : "subsubitem"
                                  }
                                  id={subsubitem.id}
                                  focusKey="MenuItem"
                                  onClick={() => { dispatch(select_item(subsubitem.id));}}
                                >
                                  <Box className="subsubitem-icon">
                                    {selected_item_id === subsubitem.id
                                      ? subsubitem.iconActive
                                      : subsubitem.icon}
                                  </Box>
                                  <Box className="subsubitem-title">
                                    {subsubitem.title}
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
    })}
    </Box>
  );
}


export default withFocusable()(MenuItem);
