import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import Location from "./pages/location";
import Contact from "./pages/contact";
import Blog from "./pages/blog";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/location' element={<Location/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/blog' element={<Blog/>} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
