import React from "react";
import {Dashboards} from './Dashboard'
import { IoAddCircleSharp, IoAddSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { BsFillSendFill } from "react-icons/bs";
import { IoMdArrowRoundDown , IoIosPeople, IoIosFlash} from "react-icons/io";
import { CgMoreVerticalR } from "react-icons/cg";
import { FaCreditCard } from "react-icons/fa";
import useDashboard from  './apifetch'
import { CiLock } from "react-icons/ci";
import { TbTransactionDollar , TbShieldDollar} from "react-icons/tb";
import { FiHelpCircle } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";















const Dashbaord = () => {

  const fetchdata = useDashboard();

//   time formatting
  const formatTime = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};


// amount formatting
  const formatCurrency = (amount) => {
  if (!amount) return "$0.00";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount / 100);
};


    return(
        <Dashboards>
            <div className="main-dashboard">
                
                <div className="accoutninfo">
                   <div className="names">
                    <p>West Vest Online Bank</p>
                    <p>  {fetchdata?.account?.account_number
    ? `****${fetchdata.account.account_number.toString().slice(-4)}`
    : ""}</p>
                   </div>

                   <div className="banaces">
                    <p>Available Balance</p>
                    <span>{formatCurrency(fetchdata?.account?.balance)}</span>

                   </div>

                   <div className="actives">
                    <p className="acives"><span><GoDotFill/></span>Active</p>
                    <p>Last Updated <span>{formatTime(fetchdata?.current_time)}</span></p>
                   </div>

                </div>

                <div className="sendtopup">
                    <div className="onebyne1">
                        <span onClick={() => window.location.href = '/direct-deposit'}><IoAddCircleSharp/></span>
                        <p onClick={() => window.location.href = '/direct-deposit'}>Top Up</p>
                    </div>
                    <div className="onebyne">
                        <span ><BsFillSendFill/></span>
                        <p>Send</p>
                    </div>
                    <div className="onebyne">
                        <span onClick={() => window.location.href = '/direct-deposit'}><IoMdArrowRoundDown/></span>
                        <p onClick={() => window.location.href = '/direct-deposit'}>Recieve</p>
                    </div>
                    <div className="onebyne">
                        <span ><CgMoreVerticalR/></span>
                        <p>More</p>
                    </div>
                </div>

<div className="cartds">
    <div>
        <span onClick={() => window.location.href = '/card-lock'}><CiLock/></span>
        <p onClick={() => window.location.href = '/card-lock'}>Card Unlocked</p>
    </div>
    <div>
        <span onClick={() => window.location.href = '/direct-deposit'}><IoIosFlash/></span>
        <p  onClick={() => window.location.href = '/direct-deposit'}>Early Direct Deposit</p>
    </div>
    <div>
        <span><TbTransactionDollar/></span>
        <p>Transactions</p>
    </div>
    <div>
        <span><TbShieldDollar/></span>
        <p>Overdraft Protection</p>
    </div>

        <div>
        <span onClick={() => window.location.href =  '/find-atm'}><FaLocationDot/></span>
        <p onClick={() => window.location.href =  '/find-atm'}>ATM & Cast Deposit Map</p>
    </div>
        <div>
        <span onClick={() => window.location.href = '/contactus'}><FiHelpCircle/></span>
        <p onClick={() => window.location.href = '/contactus'}>Help</p>
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