import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        const user = {
          name: response.data.name,
          walletBalance: 1234.56,
          transactions: []
        };
        setUserData(user);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the user data!', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const spendingData = {
    labels: userData.transactions.map(tx => tx.date),
    datasets: [
      {
        label: 'Spending History',
        data: userData.transactions.map(tx => tx.amount),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="user-info">
        <h2>{userData.name}</h2>
        <p>Wallet Balance: ${userData.walletBalance.toFixed(2)}</p>
      </div>
      <div className="chart">
        <h2>Spending History</h2>
        <Line data={spendingData} />
      </div>
      <div className="transactions">
        <h2>Recent Transactions</h2>
        <ul>
          {userData.transactions.map(tx => (
            <li key={tx.id}>
              <span>{tx.date}</span>
              <span>${tx.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
