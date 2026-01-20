import React from "react";
import {Dashboards} from './Dashboard'
import { IoAddCircleSharp, IoAddSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BsFillSendFill } from "react-icons/bs";
import { IoMdArrowRoundDown , IoIosPeople} from "react-icons/io";
import { CgMoreVerticalR } from "react-icons/cg";
import { FaCreditCard } from "react-icons/fa";









const Dashbaord = () => {

    return(
        <Dashboards>
            <div className="main-dashboard">
                
                <div className="accoutninfo">
                   <div className="names">
                    <p>West Vest Online Bank</p>
                    <p>Account</p>
                   </div>

                   <div className="banaces">
                    <p>Available Balance</p>
                    <span>1,200.00</span>
                   </div>

                   <div className="actives">
                    <p className="acives"><span><GoDotFill/></span>Active</p>
                    <p>Last Updated <span>Jan,07. 2026</span></p>
                   </div>

                </div>

                <div className="sendtopup">
                    <div className="onebyne1">
                        <span ><IoAddCircleSharp/></span>
                        <p>Top Up</p>
                    </div>
                    <div className="onebyne">
                        <span ><BsFillSendFill/></span>
                        <p>Send</p>
                    </div>
                    <div className="onebyne">
                        <span ><IoMdArrowRoundDown/></span>
                        <p>Recieve</p>
                    </div>
                    <div className="onebyne">
                        <span ><CgMoreVerticalR/></span>
                        <p>More</p>
                    </div>
                </div>


                <div className="quicttransfer">
                    <p className="trasferquick">Quick Transfer</p>

                    <div className="quicktransfrbox">
                        <div className="myowns">
                            <div className="addes">
                             <span><IoAddSharp/></span>
                             <p>Add New</p>
                            </div>
                            <div className="addess">
                             <span ><IoIosPeople/></span>
                             <p>No saved beneficiaries</p>
                            </div>
                        </div>


                        <div className="myss">
                          <div>
                            <p>Your Active Cards</p>
                            <span><FaCreditCard/></span>
                            <p>No active cards</p>
                          </div>

                        </div>

                    </div>
                </div>




            </div>
        </Dashboards>
    )
}



export default Dashbaord