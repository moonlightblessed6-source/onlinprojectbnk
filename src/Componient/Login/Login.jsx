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
  const [message, setMessage] = useState(false);
  const [step, setStep] = useState("login"); // login | verify
const [verificationCode, setVerificationCode] = useState("");


  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

const Handlesumit = async (e) => {
  e.preventDefault();

  const payload =
    step === "login"
      ? { ...formData }
      : {
          username: formData.username,
          verification_code: verificationCode,
        };

  try {
    const res = await fetch("https://geochain.app/apps/api/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Login failed");
      return;
    }

    // 🔐 Step 1 → show verification input
    if (data.step === "verify") {
      setStep("verify");
      return;
    }

    // ✅ Step 2 → login complete
    if (data.step === "done") {
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      window.location.href = "/profile";
    }
  } catch (err) {
    alert("Server error");
  }
};





  

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
                <label htmlFor="username">User ID</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
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
              <button
                type="button"
                onClick={() => (window.location.href = "/open-account")}
              >
                <IoIosPersonAdd /> Create New Account
              </button>
            </div>
            
{step === "verify" && (
  <div className="otp-box">
    <label>Verification Code</label>

    <input
      type="text"
      value={verificationCode}
      onChange={(e) => setVerificationCode(e.target.value)}
      placeholder="Enter 6-digit code"
      maxLength={6}
      required
    />

    <button type="submit" className="otp-btn">
      Confirm Verification Code
    </button>
  </div>
)}



          </form>
          <div className="last">
            <span>
              <RiSecurePaymentLine /> Security
            </span>
            <span>
              <BiSupport /> Support
            </span>
            <span>
              <IoTerminal /> Terms
            </span>
          </div>
          <div className="lastlast">
            <span>
              By signing in, you agree to our Terms of Service and Privacy
              Policy. Your data is protected with bank-grade security.
            </span>
          </div>
        </div>
      </div>
    </Logon>
  );
};

export default Login;
