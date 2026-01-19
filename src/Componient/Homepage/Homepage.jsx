import React from "react";
import { Homepages } from "./Homepgae";
import { IoHomeOutline, IoPersonSharp } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { MdBusinessCenter, MdStar } from "react-icons/md";
import { FaCreditCard, FaPiggyBank, FaRegEnvelope, FaHandHoldingUsd } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoMdCall } from "react-icons/io";
import featured from '../../assets/hompage/feature.jpg'
import { FaCheck } from "react-icons/fa6";
import photo551836022 from './../../assets/hompage/photo-1551836022-deb4988cc6c0.avif'
import photo99 from './../../assets/hompage/photo-1554224155-6726b3ff858f.avif'
import photo929 from './../../assets/hompage/photo-1559526324-4b87b5e36e44.avif'
import photo9292 from './../../assets/hompage/photo-1507003211169-0a1dd7228f2d.avif'
import { FcBusinessContact } from "react-icons/fc";
import { FaLocationDot ,FaCertificate} from "react-icons/fa6";
















const Homepage = () => {
  return (
    <Homepages>
      <div className="homepage-main">
        <div className="witht">
          <div className="homepage-topic">
            <h2>
              West Vent Online <br />
              Bank
            </h2>
            <p>
              We do banking differently. We believe that people come first, and
              <br />
              that everyone deserves a great experience every step of the way.
            </p>
            <div className="Openaccount">
              <button>Open Account Today</button>
              <button>Login to Banking</button>
            </div>
          </div>

          <div className="Rountine">
            <div className="box-same">
              <div className="writeup">
                <p>ROUTING #</p>
                <p>251480576</p>
              </div>
              <div><CiBank/></div>
            </div>
            <div className="box-same">
              <div className="writeup">
                <p>RANCH HOURS</p>
                <p>Mon-Fri: 9AM-5PM</p>
                <p>Sat: 9AM-1PM</p>
              </div>
              <div><FcAbout/></div>
            </div>
            <div className="box-same">
              <div className="writeup">
                <p>24/7 SUPPORT</p>
                <p>1-800-BANKING</p>
                <p>Always here to help</p>
              </div>
              <div><IoMdCall/></div>
            </div>
          </div>
        </div>
      </div>

      <div className="homepage-body">
        <div className="onliebank">
          <p className="westbank">West Vent Online Bank Rates</p>
          <h2>West Vent Online Bank Member Care</h2>
          <span className="Discover">
            Discover competitive rates designed to help your money grow faster
          </span>
        </div>

        <div className="rate-box">
          <div>
            <span className="spans"><FaPiggyBank/></span>
            <div className="insid-ratebox">
              <p>3.75%</p>
              <span className="apy">APY*</span>
              <p className="yeild">HIGH YIELD SAVINGS</p>
              <span className="highyiled">High Yield Savings Rate</span>
              <p className="futured">FEATURED</p>
            </div>
          </div>
          <div>
            <span className="spans"><FaCertificate/></span>
            <div className="insid-ratebox">
              <p>3.75%</p>
              <span className="apy">APY*</span>
              <p className="yeild">HIGH YIELD SAVINGS</p>
              <span className="highyiled">High Yield Savings Rate</span>
              <p className="futured">FEATURED</p>
            </div>
          </div>
          <div>
            <span className="spans"> <FaCreditCard /></span>
            <div className="insid-ratebox">
              <p>3.75%</p>
              <span className="apy">APY*</span>
              <p className="yeild">HIGH YIELD SAVINGS</p>
              <span className="highyiled">High Yield Savings Rate</span>
              <p className="futured">FEATURED</p>
            </div>
          </div>
          <div>
            <span className="spans"><FaHandHoldingUsd/></span>
            <div className="insid-ratebox">
              <p>3.75%</p>
              <span className="apy">APY*</span>
              <p>HIGH YIELD SAVINGS</p>
              <span>High Yield Savings Rate</span>
              <p>FEATURED</p>
            </div>
          </div>
        </div>

        <p className="AnnualPercentage">
          *Annual Percentage Yield. Rates subject to change. Terms and
          conditions apply.
        </p>
      </div>

      <div className="howtohelpyoutoday">
        <div className="server">
          <p>Our Services</p>
                  <h2>How Can We Help You Today?</h2>
        <span>Comprehensive banking solutions tailored to your needs</span>
        </div>


        <div className="howtohlepyoubox">
          <div>
            <span>
              <CiBank/>
             
            </span>
            <h1>Deposit Accounts</h1>
            <p>
              Secure your money with our high-yield savings and checking
              accounts designed for growth.
            </p>
          </div>
          <div>
            <span>
              <FaCreditCard />
            </span>
            <h1>Credit Cards</h1>
            <p>
              Find the perfect credit card for your lifestyle and spending
              habits with competitive rates.
            </p>
          </div>
          <div>
            <span> <IoHomeOutline /></span>
            <h1>Loans</h1>
            <p>
              Get competitive rates on personal, auto, and home loans tailored to your financial goals.


            </p>
          </div>
          <div>
            <span><MdBusinessCenter/></span>
            <h1>Business Banking</h1>
            <p>
              Comprehensive banking solutions designed to help your business thrive and grow.


            </p>
          </div>
          <div>
            <span><FaPiggyBank/></span>
            <h1>Wealth & Retire</h1>
            <p>
              Plan for your future with our expert investment and retirement planning services.
            </p>
          </div>
          <div>
            <span><FcAbout/></span>
            <h1>About West Vent Online Bank</h1>
            <p>
             Learn more about our commitment to exceptional banking services and community support.


            </p>
          </div>
        </div>
      </div>



      <div className="Financialstrength">

        <div className="Financial">
         <img src={featured} alt="featured" />
        </div>

        <div className="Financialbuilding">
          <p className="topichere">Get $200* With a Checking Account Built for You</p>
          <div className="businesss">
            <h1>Start Building Your Financial Strength</h1>
          <p>For a limited time, get a $200 when you open any new account, and what helps you reach your financial goals. You can open a new account online or in person at any of our locations.</p>

          </div>
          <div className="minimumbalance">
            <span><FaCheck/> No minimum balance required</span>
            <span><FaCheck/> Free online and mobile banking</span>
            <span><FaCheck/> 24/7 customer support</span>
          </div>
          <div>
            <button className="btn">Open Account Now</button>
          </div>
        </div>


      </div>


      <div className="MemberFocusedBanking">
        <div className="div">
          <p className="topicp">Member-Focused Banking</p>
        </div>
        <div className="focuedbox">
          <div className="firsrbox">
            <h1 className="h1here">Building Strength Together</h1>
            <p className="pfirsrbox">West Vent Online Bank is a full-service credit union built on the foundation of providing our members with every step of their financial journey. We're committed to helping our members achieve their financial goals through personalized service and competitive rates.</p>
         
         <div className="columbox">
          <div>
            <p>Competitive Rates</p>
            <span>Better rates on savings, loans, and credit cards designed to maximize your financial growth.</span>
          </div>
          <div>
            <p>Member-Focused</p>
            <span>We're owned by our members, not shareholders. Your success is our priority.</span>
          </div>
          <div>
            <p>Community Committed</p>
            <span>Supporting local communities and causes that matter to our members.</span>
          </div>
        </div>
         </div>

         <div className="imgebuld">
          <div>
            <img src={photo551836022} alt="photo-1551836022-deb4988cc6c0" />
          </div>
          <div>
            
            <img src={photo9292} alt="" />
          </div>
          <div>
            <img src={photo929} alt="" />
          </div>
          <div>
            <img src={photo99} alt="photo99" />
          </div>
          
         </div>

        </div>


      </div>

      <div className="testimonial">
        <p className="testheader">Hear From Our Customers</p>

        <div className="testmoniabox">
          <div>
            <span className="mystart"><MdStar/> <MdStar/> <MdStar/> <MdStar/> <MdStar/></span>
            <p className="heade">"I am impressed with the customer service and speed of payout."</p>
            <div className="image">
              <div>
               <span className="spamhuman"><IoPersonSharp/></span>
              </div>
              <div>
                <p>Sarah Morris</p>
                <p>Verified Customer</p>
              </div>
            </div>
          </div>
          <div>
            <span className="mystart"><MdStar/> <MdStar/> <MdStar/> <MdStar/> <MdStar/></span>
            <p className="heade">"Excellent service and competitive rates. Highly recommended!"</p>
            <div className="image">
              <div>
               <span className="spamhuman"><IoPersonSharp/></span>
              </div>
              <div>
                <p>John Davis</p>
                <p>Business Owner</p>
              </div>
            </div>
          </div>
          <div>
            <span className="mystart"><MdStar/> <MdStar/> <MdStar/> <MdStar/> <MdStar/></span>
            <p className="heade">"The mobile app is fantastic and customer support is top-notch."</p>
            <div className="image">
              <div>
               <span className="spamhuman"><IoPersonSharp/></span>
              </div>
              <div>
                <p>Emily Johnson</p>
                <p>Personal Banking</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>


      <div className="openshours">
        <div className="openhoursmain">
          <div>
            <span className="spamhuma"><FcBusinessContact/></span>
            <p>Banking Hours</p>
            <span>Mon-Fri: 9AM-5PM</span>
            <span>Sat: 9AM-1PM</span>
            <span>Sun: Closed</span>
          </div>
          <div>
            <span className="spamhuma"><IoMdCall/></span>
            <p>Phone Banking</p>
            <span>Available 24/7</span>
            <span>Call: 1-800-BANKING</span>
            <span>International: +1-555-0123</span>
          </div>
          <div>
            <span className="spamhuma"><FaRegEnvelope/></span>
            <p>Email Support</p>
            <span>Response within 24hrs</span>
            <span>info@westventonline.com</span>
          </div>
          <div>
            <span className="spamhuma"><FaLocationDot/></span>
            <p>Visit Us</p>
            <span>123 Banking Street</span>
            <span>Financial District</span>
            <span>New York, NY 10001</span>
          </div>
        </div>
      </div>
    </Homepages>
  );
};

export default Homepage;
