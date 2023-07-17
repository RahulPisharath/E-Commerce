import { useState, useEffect } from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import Works from '../components/Works';
import Testimonials from '../components/Testimonials';
import Carouselitem  from "./Carouselitem";
import Banner from './Banner';

const Body = () => {
  return (
    <div className="theme_bg">
      <Banner/>
      <div className="container-fluid pt-5 pb-2 bg_grey">
        <div className="container">
          <h4 className="mb-2 bold black text-uppercase">
            Most Used Services
          </h4>
          <Link to={'/detail/1'}>
          <Carouselitem />
          </Link>
          
    
        </div>
      </div>
      <div className="container-fluid pt-5 pb-2">
        <div className="container">      
          <div className="">
            <h4 className="mb-2 bold black text-uppercase">
              Recommended Services
            </h4>
            <Carouselitem />
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 pb-2 bg-grey">
        <div className="container">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Body;
