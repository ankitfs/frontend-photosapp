import React from "react";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";
import '../css/Register.css';

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
            <h2 className="register-employee-heading">Register Employee</h2>
            <form onSubmit={registerFormHandler}>
                <EmployeeForm/>
            </form>
        </div>
    )   
}

export default Register;