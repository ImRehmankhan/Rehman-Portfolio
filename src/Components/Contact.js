import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ihmet6a', 'template_rgbjc2f', form.current, {
        publicKey: "ut_bCbFlGIerqe8Ws",
      })
      .then(
        () => {
          alert('Message Successfuly Send!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="contact_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="contact_info">
              <div className="info_item">
                <i className="lnr lnr-home"></i>
                <h6>Islamabad, Pakistan</h6>
                <p>Muhammad Rehman</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-phone-handset"></i>
                <h6>
                  <a href="#">+92-3425221720</a>
                </h6>
                <p>Mon to Fri 9am to 6 pm</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-envelope"></i>
                <h6>
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                    rehmanattock30@gmail.com
                  </a>
                </h6>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <form
              className="row contact_form"
              action="contact_process.php"
              method="post"
              id="contactForm"
              novalidate="novalidate"
              ref={form} 
              onSubmit={sendEmail}
            >
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="1"
                    placeholder="Enter Message"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 d-md-flex align-item-md-center justify-content-md-center text-center">
                <button type="submit" value="submit" className="primary_btn">
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
