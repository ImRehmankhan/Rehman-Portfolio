import React from "react";

function About() {
  return (
    <section className="about_area section_gap">
      <div className="container">
        <div className="row  d-flex justify-content-start align-items-center">
          <div className="offset-lg-1  col-lg-5 col-sm-12 about-padding  d-flex justify-content-center align-items-center">
            <div className="about_img ">
              <img className="" src="img\Profile.png" alt="" />
            </div>
          </div>
          

          <div className="offset-lg-1 col-lg-5 col-sm-12">
            <div className="main_title text-left">
              <h2>
                let’s <br />
                Introduce about <br />
                myself
              </h2>
              <p>
                I am a skilled web developer and programmer, specializing in
                creating robust web applications with technologies like
                React.js, Next.js, Node.js, and TailwindCSS. With a solid
                foundation in computer science principles, I am passionate about
                crafting efficient and user-friendly digital solutions.
              </p>
              <p>Currently seeking new opportunities and freelance projects.</p>
              <a className="primary_btn" href="img/Resume_Muhammad_Rehman.pdf" target="_blank">
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
