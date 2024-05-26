import { Link } from "react-router-dom";
import './style/login.css'


function Login(){
    return(
        <div className="login-container">
            <form>
            <h2>Username</h2>
            <input placeholder="Username" type="Text"/>
            <h2>Password</h2>
            <input placeholder="Password" type="Password"/>

            <div>
                <Link to= '/'>
                    <button>Login</button>
                </Link>
            </div>
            
            </form>

             <div>
                <h3>Don't have an account ?</h3>
                <Link to='/std_reg'>
                    <button>User Signup</button>                
                </Link>
                <Link to='/drv_reg'>
                    <button>Driver signup</button>
                </Link>
             </div>
        </div>
    );
}

export default Login;