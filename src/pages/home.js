import React from 'react';

import '../App.css';

function Home() {
  return (
    <div className='Tp'>
    <div className='at-left'>
      <ul><li>Rides</li></ul>
      <ul><li>Food</li></ul>
      <h4>Hello Itadori</h4>
    </div>
   
     <div className='buttombar div-at-bottom'>
       <input placeholder='From where?'></input>
       <input placeholder='To where?'></input>
       <a href='./profile'><button onClick={console.log(('HEllo world'))}>Search</button></a>
   </div>
    <div className="mid" >
      <h1>Drivers Online</h1>
       <input placeholder='Recent'></input>
       <button>FIlter</button>
       <div className='driver'>
        <script src=''>
        </script>
       </div>
       <div className='Login'>
       
       </div>
   </div>


</div>
  );
}

export default  Home;