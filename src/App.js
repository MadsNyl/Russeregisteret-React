import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { Nav } from "./components/Nav";
import { ScrollToTop } from "./functions/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav>
        <AnimatedRoutes />
      </Nav>
    </BrowserRouter>
  );
}

export default App;
