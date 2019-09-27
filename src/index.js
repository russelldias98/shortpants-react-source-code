import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pageRenders/Home";
import Work from "./pageRenders/Work";
import Tools from "./pageRenders/Tools";
import Contact from "./pageRenders/contact";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/work' exact component={Work} />
      <Route path='/tools' exact component={Tools} />
      <Route path='/contact' exact component={Contact} />
    </Switch>
  </Router>,
  document.querySelector("#root")
);
