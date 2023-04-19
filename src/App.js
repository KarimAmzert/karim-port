import "./App.css";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import  Portfolio  from "./Portfolio";
import Menu from "./Menu";

function App() {

  return (
      <div className="App">
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<Portfolio/>}/>

            </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
