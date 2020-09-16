import React, { Fragment } from "react";

import Header from "../../components/Header/Header";

import DashCatalog from "../../components/DashCatalog/DashCatalog";
import OrgItem from "../../components/OrgItem/OrgItem";
import OrgsList from "../../containers/OrgsList/OrgsList";

import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />

      <DashCatalog />
      <hr />

      <OrgsList>
        <OrgItem />
      </OrgsList>

      <Footer />
    </Fragment>
  );
};

export default Home;
