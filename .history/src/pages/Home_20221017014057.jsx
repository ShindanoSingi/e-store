import React from "react";

import Helmet from "../components/Helmet/Helmet";

import heroImg from "../assets/images/hero-img.png";

import { Container, Row, Col } from "reactstrap";

const Home = () => {
    const year = new Date().getFullYear();
    return (
        <Helmet title={"Home"}>
            <section class="hero_section">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div class="hero_content">
                                <p class="hero_subtitle">
                                    Trending product in {year}
                                </p>
                                <h2>
                                    Make your Interior More Minimalistic &
                                    Modern
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.temporibus molestiae
                                    ratione!
                                </p>
                                <button class="buy_btn">SHOP NOW</button>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div class="hero_img">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>;
        </Helmet>
    );
};

export default Home;
