import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    
    try {
      const response = await axios.post('http://127.0.0.1:8090/api/collections/student/auth-with-password', {
        identity: username,
        password: password,
      });

      if (response.data) {


        alert('Login successful!');
        
        navigate('/dash');
      }
    } catch (err) {
      setError('Invalid username or password');
    }
  };
    return(
        <div className="login-container">
            <form onSubmit={handleLogin}>
            <label>
          <p>Username</p>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </label>
            <div className='p-10'>
                
                    <button type="submit">submit</button>
                
            </div>
            
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
             <div>
                <h3>Don't have an account ?</h3>
                <Link to='/std_reg'>
                    <button>User Signup</button>                
                </Link>

                <h3>Login as driver</h3>
                <Link to= '/drv_login'>
                  <button>Driver Login</button>
                </Link>
             </div>
        </div>
    );


}

export default Login;


