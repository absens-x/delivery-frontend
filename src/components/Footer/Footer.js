import React from "react";
import classes from "./Footer.module.scss";

import logo from "../../assets/img/svg/logo.svg";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrap}>
        {/* <div className={classes.top}>
          <div className="container">
            <div className="row-mg">
              <div className={classes.logo}>
                <a href="/">
                  <img src={logo} />
                </a>
              </div>
              <nav className={classes.nav}>
                <ul className="row">
                  <li>
                    <a href="">Главная</a>
                  </li>
                  <li>
                    <a href="">О нас</a>
                  </li>
                  <li>
                    <a href="">Контакты</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div> */}

        {/* <div className={classes.middle}></div> */}

        <div className={classes.bottom}>
          <div className="container">
            <div className="row">
              <p className={classes.copyright}>&copy; 2020 Delivery</p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
