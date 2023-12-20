import React from "react";
import axios from "axios";

//Component handing the User Registration
function Register() {

    const registerFormHandler = (event) => {
        event.preventDefault();
        console.log('register form handler function');
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.firstPassword.value;
        const confirmPassword = event.target.confirmPassword.value;
        const gender = event.target.gender.value;
        const dob = event.target.dob.value;
        console.log(firstName, lastName, email, password, confirmPassword, gender, dob);

        const registerFormData = {
            firstName : firstName, lastName : lastName, email : email, password : password, confirmPassword : confirmPassword,
            gender: gender, dob : dob
        }

        console.log(registerFormData);

        const registerApiResponse = addUserAPI(registerFormData);

        console.log(registerApiResponse);
        event.target.reset();
    }

    async function addUserAPI(userData) {
        let data = null;
        try {
            const response = await axios.post('http://localhost:8080/api/register', userData);
            console.log(response.data);
            data = await response.data;
            console.log(data.statusCode, data.message);
            alert(data.message);
        }
        catch (error) {
            console.log(error);
        }
        return data;
    }

    return (
        <div className="register-employee">
            <h2>Register Employee</h2>
            <form onSubmit={registerFormHandler}>
                <div className="form-input-div">
                    <label>First Name</label>
                    <input type="text" name="firstName"/>
                </div>
                <div className="form-input-div">
                    <label>Last Name</label>
                    <input type="text" name="lastName"/>
                </div>
                <div className="form-input-div">
                    <label>Email</label>
                    <input type="email" name="email"/>
                </div>
                <div className="form-input-div">
                    <label>Password</label>
                    <input type="password" name="firstPassword"/>
                </div>
                <div className="form-input-div">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword"/>
                </div>
                <div className="form-input-div">
                    <label>Gender</label>
                    <span><input type="radio" name="gender" value="m"/><label>Male </label></span>
                    <span><input type="radio" name="gender" value="f"/><label>Female </label></span>
                    <span><input type="radio" name="gender" value="o"/><label>Other </label></span>
                </div>
                <div className="form-input-div">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" />
                </div>
                <div className="form-submit-div">
                    <input type="submit" value="Register"/>
                </div>
            </form>
        </div>
    )   
}

export default Register;