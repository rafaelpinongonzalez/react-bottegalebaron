import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


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
            

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/location" component={Location} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
