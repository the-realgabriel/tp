import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const {fundID} = useParams();
  const [fund, Storefund] = useState({});

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));

    fetch(`/api/wallet/${fundID}`)
      .then(response => response.json())
      .then (data => Storefund(data))
      .catch(error => console.error('error getting funds', error));
  }, [userId, fundID]);

  return (
    <div>
      <div>
      <img>{user.img}</img>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
      
      {/* Add more profile details as needed */}
      </div>

      <div className='wallet'>
      <p>Balance: {fund.bal}</p>
      <p>Spent: {fund.used}</p>
      </div>
    </div>
  );
}

export default Profile;