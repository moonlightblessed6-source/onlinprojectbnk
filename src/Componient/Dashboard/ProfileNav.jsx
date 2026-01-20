import React, { useState } from "react";
import {Nav} from './ProfileNav'
import Logo from '../../assets/Logo/logo.png'
import { VscAccount } from "react-icons/vsc";
import { IoMdArrowDropdown, IoIosNotifications } from "react-icons/io";









const ProfileNav = () => {

    const [dropdown, setDropdown] = useState(false)

    const dropdowns = () => {
       setDropdown(prev => !prev) 
    }

    return(

        <Nav>

            <div className="navbars">
                <div className="left">
                    <img src={Logo} alt="" />
                </div>

                <div className="right">
                    <span className="iconss"><IoIosNotifications/></span>
                    <span></span>
                    <span>LTC 93</span>
                    <span>John</span>
                    <div className="name">
                        <span className="iconss" onClick={dropdowns}><VscAccount/></span>
                        <span className="iconss" onClick={dropdowns} ><IoMdArrowDropdown/></span>
                        {dropdown &&(
                        <div className="dropdown">
                            <span onClick={() => setDropdown(false)}>John divid</span>
                            <span onClick={() => setDropdown(false)}>Account</span>
                            <span onClick={() => setDropdown(false)}>Logout</span>
                        </div>
                        )}

                    </div>
                </div>
            </div>

        </Nav>
    )
}


export default ProfileNav