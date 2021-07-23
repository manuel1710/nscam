import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../logo1.png";
import Carousel from "react-bootstrap/Carousel";
import "magnific-popup";

import { Link } from "react-router-dom";
import { Navbar, Footer } from "../components";
import business from "../images/services/business.jpg";
import vacation from "../images/services/vacation.jpg";
import event from "../images/services/event-planning.jpg";
import tour from "../images/services/tour.jpg";
import about from "../images/about-us.png";

const MainPage = () => {
  return (
    <div className="main">
      <Navbar />
      <br />
      {/* SITE BANNER START */}
      <section className="site-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 site-title">
              <h3 className="title-text text-center">WELCOME TO</h3>
              <h1 className="title-text text-uppercase text-center">NSCAM</h1>
              <h4 className="title-text text-uppercase m-5 text-center">
                Nature Scenic Cultural Adventurous Movement Tours
              </h4>
            </div>
            <div className="col-lg-6 col-md-12 banner-image">
              <img src={logo} alt="banner-image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* SITE BANNER END */}
      {/* ABOUT COMPANY or ME AREA */}
      <section className="about-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={about} alt="About Me" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 about-title">
              <h2 className="text-upperclass text-center pt-5 fw-bolder">
                <span className="text-uppercase">What Is</span>
                <span>NSCAM?</span>
              </h2>
              <div className="paragraph py-4 w-90">
                <p className="para fs-3">
                  We are a local business that promotes and organize tours,
                  vacations and other events for citizens, locals &
                  international tourist and provide business, financial and
                  vacation consultations and services.
                </p>
                <p className="para fs-3">
                  Breathing on our vision "NSCAM Tours: An Experience of a
                  Lifetime", we aim to provide an environment which edutain
                  participants while they appreciate natural and manmade scenery
                  and adventurers.
                </p>
                <p className="para text-center">
                  <h4 className="fs-1 vision fst-italic fw-bold">"Put No Limit On Your Journey"</h4>
                </p>
              </div>
              <Link to="/about">
                <button
                  type="button"
                  className="btn button primary-button text-uppercase"
                >
                  Click to learn More!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* END ABOUT COMPANY or ME AREA */}
      {/* SERVICES AREA START */}
      <section className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center services-title">
              <h1 className="text-uppercase title-text">Services Offered</h1>
              <p className="para"><h3>We offer a wide range of services!</h3></p>
            </div>
          </div>
          <div className="container services-list">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img src={tour} alt="Service 1" />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase">Tours</h5>
                    <p className="card-text text-secondary">Lorem</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img src={event} alt="Service 2" />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase">
                      Event Planning
                    </h5>
                    <p className="card-text text-secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt reiciendis, atque magnam laboriosam doloremque
                      dolorum!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img src={business} alt="Service 3" />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase">
                      Business and Financial Consultation
                    </h5>
                    <p className="card-text text-secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt reiciendis, atque magnam laboriosam doloremque
                      dolorum!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img src={vacation} alt="Service 4" />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase">
                      Vacation Consultation
                    </h5>
                    <p className="card-text text-secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt reiciendis, atque magnam laboriosam doloremque
                      dolorum!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICES AREA END */}

      <br></br>
      <Footer />
    </div>
  );
};

export default MainPage;
