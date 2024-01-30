import React from 'react'
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

export default function SearchBar() {
  return (
    <Box className="searchbar-container">
      <SearchIcon/>
      <input placeholder="Ara"/>
    </Box>
  )
}
