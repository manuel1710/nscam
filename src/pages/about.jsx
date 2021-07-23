import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "magnific-popup";

import { Link } from "react-router-dom";
import { Navbar, Footer } from "../components";
import director from "../images/test.jpeg";

const AboutPage = () => {
  return (
    <div className="main">
      <Navbar />
      {/* SITE BANNER START */}
      <section className="site-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 about-image text-center">
              <img
                src={director}
                alt="banner-image"
                className="img-fluid aboutpage-image"
              />
              <h1 className="text-center">Meet our Director!</h1>
              <h3>Mrs Nadine Simpson-McLean</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-12 col-md12 text-start">
              <p className="para fs-2 lh-base">
                Here at NSCAM, we provide a wide range of services. These
                serivces fall into our core values. Take a look!
              </p>
              <ul>
                <li>
                  <p className="para fs-2 lh-base">
                    We provide local and international tourist with a vacation
                    experience inclusive of tours, accommodations, cuisine,
                    culture, transportation and entertainment.
                  </p>
                </li>
                <li>
                  <p className="para fs-2 lh-base">
                    We allow our clients the comfort of knowing that all
                    elements of their vacation, event and business will be
                    planned and executed as schedule and the experience
                    seamless.
                  </p>
                </li>
                <li>
                  <p className="para fs-2 lh-base">
                    We are determined in creating the atmospheres for all
                    clients to put no limits on their journey.
                  </p>
                </li>
                <li>
                  <p className="para fs-2 lh-base">
                    We offer consultation services for prospective and returning
                    clients who wishes to vacation, conduct business and promote
                    events in Portland.
                  </p>
                </li>
                <li>
                  <p className="para fs-2 lh-base">
                    We facilitate capacity building, mentorship, coaching and
                    empowerment for individuals, entrepreneurs, groups and
                    community.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* SITE BANNER END */}
      <Footer />
    </div>
  );
};

export default AboutPage;
