import React from "react";
import "./Porfolio.css";
function Portfolio() {
  return (
    <section className="portfolio_area" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main_title text-center">
              <h2>
                quality work <br />
                Recently done project{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="filters-content">
          <section className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                  <div
                    className="card text-dark card-has-bg click-col"
                    style={{
                      "background-image": "url('img/portfolio/homepage.png')",
                      "background-size": "cover",
                    }}
                  >
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body"></div>
                      <div className="card-footer">
                        <div className="media">
                          <div className="media-body">
                            <p>
                              {" "}
                              <small className="card-meta mb-2">
                                FOOT WARE LANDING PAGE
                              </small>
                            </p>
                            <h4 className="card-title mt-0 ">
                              <a
                                className="text-light"
                                herf="https://creativemanner.com"
                              >
                               Techonology: Reactjs | Html-5 | CSS-3
                              </a>
                            </h4>
                            <small className=" text-light">August 2, 2024</small><br/>
                            <a className=" tr-bg visit-website-btn " href="https://foot-wear-dun.vercel.app/" target="_blank"><span>Visit Website</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                  <div
                    className="card text-dark card-has-bg click-col"
                    style={{
                      "background-image":
                        "url('img/portfolio/researchagency.png')",
                      "background-size": "cover",
                    }}
                  >
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body"></div>
                      <div className="card-footer">
                        <div className="media">
                          <div className="media-body">
                            <p>
                              {" "}
                              <small className="card-meta mb-2">
                              Research_Agency
                              </small>
                            </p>
                            <h4 className="card-title mt-0 ">
                              <a
                                className="text-light"
                                herf="https://creativemanner.com"
                              >
                                Techonology: Reactjs | Html-5 | CSS-3
                              </a>
                            </h4>
                            <small className=" text-light">December 2, 2023</small><br />
                            <a className=" tr-bg visit-website-btn " href="https://imrehmankhan.github.io/Research_Agency-/" target="_blank"><span>Visit Website</span></a>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                  <div
                    className="card text-dark card-has-bg click-col"
                    style={{
                      "background-image": "url('img/portfolio/biit.png')",
                      "background-size": "cover",
                    }}
                  >
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body"></div>
                      <div className="card-footer">
                        <div className="media">
                          <div className="media-body">
                            <p>
                              {" "}
                              <small className="card-meta mb-2">
                                BIIT Institute
                              </small>
                            </p>
                            <h4 className="card-title mt-0 ">
                              <a
                                className="text-light"
                                herf="https://creativemanner.com"
                              >
                                Techonology: Reactjs | Html-5 | CSS-3
                              </a>
                            </h4>
                            <small className=" text-light">August 2, 2024</small><br/>
                            <a className=" tr-bg visit-website-btn " href="https://imrehmankhan.github.io/biit.github.io/" target="_blank"><span>Visit Website</span></a>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
