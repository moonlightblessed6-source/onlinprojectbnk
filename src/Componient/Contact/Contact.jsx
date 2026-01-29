import React from "react";
import { Contactus } from "./Contact";
import { MdContactMail } from "react-icons/md";
import { MdCall, MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FiClock } from "react-icons/fi";

const Contact = () => {
  return (
    <Contactus>
      <div className="mainaboutus">
        <p className="topics">
          <MdContactMail />
          Get In Touch
        </p>
        <h1>Contact Us</h1>
        <span>
          We're here to help with all your banking needs. Reach out to us
          anytime.
        </span>
      </div>

      <div className="contactform">
        <div className="firsdiv">
          <form action="">
            <h1 className="h1sendmes">Send us a Message</h1>

            <div className="mycontacfom">
              <div className="firstname">
                <div>
                  <label htmlFor="FullName">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="EmailAddress">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
            </div>

            <div className="btn">
              <button> Send Message</button>
            </div>
          </form>
        </div>

        <div className="seconddiv">
          <h1>Get in Touch</h1>
          <p>
            Have questions about our services? Need help with your account? Our
            team is ready to assist you.
          </p>

          <div className="intouhbox">
            <div className="boxs">
              <span className="conshere1">
                <MdCall />
              </span>
              <div className="the writeips">
                <p>Phone</p>
                <span>1-800-BANKING</span>
                <span>Available 24/7</span>
              </div>
            </div>

            <div className="boxs">
              <span className="conshere2">
                <MdEmail />
              </span>
              <div className="the writeips">
                <p>Email</p>
                <span>info@westventonline.org</span>
                <span>Response within 24 hours</span>
              </div>
            </div>

            <div className="boxs">
              <span className="conshere3">
                <IoLocation />
              </span>
              <div className="the writeips">
                <p>Visit Us</p>
                <span>123 Banking Street</span>
                <span>Financial District</span>
                <span>New York, NY 10001</span>
              </div>
            </div>

            <div className="boxs">
              <span className="conshere4">
                <FiClock />
              </span>
              <div className="the writeips">
                <p>Banking Hours</p>
                <span>Mon-Fri: 9AM-5PM</span>
                <span>Sat: 9AM-1PM</span>
                <span>Sun: Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="locationmap">
        <div className="find">
          <p>Find Our Locations</p>
          <span>Visit any of our convenient branch locations</span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d24191.63546718769!2d-74.02853380251251!3d40.71901958746316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20banking%20street%20financial%20district%20new%20york%20ny%2010001!5e0!3m2!1sen!2sng!4v1768820273730!5m2!1sen!2sng"
          width="100%"
          height="300"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Contactus>
  );
};

export default Contact;
