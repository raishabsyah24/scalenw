import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Company from "./Pages/Company";
import Product from "./Pages/Product";
import Splash from './splash';


export default class App extends Component {
  render() {
    if (localStorage.getItem("token") != null) {
      return (
        <Router>
          <div
            style={{
              backgroundColor: "#F5F5DC",
              minHeight: "100vh"
            }}
          >
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/company">
                <Company />
              </Route>
              <Route path="/product">
                <Product />
                </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/">
                <Splash />
              </Route>
            </Switch>
           
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div
            style={{
              backgroundColor: "#F5F5DC",
              minHeight: "100vh"
            }}
          >
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/company">
                <Company />
              </Route>
              <Route path="/product">
                <Product />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/">
                <Splash />
              </Route>
            </Switch>

          </div>
        </Router>
      );
    }
  }
}