import React from "react";
import { Link } from "react-router-dom";
function Services() {
  return (
    <section className="features_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="main_title">
              <h2>what i do </h2>
              <p>
                I am currently working as a Freelancer and providing my computer
                science services to various clients.My current focus is
                expanding expertise in Mobile App Development to create
                innovative projects.
              </p>
            </div>
          </div>
        </div>
        <div className="row  feature_item  ">
          <div className="col-lg-5 col-md-5">
            <div>
              <img src="img/services/mernlogo.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div>
              <h4>full stack development</h4>
              <p>
                Building responsive and dynamic websites with React.js, along
                with developing RESTful APIs using Express.js, Node.js, and
                MongoDB, is a powerful technology stack that allows you to
                create robust and scalable web applications.
              </p>
              <br />

              <Link to="/Contact">
                <a className="primary_btn" href="#">
                  <span>Hire Me</span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="row  feature_item  ">
          <div className="col-lg-5 col-md-5">
            <div>
              <h4>React Native development</h4>
              <p>
                Proficient in object-oriented programming and software design
                principles.Experience with version control systems such as Git
                for collaborative development.Strong problem-solving skills and
                ability to troubleshoot complex issues.Familiarity with MySQL
                databases for data storage and retrieval
              </p>
              <br />

              <Link to="/Contact">
                <a className="primary_btn" href="#">
                  <span>Hire Me</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-5 col-md-5">
            <div>
              <img src="img/services/reactnative.png" alt="" />
          
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
