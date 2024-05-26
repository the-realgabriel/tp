
import { Link } from "react-router-dom";


function Driver(){
    return(
    <div className="login-container">
            <h1>Driver Registration</h1>
        <form method="post">
                <label>First Name</label>
                <input placeholder="First Name" type="text"/>
                <label>Last Name</label>
                <input placeholder="Last Name" type="text"/>
                <label>Email</label>
                <input placeholder="Email" type="text"/>
                <label>Password</label>
                <input placeholder="Password" type="password"/>
                <label>Confirm Password</label>
                <input placeholder="Confirm Password" type="password"/>
                    <Link to='/home'>
                    <button>Register</button>
                    </Link>   
                    <Link to='/'>
                    <button>Login</button>
                    </Link>  
        </form>
    </div>
    );
}

export default Driver;