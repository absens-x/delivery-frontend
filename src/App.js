import React, { Fragment, Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./sass/main.scss";
import Home from "./pages/Home/Home";
import Orgs from "./pages/Orgs/Orgs";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/orgs" component={Orgs} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
