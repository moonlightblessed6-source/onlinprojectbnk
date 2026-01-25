import React, { useState } from "react";
import {WiretransferWrapper} from "./Wiretransfer"; 
import useDashboard from './apifetch'
import { FaArrowLeft } from "react-icons/fa";




const Localtransfer = () => {
 
    const fetchdata = useDashboard();




  const [amount, setAmount] = useState("");
  const [receiverAccount, setReceiverAccount] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverBank, setReceiverBank] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [purpose, setPurpose] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [transferId, setTransferId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false); // ✅ MISSING STATE

  // ✅ TRANSFER SUBMIT
const handleTransferSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      localStorage.clear();      
      window.location.href = "/login"; 
      return;                     
    }

    const res = await fetch("https://geochain.app/apps/api/transfers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        amount: parseFloat(amount),
        receiver_account: receiverAccount,
        receiver_name: receiverName,
        receiver_bank: receiverBank,
        swift_code: swiftCode,
        purpose,
      }),
      // ✅ ensure token/cookies are sent if needed
      credentials: 'include',
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Transfer failed");
    }

    const data = await res.json();
    setTransferId(data.transfer_id);
    setShowOtpModal(true);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

// ✅ OTP SUBMIT
const handleOtpSubmit = async (e) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      localStorage.clear();
      window.location.href = "/login";
      return;
    }

    const res = await fetch(`https://geochain.app/apps/api/transfers/${transferId}/verify/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ verification_code: otpCode }),
      // ✅ ensure token/cookies are sent if needed
      credentials: 'include',
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.detail || 'OTP verification failed');
    }

    alert('Transfer verified. Pending approval.');
    setShowOtpModal(false);
    setOtpCode('');
    window.location.href = '/transaction';

  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <WiretransferWrapper>
      <div className="profilewrapper">
        <div className="backes">
          <FaArrowLeft onClick={() => window.location.href = '/transfer-list'} />
        <p onClick={() => window.location.href = '/transfer-list'}>Transfer</p>
        </div>

        <div className="amount">
          <p>
            <strong>Balance</strong>
          </p>
          <strong>
            $
            {new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(fetchdata?.account?.balance)}
          </strong>
        </div>

        <form onSubmit={handleTransferSubmit}>
         <div>
             <label>From Account</label>
          <input value={fetchdata?.account?.account_number} disabled />
         </div>

         <div>
          <label>Receiver’s Account</label>
          <input value={receiverAccount} onChange={(e) => setReceiverAccount(e.target.value)} required />
         </div>
     <div>
                  <label>Receiver’s Full Name</label>
          <input value={receiverName} onChange={(e) => setReceiverName(e.target.value)} required />

     </div>
        <div>
                      <label>Receiver’s Bank</label>
          <input value={receiverBank} onChange={(e) => setReceiverBank(e.target.value)} required />

        </div>
        <div>
                      <label>Routing Number</label>
          <input value={swiftCode} onChange={(e) => setSwiftCode(e.target.value)} />

        </div>


  <div>
              <label>Purpose of Transfer</label>
          <input value={purpose} onChange={(e) => setPurpose(e.target.value)} />

  </div>

<div>
              <label>Amount</label>
          <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} required />

</div>
  <div className="btn">
              <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Transfer"}
          </button>

          {error && <p style={{ color: "red" }}>{error}</p>}
  </div>
        </form>

             {showOtpModal && (
          <div className="otp-modal">
            <h3>Enter OTP Code</h3>
            <form onSubmit={handleOtpSubmit}>
              <input
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                maxLength={6}
                placeholder="6-digit code"
                required
              />
              <button className="mysumit" type="submit">{loading ? "Verifying..." : "Verify"}</button>
              <button className="cancels" type="button" onClick={() => setShowOtpModal(false)}>
                Cancel
              </button>
            </form>
          </div>
         )} 
      </div>
    </WiretransferWrapper>
  );
};

export default Localtransfer;
