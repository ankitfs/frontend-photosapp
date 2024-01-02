import React from "react";
import '../css/LoginPage.css'

function Login () {

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log('Handling the Login Submit');
    }   

    return (
        <div className="login-screen">
            <form id="login-form" onSubmit={handleLoginSubmit}>
                <div className="login-heading">Enter Login Details</div>
                <div className="login-input">
                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Enter your email"/>
                </div>
                <div className="login-input">
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Enter your password"/>
                </div>
                <div className="login-submit">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default Login;