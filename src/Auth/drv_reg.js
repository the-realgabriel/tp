
import { Link } from "react-router-dom";


function Driver(){
    return(
    <div className="login-container">
            <h1>Driver Registration</h1>
        <form action='post' method="">
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
                    <Link to='/dash'>
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