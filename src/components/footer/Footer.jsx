import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>Stony Hill Road</li>
                <li>Port Antonio P.O</li>
                <li>Portland</li>
                <li>Tel: 876-887-0521(Digicel)</li>
                <li>876-783-7965(Flow)</li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6">
              <h4>Explore Our Website</h4>
              <ul className="list-unstyled">
                <li>
                  {" "}
                  <StyledLink to="/" style={{ textDecoration: "none" }}>
                    {" "}
                    Home{" "}
                  </StyledLink>{" "}
                </li>
                <li>
                  {" "}
                  <StyledLink to="/about"> About Us</StyledLink>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <hr />
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Zing Studios created by Javian R.
              Anderson - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  footer-bottom {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }
`;

const StyledLink = styled(Link)`
  color: var(--mainGrey);
  text-decoration: none;

  &:hover {
    color: var(--mainlightgrey);
  }
`;
