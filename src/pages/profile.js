import React, { useState, useEffect } from 'react';

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));
  }, [userId]);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
      {/* Add more profile details as needed */}
    </div>
  );
}

export default Profile;