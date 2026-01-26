import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Transactions } from "./Transaction";

const Transaction = () => {
  const [loading, setLoading] = useState(true);
  const [trasactions, setTrasactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          localStorage.clear(); // clear expired or missing token
          window.location.href = "/login"; // redirect immediately
          return;
        }

        const res = await fetch(
          "https://geochain.app/apps/api/transactions/history/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (res.status === 401) {
          // token expired or invalid
          localStorage.clear();
          window.location.href = "/login";
          return;
        }

        if (!res.ok) throw new Error("Please check your internet server");

        const data = await res.json();
        setTrasactions(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);
  return (
    <Transactions>
      <div className="transactiosn">
        <div className="topstranc">
          <FaArrowLeft onClick={() => window.location.href = '/profile'} />
          <p onClick={() => window.location.href = '/profile'}>Transactions</p>
        </div>

        <div className="transationhistory">
          {loading ? (
            <p>Loading transactions...</p>
          ) : trasactions.length === 0 ? (
            <p>No transactions found.</p>
          ) : (
            <div className="div">
              {trasactions.map((tr, index) => (
                <div key={index} className="transaction-item">
                  <span>{new Date(tr.timestamp).toLocaleString()}</span>
                  <div className="historyess">
   
                    <div>
                   <div className="mysys">
                    
                    
                     <span
  style={{
    color:
      tr.transaction_type === "credit"
        ? "green"
        : tr.transaction_type === "debit"
        ? "red"
        : "black", // pending or anything else
    fontWeight: "bold",
  }}
>
  {tr.transaction_type.toUpperCase()}
</span>
{tr.transaction_type === "credit" && <p>From: {tr.receiver_bank || "External Bank"}</p>}
{tr.transaction_type === "debit" && <p>To: {tr.receiver_bank  || "External Bank"}</p>}



                      <span>Desc: {tr.purpose}</span>
                   </div>
                      
                      <div>
                        
                       <span>Name: {tr.receiver_name}</span>  <span>Ref: {tr.reference}</span> 
                        
                      </div>
                    </div>

                    <div>

                      <span
                        style={{
                             color:
      tr.transaction_type === "credit"
        ? "green"
        : tr.transaction_type === "debit"
        ? "red"
        : "black", // pending or anything else
    fontWeight: "bold",
                        }}
                      >
                        {tr.transaction_type === "credit" ? "+" : "-"}$
                        {Number(tr.amount).toLocaleString()}
                      </span>

                    </div>

                  </div>

                </div>

              ))}
            </div>
          )}
        </div>
      </div>
    </Transactions>
  );
};

export default Transaction;
