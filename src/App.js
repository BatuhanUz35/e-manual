import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes"
import { Box } from "@mui/material";

function App() {
  const year = new Date().getFullYear();

  return (
    <Box className="">
      <Navbar className="navbar" />
      <Box className="main-container">
      <Menu className="menu" />
        <div className="pages">
          <Routes>
            {routes.map((route) => {
              return (
                <Route path={route.path} element={<route.element />}/>
              )
            })}
          </Routes>
          <footer><hr />&copy; BEKO {year}</footer>
        </div>
      </Box>
    </Box>
  );
}

export default App;
