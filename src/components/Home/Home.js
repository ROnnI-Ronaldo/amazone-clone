import React from "react";
import "./home.css";

import Product from "../Products/Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12312341"
          title="AmazonBasics 20-Count AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
          price={10.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/71CjeIL3c5L._AC_UL320_.jpg"
        />
        <Product
          id="1212341"
          title="AmazonBasics Legal/Wide Ruled 8-1/2 by 11-3/4 Legal Pad - White (50 Sheet Paper Pads, 12 pack)"
          price={13.83}
          rating={2}
          image="https://m.media-amazon.com/images/I/81gQzwHg2YL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12312341"
          title="AmazonBasics C Cell 1.5 Volt Everyday Alkaline Batteries - Pack of 12"
          price={3.11}
          rating={0}
          image="https://m.media-amazon.com/images/I/81rQOqg6S3L._AC_UL320_.jpg"
        />
        <Product
          id="12312341"
          title="AmazonBasics Lighting to USB A Cable for iPhone and iPad - 6 Feet (1.8 Meters) - 2 -Pack - White"
          price={19.99}
          rating={1}
          image="https://m.media-amazon.com/images/I/613Wvm+VqKL._AC_UL320_.jpg"
        />
        <Product
          id="12312341"
          title="AmazonBasics Silicone, Non-Stick, Food Safe Baking Mat - Pack of 2"
          price={13.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81IC5+bWDgL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12312341"
          title="AmazonBasics Silicone, Non-Stick, Food Safe Baking Mat - Pack of 2"
          price={13.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81IC5+bWDgL._AC_UL320_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
