import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pageRenders/Home";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  </Router>,
  document.querySelector("#root")
);
