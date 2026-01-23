import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Transactions } from "./Transaction";

const Transaction = () => {
  const [loading, setLoading] = useState(true);
  const [trasactions, setTrasactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) throw new Error("No auth token found");

        const res = await fetch(
          "https://geochain.app/api/api/transactions/history/",
          {
            headers: {
              Authorization: `Token ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        if (!res.ok) throw new Error("Please check your internet server");

        const data = await res.json();
        console.log("Transaction data:", data);
        // setTrasactions(Array.isArray(data) ? data : []);
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
          <FaArrowLeft />
          <p>Transactions</p>
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


                      <span>{tr.purpose}</span>
                      <div>
                        <span>reference {tr.reference}</span>
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
