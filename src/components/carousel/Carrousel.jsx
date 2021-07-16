import React from 'react';
import "./Carousel.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

const Carrousel = () => {
  return (
    <>
      <Carousel fade variant="dark">
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/doejsqlbl/image/upload/v1626420608/reactJs/Carrousel/slider1_kgtrb7.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/doejsqlbl/image/upload/v1626420608/reactJs/Carrousel/slider_hu6g7i.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/doejsqlbl/image/upload/v1626420607/reactJs/Carrousel/slider2_clljde.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Carrousel
