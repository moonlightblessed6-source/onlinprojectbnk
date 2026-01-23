            useEffect(() => {
              const fetchTransactions = async () => {
                try {
                  const token = localStorage.getItem('authToken');
                  if (!token) throw new Error('No auth token found');
          
                  const res = await fetch('https://geochain.app/api/api/transactions/history/', {
                    headers: {
                      Authorization: `Token ${token}`,
                      'Content-Type': 'application/json',
                    },
                  });
          
                  if (!res.ok) throw new Error('Please check your internet server');
          
                  const data = await res.json();
                  setTransactions(data);
                } catch (err) {
                  console.error(err);
                } finally {
                  setLoading(false);
                }
              };
          
              fetchTransactions();
            }, []);


<div className="tractionhistoty">
          <h2>Transaction History</h2>
          {loading ? (
            <p>Loading transactions...</p>
          ) : transactions.length === 0 ? (
            <p>No transactions found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Reference</th>
                  <th>Purpose</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map(tx => (
                  <tr key={`${tx.transaction_type}-${tx.timestamp}`}>
                    <td style={{color: tx.transaction_type === 'credit' ? 'green' : 'red'}}>
                      {tx.transaction_type.toUpperCase()}
                    </td>
                    <td>{tx.description}</td>
                    <td>{tx.amount}</td>
                    <td>{tx.reference || '-'}</td>
                    <td>{tx.purpose || '-'}</td>
                    <td>{new Date(tx.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>