import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="home_banner_area">
      <div className="banner_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <div className="banner_content">
                <h3 className="text-uppercase">Hell0</h3>
                <h1 className="text-uppercase">I am Muhammad Rehman</h1>
                <h5 className="text-uppercase">MERN Stack Developer</h5>
                <div className="d-flex align-items-center y">
                  <Link to="/Contact">
                    <a className="primary_btn" href="#">
                      <span>Hire Me</span>
                    </a>
                  </Link>
                  <a
                    className="primary_btn tr-bg" target="_blank"
                    href="img/Resume_Muhammad_Rehman.pdf"
                  >
                    <span>Get CV</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12">
              <div className="home_right_img">
                <img className="" src="img/banner/home-right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
