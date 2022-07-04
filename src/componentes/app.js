import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Location from "./pages/location";
import Contact from "./pages/contact";
import Registro from "./pages/registro";



export default class App extends Component {
  render() {
    return (
      <div className="app">
       
        <Router>
          <div>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/location' element={<Location/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/registro' element={<Registro/>} />
              {/* <Route path='/blog' element={<Blog/>} /> */}
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
