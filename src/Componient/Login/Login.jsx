import React, { useState } from "react";
import { Logon } from "./Login";
import Logo from "../../assets/Logo/logo.png";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaMobileScreenButton, FaMoneyBillTransfer } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaSignInAlt } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoTerminal } from "react-icons/io5";




const Login = () => {

const [message, setMessage] = useState(false)

  const [formData, setFormData]= useState({
    "username": "",
    "password": ""
  })

  const Handlesumit = async (e) => {
    e.preventDefault();



      try {
    const res = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);

// localStorage.setItem("authToken")
    if (!res.ok) {
      alert(data.message || "login failed");
      return;
    }
  localStorage.setItem("authToken", data.token);


    setMessage(true);
    setTimeout(() => {
      window.location.href = '/profile'
    }, 3000);
  } catch (err) {
    alert("Server error");
  }
  }
  return (
    <Logon>
      <div className="mainlogin">

        <div className="first">
          <div className="imagspan">
           <div>
             <img src={Logo} alt="Logo" />
           </div>
          </div>
          <div className="heade">
            <h1>Welcome Back</h1>
            <p>West Vent Online Bank</p>
            <span>
              Swift and secure money transfers worldwide. Experience banking
              reimagined.
            </span>
          </div>

          <div className="boxss">
            <div className="boxmaon">
              <span className="icos">
                <RiSecurePaymentLine />
              </span>
              <div className="writes">
                <p>Bank-Grade Security</p>
                <span>256-bit encryption</span>
              </div>
            </div>
            <div className="boxmaon">
              <span className="icos">
                <FaMoneyBillTransfer />
              </span>
              <div className="writes">
                <p>Instant Transfers</p>
                <span>Real-time processing</span>
              </div>
            </div>
            <div className="boxmaon">
              <span className="icos">
                <AiOutlineGlobal />
              </span>
              <div className="writes">
                <p>Global Reach</p>
                <span>200+ countries</span>
              </div>
            </div>
            <div className="boxmaon">
              <span className="icos">
                <FaMobileScreenButton />
              </span>
              <div className="writes">
                <p>Mobile First</p>
                <span>iOS & Android</span>
              </div>
            </div>
          </div>
        </div>


         



        <div className="seconds">
          <form action="" onSubmit={Handlesumit}>
             {message && <p className="success-msg">Login Successful!</p>}
            <p className="signin">Sign In</p>
            <span className="topis">
              Access your West Vent Online Bank account
            </span>

            <div className="formslogin">
              <div>
                <label htmlFor="username">
                   User ID
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  placeholder="User ID"
                  required
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
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Enter your password"
                  required
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
    </Logon>
  );
};

export default Login;
