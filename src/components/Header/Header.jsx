import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user.svg";

import { Container, Row } from "reactstrap";
import { motion } from "framer-motion/dist/framer-motion";

const nav__links = [
    {
        path: "home",
        display: "Home"
    },
    {
        path: "shop",
        display: "Shop"
    },
    {
        path: "cart",
        display: "Cart"
    }
];

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <div className="nav_wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>Lydia Store</h1>
                            </div>
                        </div>

                        <div className="navigation">
                            <ul className="menu">
                                {nav__links.map(item =>
                                    <li className="nav__item" key={item}>
                                        <NavLink
                                            to={item.path}
                                            className={navClass =>
                                                navClass.isActive
                                                    ? "nav__active"
                                                    : ""}
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className="nav__icons">
                            <span className="fav__icon">
                                <i class="ri-heart-line" />
                                <span className="badge">2</span>
                            </span>
                            <span className="cart__icon">
                                <i class="ri-shopping-bag-line" />
                                <span className="badge">2</span>
                            </span>
                            <span>
                                <motion.img
                                    whileTap={{ scale: 1.2 }}
                                    src={user_icon}
                                />
                            </span>
                        </div>

                        <div class="mobile__menu">
                            <span>
                                <i class="ri-menu-line" />
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
