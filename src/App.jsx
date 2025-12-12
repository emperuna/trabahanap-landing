import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Companies from "./pages/Companies";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<Companies />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
