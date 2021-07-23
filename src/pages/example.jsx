import React from "react";
import { Link } from "react-router-dom";

import Carousel from 'react-bootstrap/Carousel';
import { Navbar, Footer } from "../components";

const ExamplePage=()=>{
    return (
        <div>
            <Navbar/>
            <Carousel style={{ width:"100%" }}>
                <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                    alt="Image One"
                />
                <Carousel.Caption>
                    <h3>Label for first slide</h3>
                    <p>Sample Text for Image One</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                    alt="Image Two"
                />
                <Carousel.Caption>
                    <h3>Label for second slide</h3>
                    <p>Sample Text for Image Two</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/>
            <Link to="/users"> Show List of Users</Link>
            <Footer/>
        </div>
        
    );
};

export default ExamplePage;