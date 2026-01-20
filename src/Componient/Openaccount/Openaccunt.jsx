import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo/logo.png";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";
import { Craeteaccount } from "./Openaccunt";
import { CiGlobe } from "react-icons/ci";

import {
  MdOutlineAccessTime,
  MdAccountCircle,
  MdContactPhone,
  MdOutlinePersonalInjury,
} from "react-icons/md";

const Openaccunt = () => {
  const [acreateaccount, setAcreateaccount] = useState("Personal");




  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const countryNames = data
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b));

        setCountries(countryNames);
      });
  }, []);


const currencies = ["USD", "EUR", "GBP", "CAD", "AUD"];
const accountTypes = ["Savings", "Current", "Business","Investment"];
const Countries = [
  "United States",      
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "Switzerland",
  "Greenland",
  "Austria",             
  "Italy",
  "France",
  "Luxembourg",          
  "Denmark",             
];


  const [formData, setFormData] = useState({
  first_name: "",
  last_name: "",
  middle_name: "",
  username: "",
  email: "",
  phone: "",
  country: "",
  currency: "",
  Account_Type: "",
  pin: "",
  password: "",
  password1: "",
  agree: false,
});


const handleSubmit = async (e) => {
  e.preventDefault();

  // final validation
  if (!formData.first_name) {
    alert("Enter first_name");
    return;
  }
  if (!formData.last_name) {
    alert("Enter last_name");
    return;
  }
  if (!formData.username) {
    alert("Enter username");
    return;
  }
  if (!formData.email) {
    alert("Enter email");
    return;
  }
  if (!formData.phone) {
    alert("Enter phone");
    return;
  }
  if (!formData.country) {
    alert("Enter country");
    return;
  }
  if (!formData.currency) {
    alert("Enter currency");
    return;
  }
  if (!formData.Account_Type) {
    alert("Enter account Type");
    return;
  }
  if (!formData.pin) {
    alert("Enter pin");
    return;
  }
  if (!formData.agree) {
    alert("You must agree to the terms");
    return;
  }

  if (formData.password !== formData.password1) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await fetch("https://your-backend-api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Registration failed");
      return;
    }

    alert("Account created successfully!");
  } catch (err) {
    alert("Server error");
  }
};

  return (
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
              Start your financial journey with West Vent Online Bank. Secure,
              fast, and reliable banking at your fingertips.
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
          <form action="" onSubmit={handleSubmit}>
            <p>Create Account</p>

            <div className="infosslide">
              <div className="parts">
                <span
                  className={`icons1 ${acreateaccount === "Personal" ? "active" : ""}`}
                >
                  <MdOutlinePersonalInjury />
                </span>
                <p>Personal</p>
              </div>
              <div className="parts">
                <span
                  className={`icons1 ${acreateaccount === "Contact" ? "active" : ""}`}
                >
                  <MdContactPhone />
                </span>
                <p>Contact</p>
              </div>
              <div className="parts">
                <span
                  className={`icons1 ${acreateaccount === "Account" ? "active" : ""}`}
                >
                  <MdAccountCircle />
                </span>
                <p>Account</p>
              </div>
              <div className="parts">
                <span
                  className={`icons1 ${acreateaccount === "Security" ? "active" : ""}`}
                >
                  <RiLockPasswordFill />
                </span>
                <p>Security</p>
              </div>
            </div>

            {acreateaccount === "Personal" && (
              <div>
                <div className="persoanlinf">
                  <span
                    className={`icons1 ${acreateaccount === "Personal" ? "active" : ""}`}
                  >
                    <MdOutlinePersonalInjury />
                  </span>
                  <p className="mytop">Personal Information</p>
                  <span>Tell us about yourself</span>
                </div>

                <div className="formespersonal">
                  <div>
                    <label htmlFor="first_name">First Name *</label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      value={formData.first_name}
                      onChange={(e) =>  setFormData({...formData, first_name: e.target.value,})}
                      placeholder="John "
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name">Last Name *</label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      value={formData.last_name}
                      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                      placeholder="Smith"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name">Middle Name</label>
                    <input
                      type="text"
                      name="middle_name"
                      id="middle_name"
                      value={formData.middle_name}
                      onChange={(e) => setFormData({ ...formData, middle_name: e.target.value })}
                      placeholder="Stone"
                    />
                  </div>
                  <div>
                    <label htmlFor="Username">Username *</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      placeholder="johnsmith232"
                      required
                    />
                  </div>
                </div>
                <div className="btn">
                  <button
                    type="button"
                    onClick={() => setAcreateaccount("Contact")}
                  >
                    Next
                  </button>
                  {/* <button type="button" onClick={goToContact}>Next</button> */}
                </div>

                <p className="alreadymemeber">
                  Already have an account?{" "}
                  <span onClick={() => (window.location.href = "/login")}>
                    Sign In
                  </span>
                </p>
                <span className="reserved">
                  © 2026 West Vent Online Bank. All Rights Reserved.
                </span>
              </div>
            )}

            {acreateaccount === "Contact" && (
              <div>
                <div className="persoanlinf">
                  <span
                    className={`icons1 ${acreateaccount === "Contact" ? "active" : ""}`}
                  >
                    <MdContactPhone />
                  </span>
                  <p className="mytop">Contact Information</p>
                  <span>How can we reach you?</span>
                </div>

                <div className="formespersonal">
                  <div>
                    <label htmlFor="first_name">Email Address *</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="johnsmile@example.com "
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name">Phone Number *</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (234) 567-8990 "
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name">Country *</label>
                    <select onChange={(e) => setFormData({ ...formData, country: e.target.value })} required>
                      <option
                        
                        value="country"
                      >
                        Select country
                      </option>
                      {Countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="btn1">
                  <button
                    type="button"
                    onClick={() => setAcreateaccount("Personal")}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setAcreateaccount("Account")}
                  >
                    Next
                  </button>
                </div>

                <p className="alreadymemeber">
                  Already have an account?{" "}
                  <span onClick={() => (window.location.href = "/login")}>
                    Sign In
                  </span>
                </p>
                <span className="reserved">
                  © 2026 West Vent Online Bank. All Rights Reserved.
                </span>
              </div>
            )}

            {acreateaccount === "Account" && (
              <div>
                <div className="persoanlinf">
                  <span
                    className={`icons1 ${acreateaccount === "Account" ? "active" : ""}`}
                  >
                    <MdAccountCircle />
                  </span>
                  <p className="mytop">Account Setup</p>
                  <span>Choose your account preferences</span>
                </div>

                <div className="formespersonal">
                  <div>
                    <label htmlFor="last_name">Currency *</label>
                    <select   onChange={(e) =>
    setFormData({ ...formData, currency: e.target.value })
  }
  required>
                      <option
                       
                        value="currency"
                        disabled hidden
                      >
                       Currency
                      </option>
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="last_name">Account Type * *</label>
                    <select   onChange={(e) =>
    setFormData({ ...formData, Account_Type: e.target.value })
  }
  required>
                      <option
                        
                        value="Account_Type"
                        disabled hidden
                      >
                        Select Account Type *
                      </option>
                      {accountTypes.map((Account_Type) => (
                        <option key={Account_Type} value={Account_Type}>
                          {Account_Type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="last_name">Transaction PIN *</label>
                    <input
                      type="password"
                      name="pin"
                      id="pin"
                      value={formData.pin}
  onChange={(e) =>
    setFormData({ ...formData, pin: e.target.value })
  }
                      placeholder="Pin "
                      required
                    />
                  </div>
                </div>

                <div className="btn1">
                  <button onClick={() => setAcreateaccount("Contact")}>
                    Previous
                  </button>
                  <button onClick={() => setAcreateaccount("Security")}>
                    Next
                  </button>
                </div>

                <p className="alreadymemeber">
                  Already have an account?{" "}
                  <span onClick={() => (window.location.href = "/login")}>
                    Sign In
                  </span>
                </p>
                <span className="reserved">
                  © 2026 West Vent Online Bank. All Rights Reserved.
                </span>
              </div>
            )}
            {acreateaccount === "Security" && (
              <div>
                <div className="persoanlinf">
                  <span
                    className={`icons1 ${acreateaccount === "Security" ? "active" : ""}`}
                  >
                    <RiLockPasswordFill />
                  </span>
                  <p className="mytop">Security Setup</p>
                  <span>Secure your account</span>
                </div>
            <div className="formespersonal">
                <div>
                  <label htmlFor="last_name">Password *</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Password "
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Confirm_Password">Confirm Password *</label>
                  <input
                    type="password"
                    name="password1"
                    id="password1"
                    value={formData.password1}
                      onChange={(e) => setFormData({ ...formData, password1: e.target.value })}
                    placeholder="Confirm your Password "
                    required
                  />
                </div>
                </div>

                <div className="agreedtoterm">
                  <div><input type="checkbox" name="agree" id="agree"
                  checked={formData.agree}
  onChange={(e) =>
    setFormData({ ...formData, agree: e.target.checked })
  }
                  /></div>
                  <p>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>
                </div>


                <div className="btn1">
                  <button type="button" onClick={() => setAcreateaccount("Account")}>
                    Previous
                  </button>
                  {/* <button onClick={() => setAcreateaccount("Security")}>Next</button> */}
                  <button type="submit">Regiester</button>
                </div>

                <p className="alreadymemeber">
                  Already have an account?{" "}
                  <span onClick={() => (window.location.href = "/login")}>
                    Sign In
                  </span>
                </p>
                <span className="reserved">
                  © 2026 West Vent Online Bank. All Rights Reserved.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </Craeteaccount>
  );
};

export default Openaccunt;
