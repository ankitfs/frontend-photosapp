import React from "react";

function Login () {

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log('Handling the Login Submit');
    }   

    return (
        <div className="login-screen">
            <form id="login-form" onSubmit={handleLoginSubmit}>
                <div className="login-heading">Enter Your Login Details</div>
                <div className="login-input">
                    <label>Email:</label>
                    <input type="text" name="email" placeholder="Enter your email"/>
                </div>
                <div className="login-input">
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Enter your password"/>
                </div>
                <div className="login-input">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default Login;