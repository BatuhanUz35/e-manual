import React from 'react'
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <div className="searchbar-container">
      <SearchIcon/>
      <input placeholder="Ara"/>
    </div>
  )
}
