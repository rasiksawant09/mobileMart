import React from 'react'
// import img1 from './componentsImages/1.jpg';
// import img2 from './componentsImages/2.jpg';
// import img3 from './componentsImages/3.jpeg';
// import img4 from './componentsImages/4.jpg';
// import img5 from './componentsImages/5.jpg';
// import img6 from './componentsImages/6.jpg';
// import img9 from './componentsImages/9.webp';


//import realme images

import realme2 from './componentsImages/realme/realme C35.webp';
import realme3 from './componentsImages/realme/realme95G.webp';
import realme1 from './componentsImages/realme/realme 9i.webp';


//import iphones
import iphone1 from './componentsImages/iphone/iphone-13.webp';
import iphone2 from './componentsImages/iphone/apple-iphone-11.webp';
import iphone3 from './componentsImages/iphone/apple-iphone-se.webp';

//import redmi
import redmi1 from './componentsImages/redmi/note-11.webp';
import redmi2 from './componentsImages/redmi/note-11t.webp';
import redmi3 from './componentsImages/redmi/redmi-9a-sport.webp';

//CSS file.
import './ComponentCSS/product.css';

//product images import


const Product = () => {
  return (
    <>
      <div className="container-fluid rowMargin">
        <div className="  card-group row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card cardm cardc">
              <img src={realme1} className="card-img-top imgEdit img-fluid mx-auto d-block" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Realme 9i</h5>
                <h6> Price: Rs 13,999</h6>
                <p className="card-text">(Prism Black, 128 GB)  (6 GB RAM)</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardm cardc">
              <img src={realme2} className="card-img-top imgEdit img-fluid mx-auto d-block" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Realme C35</h5>
                <h6> Price: Rs 11,999</h6>
                <p className="card-text">(Glowing Green, 64 GB)  (4 GB RAM)</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardm cardc">
              <img src={realme3} className="card-img-top imgEdit img-fluid mx-auto d-block" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Realme 9 5G</h5>
                <h6> Price: Rs 17,499</h6>
                <p className="card-text">(Meteor Black, 128 GB)  (6 GB RAM)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd Row. */}

      <div className="container-fluid rowMargin coloured">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card cardm">
              <img src={iphone1} className="card-img-top imgEdit img-fluid mx-auto d-block" alt="..." />
              <div className="card-body">
                <h5 className="card-title">APPLE iPhone 13</h5>
                <h6> Price: Rs 74,900</h6>
                <p className="card-text">(Midnight, 128 GB)</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardm">
              <img src={iphone2} className="card-img-top imgEdit img-fluid mx-auto d-block" alt="..." />
              <div className="card-body">
                <h5 className="card-title">APPLE iPhone 11</h5>
                <h6> Price: Rs 49,900</h6>
                <p className="card-text">(Green, 64 GB)</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardm">
              <img src={iphone3} className="card-img-top imgEdit img-fluid mx-auto d-block" alt="..." />
              <div className="card-body">
                <h5 className="card-title">APPLE iPhone SE</h5>
                <h6> Price: Rs 29,999</h6>
                <p className="card-text">(White, 64 GB)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd Row */}
      <div className="container-fluid rowMargin">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card cardm cardc">
              <img src={redmi1} className="card-img-top imgEdit img-fluid mx-auto d-block" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Redmi Note 11</h5>
                <h6> Price: Rs 14,799</h6>
                <p className="card-text">(Starburst White, 64 GB)  (6 GB RAM)</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardm cardc">
              <img src={redmi2} className="card-img-top imgEdit1 img-fluid mx-auto d-block" alt="..." />
              <div className="card-body">
                <h5 className="card-title">REDMI Note 11T 5G</h5>
                <h6> Price: Rs 19,470</h6>
                <p className="card-text">(Stardust White, 128 GB)  (8 GB RAM)</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardm cardc">
              <img src={redmi3} className="card-img-top imgEdit img-fluid mx-auto d-block" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Redmi 9A Sport</h5>
                <h6> Price: Rs 8,171</h6>
                <p className="card-text">(Metallic Blue, 32 GB)  (3 GB RAM)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product