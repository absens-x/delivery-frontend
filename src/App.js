import React, { Component } from "react";

import "./sass/main.scss";

import Header from "./components/Header/Header";
import Opening from "./components/Opening/Opening";
import DashCatalog from "./components/DashCatalog/DashCatalog";
import OrgItem from "./components/OrgItem/OrgItem";
import OrgsList from "./containers/OrgsList/OrgsList";
import OrderSteps from "./components/OrderSteps/OrderSteps";
import Partnership from "./components/Partnership/Partnership";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Opening />
        <DashCatalog />
        <hr />

        <OrgsList>
          <OrgItem />
        </OrgsList>

        <OrderSteps />

        <Partnership />

        <Footer />
      </div>
    );
  }
}

export default App;
