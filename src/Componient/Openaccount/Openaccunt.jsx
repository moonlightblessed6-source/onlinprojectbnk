import React from "react";
import Logo from "../../assets/Logo/logo.png";
import {  FaMoneyBillTransfer } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoTerminal } from "react-icons/io5";
import {Craeteaccount} from './Openaccunt'
import { CiGlobe } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";





const Openaccunt = () => {

    return(
        <Craeteaccount>
              <div className="mainlogin">
        
                <div className="first">
                  <div className="imagspan">
                   <div>
                     <img src={Logo} alt="Logo" />
                   </div>
                  </div>
                  <div className="heade">
                    <h1>Join West Vent Online Bank</h1>
                    <p>Create Your Banking Account</p>
                    <span>
                     Start your financial journey with West Vent Online Bank. Secure, fast, and reliable banking at your fingertips.
                    </span>
                  </div>
        
                  <div className="boxss">
                    <div className="boxmaon">
                      <span className="icos">
                        <RiSecurePaymentLine />
                      </span>
                      <div className="writes">
                        <p>Secure Platform</p>
                        <span>Bank-grade security</span>
                      </div>
                    </div>
                    <div className="boxmaon">
                      <span className="icos">
                        <FaMoneyBillTransfer />
                      </span>
                      <div className="writes">
                        <p>Fast Transfers</p>
                        <span>Instant payments</span>
                      </div>
                    </div>
                    <div className="boxmaon">
                      <span className="icos">
                        <MdOutlineAccessTime />
                      </span>
                      <div className="writes">
                        <p>24/7 Access</p>
                        <span>Always available</span>
                      </div>
                    </div>
                    <div className="boxmaon">
                      <span className="icos">
                        <CiGlobe />
                      </span>
                      <div className="writes">
                        <p>Global Banking</p>
                        <span>Worldwide access</span>
                      </div>  

                    </div>
                  </div>
                </div>
        
                <div className="seconds">
                  <form action="">
                    <p className="signin">Sign In</p>
                    <span className="topis">
                      Access your West Vent Online Bank account
                    </span>
        
                    <div className="formslogin">
                      <div>
                        <label htmlFor="Email Address or Username">
                          Email Address or Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Enter Your email address"
                        />
                      </div>
                      <div>
                        <div className="mylabel">
                          <label htmlFor="Password">Password</label>
                          <span>Forgot Password?</span>
                        </div>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Enter your password"
                        />
                      </div>
                    </div>
                    <div className="satyligin">
                      <div>
                        <input type="checkbox" name="checkbox" id="checkbox" />
                      </div>
                      <span>Keep me signed in</span>
                    </div>
        
                    <div className="signinp">
                      <button type="submit">
                        <FaSignInAlt /> Sign In to Account
                      </button>
                    </div>
                    <p className="neswest">New to West Vent Online Bank?</p>
        
                    <div className="signins">
                      <button type="button" onClick={() => window.location.href = '/open-account'}>
                        <IoIosPersonAdd /> Create New Account
                      </button>
                    </div>
                  </form>
                  <div className="last">
                    <span><RiSecurePaymentLine/> Security</span>
                    <span><BiSupport/> Support</span>
                    <span><IoTerminal/> Terms</span>
         
        
                  </div>
                  <div className="lastlast">
                    <span>By signing in, you agree to our Terms of Service and Privacy Policy. Your data is protected with bank-grade security.</span>
                  </div>
                </div>
              </div>
        </Craeteaccount>
    )
}


export default Openaccunt