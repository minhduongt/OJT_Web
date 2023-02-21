import { Box } from "@mui/material";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Router from "./routes";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Box className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Box>
  );
}

export default App;
