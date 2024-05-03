import React, { useState, useEffect } from 'react';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('/api/users/123')
     .then(response => response.json())
     .then(data => setUser(data));
  }, []);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default Profile;