import React from 'react'
import './ComponentCSS/Home.css';
import carousel1 from './componentsImages/carousel1.jpg';
import carousel2 from './componentsImages/carousel2.jpg';
import carousel3 from './componentsImages/carousel3.jpg';
import carousel4 from './componentsImages/carousel4.jpg';



const Home = () => {
  return (
    <>
      {/* Carousel Component */}
      {/* <div className="container-fluid editCarousel"> */}
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="img-fluid" src={carousel1} alt="First Carousel Image" />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Welcome to EXP-8 Mobile Mart.</h1>
                <p>A one Stop Mobile Shop.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <img className="img-fluid" src={carousel2} alt="First Carousel Image"/>

            <div className="container">
              <div className="carousel-caption">
                <h1>We have A-Z brands Phones.</h1>
                <p>You can get all your favorite smartphones here.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
          <img className="img-fluid" src={carousel4} alt="First Carousel Image" />

            <div className="container">
              <div className="carousel-caption text-end">
                <h1>We care For you and respect your needs.</h1>
                <p>We have all types of phones and to fulfill all your work needs.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* </div> */}

    </>
  )
}

export default Home