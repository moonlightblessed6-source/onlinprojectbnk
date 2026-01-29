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

  const [countryCode, setCountryCode] = useState("+1");
  const [country, setCountry] = useState("US");
  const [localNumber, setLocalNumber] = useState("");
  const [receiverPhone, setReceiverPhone] = useState("");

  const [receiverBank, setReceiverBank] = useState("");
  const [iban, setIban] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [purpose, setPurpose] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");

  const [currentCodeType, setCurrentCodeType] = useState(null);
  const [codeInput, setCodeInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [messages, setMessages] = useState(false);

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
        receiver_phone: receiverPhone,
        receiver_bank: receiverBank,
        iban,
        swift_code: swiftCode,
        purpose,
        recipient_address: recipientAddress,
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
        setMessages(true);
        setTimeout(() => {
          setShowCodeModal(false);
          setCurrentCodeType(null);
          setCodeInput("");
          window.location.href = "/transaction";
        }, 4000);
      }
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        window.location.reload();
      }, 10000);
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
        receiver_phone: receiverPhone,
        receiver_bank: receiverBank,
        iban,
        swift_code: swiftCode,
        purpose,
        recipient_address: recipientAddress,
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
        setMessages(true);
        setTimeout(() => {
          setShowCodeModal(false);
          setCurrentCodeType(null);
          setCodeInput("");
          window.location.href = "/transaction";
        }, 4000);
      }
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        window.location.reload();
      }, 10000);
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
      setTimeout(() => {
        window.location.reload();
      }, 10000);
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
            <input
              value={
                fetchdata?.account?.account_number &&
                fetchdata.account.account_number.length >= 4
                  ? "Checking *****" +
                    fetchdata.account.account_number.slice(-4)
                  : "Checking *****----"
              }
              disabled
            />
          </div>

          <div>
            <label>Receiver’s Account</label>
            <input
              value={receiverAccount}
              onChange={(e) => setReceiverAccount(e.target.value)}
              placeholder="Receiver’s Account"
              required
            />
          </div>

          <div>
            <label>Receiver’s Full Name</label>
            <input
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              placeholder="Receiver’s Full Name"
              required
            />
          </div>

          <div>
            <label>Receiver’s Bank</label>
            <input
              value={receiverBank}
              onChange={(e) => setReceiverBank(e.target.value)}
              placeholder="Receiver’s Bank"
              required
            />
          </div>

          <div>
            <label>IBAN</label>
            <input
              value={iban}
              onChange={(e) => setIban(e.target.value)}
              placeholder="IBAN"
            />
          </div>

          <div>
            <label>SWIFT / BIC</label>
            <input
              value={swiftCode}
              onChange={(e) => setSwiftCode(e.target.value)}
              placeholder="SWIFT / BIC"
              required
            />
          </div>

          <div>
            <label>Receiver’s Number</label>
            <div style={{ display: "flex", gap: "1px" }}>
              <select
                value={`${country}|${countryCode}`}
                onChange={(e) => {
                  const parts = e.target.value.split("|");
                  const selectedCountry = parts[0] || "US"; // fallback
                  const selectedCode = parts[1] || parts[0]; // fallback
                  setCountry(selectedCountry);
                  setCountryCode(selectedCode);
                  setReceiverPhone(selectedCode + localNumber);
                }}
                style={{
                  height: "45px",
                  padding: "0 10px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  background: "#fff",
                  width: "100px",
                }}
              >
                <option value="AF|+93">🇦🇫 +93 Afghanistan</option>
                <option value="AL|+355">🇦🇱 +355 Albania</option>
                <option value="DZ|+213">🇩🇿 +213 Algeria</option>
                <option value="AD|+376">🇦🇩 +376 Andorra</option>
                <option value="AO|+244">🇦🇴 +244 Angola</option>
                <option value="AR|+54">🇦🇷 +54 Argentina</option>
                <option value="AM|+374">🇦🇲 +374 Armenia</option>
                <option value="AW|+297">🇦🇼 +297 Aruba</option>
                <option value="AU|+61">🇦🇺 +61 Australia</option>
                <option value="AT|+43">🇦🇹 +43 Austria</option>
                <option value="AZ|+994">🇦🇿 +994 Azerbaijan</option>
                <option value="BS|+1‑242">🇧🇸 +1‑242 Bahamas</option>
                <option value="BH|+973">🇧🇭 +973 Bahrain</option>
                <option value="BD|+880">🇧🇩 +880 Bangladesh</option>
                <option value="BB|+1‑246">🇧🇧 +1‑246 Barbados</option>
                <option value="BY|+375">🇧🇾 +375 Belarus</option>
                <option value="BE|+32">🇧🇪 +32 Belgium</option>
                <option value="BZ|+501">🇧🇿 +501 Belize</option>
                <option value="BJ|+229">🇧🇯 +229 Benin</option>
                <option value="BT|+975">🇧🇹 +975 Bhutan</option>
                <option value="BO|+591">🇧🇴 +591 Bolivia</option>
                <option value="BA|+387">🇧🇦 +387 Bosnia and Herzegovina</option>
                <option value="BW|+267">🇧🇼 +267 Botswana</option>
                <option value="BR|+55">🇧🇷 +55 Brazil</option>
                <option value="BN|+673">🇧🇳 +673 Brunei</option>
                <option value="BG|+359">🇧🇬 +359 Bulgaria</option>
                <option value="BF|+226">🇧🇫 +226 Burkina Faso</option>
                <option value="BI|+257">🇧🇮 +257 Burundi</option>
                <option value="CM|+237">🇨🇲 +237 Cameroon</option>
                <option value="CA|+1">🇨🇦 +1 Canada</option>
                <option value="CL|+56">🇨🇱 +56 Chile</option>
                <option value="CN|+86">🇨🇳 +86 China</option>
                <option value="CO|+57">🇨🇴 +57 Colombia</option>
                <option value="CR|+506">🇨🇷 +506 Costa Rica</option>
                <option value="HR|+385">🇭🇷 +385 Croatia</option>
                <option value="CU|+53">🇨🇺 +53 Cuba</option>
                <option value="CY|+357">🇨🇾 +357 Cyprus</option>
                <option value="CZ|+420">🇨🇿 +420 Czech Republic</option>
                <option value="DK|+45">🇩🇰 +45 Denmark</option>
                <option value="DJ|+253">🇩🇯 +253 Djibouti</option>
                <option value="DM|+1‑767">🇩🇲 +1‑767 Dominica</option>
                <option value="DO|+1‑809">🇩🇴 +1‑809 Dominican Republic</option>
                <option value="EC|+593">🇪🇨 +593 Ecuador</option>
                <option value="EG|+20">🇪🇬 +20 Egypt</option>
                <option value="SV|+503">🇸🇻 +503 El Salvador</option>
                <option value="ER|+291">🇪🇷 +291 Eritrea</option>
                <option value="EE|+372">🇪🇪 +372 Estonia</option>
                <option value="ET|+251">🇪🇹 +251 Ethiopia</option>
                <option value="FI|+358">🇫🇮 +358 Finland</option>
                <option value="FR|+33">🇫🇷 +33 France</option>
                <option value="GA|+241">🇬🇦 +241 Gabon</option>
                <option value="GM|+220">🇬🇲 +220 Gambia</option>
                <option value="GE|+995">🇬🇪 +995 Georgia</option>
                <option value="DE|+49">🇩🇪 +49 Germany</option>
                <option value="GH|+233">🇬🇭 +233 Ghana</option>
                <option value="GR|+30">🇬🇷 +30 Greece</option>
                <option value="GT|+502">🇬🇹 +502 Guatemala</option>
                <option value="GN|+224">🇬🇳 +224 Guinea</option>
                <option value="GW|+245">🇬🇼 +245 Guinea‑Bissau</option>
                <option value="GY|+592">🇬🇾 +592 Guyana</option>
                <option value="HT|+509">🇭🇹 +509 Haiti</option>
                <option value="HK|+852">🇭🇰 +852 Hong Kong</option>
                <option value="HU|+36">🇭🇺 +36 Hungary</option>
                <option value="IN|+91">🇮🇳 +91 India</option>
                <option value="ID|+62">🇮🇩 +62 Indonesia</option>
                <option value="IR|+98">🇮🇷 +98 Iran</option>
                <option value="IQ|+964">🇮🇶 +964 Iraq</option>
                <option value="IE|+353">🇮🇪 +353 Ireland</option>
                <option value="IL|+972">🇮🇱 +972 Israel</option>
                <option value="IT|+39">🇮🇹 +39 Italy</option>
                <option value="JP|+81">🇯🇵 +81 Japan</option>
                <option value="JO|+962">🇯🇴 +962 Jordan</option>
                <option value="KE|+254">🇰🇪 +254 Kenya</option>
                <option value="KR|+82">🇰🇷 +82 South Korea</option>
                <option value="KW|+965">🇰🇼 +965 Kuwait</option>
                <option value="KG|+996">🇰🇬 +996 Kyrgyzstan</option>
                <option value="LA|+856">🇱🇦 +856 Laos</option>
                <option value="LV|+371">🇱🇻 +371 Latvia</option>
                <option value="LB|+961">🇱🇧 +961 Lebanon</option>
                <option value="LI|+423">🇱🇮 +423 Liechtenstein</option>
                <option value="LT|+370">🇱🇹 +370 Lithuania</option>
                <option value="LU|+352">🇱🇺 +352 Luxembourg</option>
                <option value="MG|+261">🇲🇬 +261 Madagascar</option>
                <option value="MY|+60">🇲🇾 +60 Malaysia</option>
                <option value="MX|+52">🇲🇽 +52 Mexico</option>
                <option value="NP|+977">🇳🇵 +977 Nepal</option>
                <option value="NL|+31">🇳🇱 +31 Netherlands</option>
                <option value="NZ|+64">🇳🇿 +64 New Zealand</option>
                <option value="NI|+505">🇳🇮 +505 Nicaragua</option>
                <option value="NE|+227">🇳🇪 +227 Niger</option>
                <option value="NG|+234">🇳🇬 +234 Nigeria</option>
                <option value="NO|+47">🇳🇴 +47 Norway</option>
                <option value="OM|+968">🇴🇲 +968 Oman</option>
                <option value="PK|+92">🇵🇰 +92 Pakistan</option>
                <option value="PW|+680">🇵🇼 +680 Palau</option>
                <option value="PA|+507">🇵🇦 +507 Panama</option>
                <option value="PE|+51">🇵🇪 +51 Peru</option>
                <option value="PH|+63">🇵🇭 +63 Philippines</option>
                <option value="PL|+48">🇵🇱 +48 Poland</option>
                <option value="PT|+351">🇵🇹 +351 Portugal</option>
                <option value="QA|+974">🇶🇦 +974 Qatar</option>
                <option value="RO|+40">🇷🇴 +40 Romania</option>
                <option value="RU|+7">🇷🇺 +7 Russia</option>
                <option value="RW|+250">🇷🇼 +250 Rwanda</option>
                <option value="SA|+966">🇸🇦 +966 Saudi Arabia</option>
                <option value="SN|+221">🇸🇳 +221 Senegal</option>
                <option value="SG|+65">🇸🇬 +65 Singapore</option>
                <option value="ZA|+27">🇿🇦 +27 South Africa</option>
                <option value="ES|+34">🇪🇸 +34 Spain</option>
                <option value="LK|+94">🇱🇰 +94 Sri Lanka</option>
                <option value="SE|+46">🇸🇪 +46 Sweden</option>
                <option value="CH|+41">🇨🇭 +41 Switzerland</option>
                <option value="TW|+886">🇹🇼 +886 Taiwan</option>
                <option value="TH|+66">🇹🇭 +66 Thailand</option>
                <option value="TR|+90">🇹🇷 +90 Turkey</option>
                <option value="UG|+256">🇺🇬 +256 Uganda</option>
                <option value="UA|+380">🇺🇦 +380 Ukraine</option>
                <option value="AE|+971">🇦🇪 +971 United Arab Emirates</option>
                <option value="GB|+44">🇬🇧 +44 United Kingdom</option>
                <option value="US|+1">🇺🇸 +1 United States</option>
                <option value="UY|+598">🇺🇾 +598 Uruguay</option>
                <option value="UZ|+998">🇺🇿 +998 Uzbekistan</option>
                <option value="VE|+58">🇻🇪 +58 Venezuela</option>
                <option value="VN|+84">🇻🇳 +84 Vietnam</option>
                <option value="YE|+967">🇾🇪 +967 Yemen</option>
                <option value="ZM|+260">🇿🇲 +260 Zambia</option>
                <option value="ZW|+263">🇿🇼 +263 Zimbabwe</option>
              </select>

              <input
                type="tel"
                placeholder="8023424567"
                value={localNumber}
                onChange={(e) => {
                  const digits = e.target.value.replace(/\D/g, "");
                  setLocalNumber(digits);
                  setReceiverPhone(countryCode + digits);
                }}
                maxLength={13}
                required
                style={{
                  flex: 1,
                  height: "45px",
                  padding: "0 12px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div>
              <p
                style={{ fontSize: "10px", marginTop: "-10px", color: "green" }}
              >
                {" "}
                {receiverPhone}
              </p>
            </div>
          </div>
          <div>
            <label>Recipient Address</label>
            <input
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              placeholder="Recipient Address"
              required
            />
          </div>

          <div>
            <label>Purpose of Transfer</label>
            <input
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="Purpose of Transfer"
            />
          </div>

          <div>
            <label>Amount</label>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              required
            />
          </div>

          <div className="btn">
            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : "Transfer"}
            </button>
            {error && <div className="error-popup">{error}</div>}
          </div>
        </form>

        {/* styling this one */}
        {showCodeModal && (
          <div className="otp-modal">
            {messages && (
              <p className="messageshow">
                Transfer successful! Please note that the funds will be
                processed and should reflect in your account within 3 to 7
                working days
              </p>
            )}
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
            </div>
          </div>
        )}
      </div>
    </WiretransferWrapper>
  );
};

export default Wiretransfer;
