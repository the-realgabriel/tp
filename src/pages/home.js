import React, { useState, useEffect } from 'react';

import '../App.css';
import { useParams } from 'react-router-dom';

import { Link } from "react-router-dom";
import MapView from './map';

const MyContent = () => {
  // ... your navigation content here
  return (
    <ul>

    </ul>
  );
};

function Home() {

  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user:', error));
  }, [userId]);

  return (
   
    <div className='Tp'>

             <div className='buttombar'>
       <input placeholder='From where?'className='from'></input>
       <input placeholder='To where?'className='to'></input>
       <a href='/'><button onClick={console.log(('HEllo world'))}>Search</button></a>
   </div>
    <div className="mid" >
       <input placeholder='search'className='sch'></input>
       <button>FIlter</button>
       <div className='driver'>
        <script src=''>
        </script>
        </div>
      
   
    </div>
    <div className='trip'>
    <p>OrderID: </p>
    <p>Currnt location: </p>
    <p>Destination: </p> 
    <div>Status</div>
     </div>

     <div className='trip1'>
    
    <p>OrderID: </p>
    <p>Currnt location: </p>
    <p>Destination: </p> 
    <div>Status</div>
     </div>
     <div className='trip2'>
    
    <p>OrderID: </p>
    <p>Currnt location: </p>
    <p>Destination: </p> 
    <div>Status</div>
     </div>
    
<div className='Map'>
  <MapView/>
</div>
    <div className='info'>
        <div className='driver_data'>
        <h1>{user.name}</h1>
      <p>Driver Name: {user.name}</p>
      <p>Phone Number: {user.phone}</p>
      <p>Car ID: {user.car}</p>
        </div>
     </div>
     <div className='profile'>
      <Link to= '/profile'>
      
      <button onClick={console.log(('HEllo world'))} className='profile'>Profile</button>      </Link>
     
     </div>
    </div>
  );
}

export default  Home;