import { Link } from "react-router-dom";

function Student(){
return(
    <div className="login-container">
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
                    <Link to='/'>
                    <button>Register</button>
                    </Link>
            

        </form>
    </div>
);
}

export default Student;