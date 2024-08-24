import React from "react";

function Footer() {
  return (
    <footer className="footer_area ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="footer_top flex-column">
              <div className="footer_logo">
                <a href="#">
                  <img src="img/logor.png" alt="" />
                </a>
                <h4>Follow Me</h4>
              </div>
              <div className="footer_social">
                
                <a href="https://www.linkedin.com/in/rehmankhan301b/" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/ImRehmankhan" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.behance.net/rehmankhan5" target="_blank">
                  <i className="fa fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer_bottom justify-content-center">
          <p className="col-lg-8 col-sm-12 footer-text">
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | Muhammad Rehman
           
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
