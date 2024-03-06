import React from "react";
import "./SearchBar.css";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  set_search_term,
  set_search_input,
} from "../../redux/searchbarSlice";
import {
  select_item,
  focus_item,
} from "../../redux/menuSlice";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchInput = useSelector((state) => state.searchbar.searchInput);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    dispatch(set_search_term(searchInput))
    navigate("/ara") 
    dispatch(select_item(null));
    dispatch(focus_item(999));    
  };

  return (
    <form
      className="searchbar-container"
      onSubmit={handleSubmit}
    >
      <SearchIcon />
      <input
        placeholder="Ara"
        value={searchInput}
        onChange={(e) => dispatch(set_search_input(e.target.value))}
      />
    </form>
  );
}

export default withFocusable()(SearchBar);
