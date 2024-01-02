import React from "react";

const EmployeeForm = () => {

    return (
        <div>
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
                    <span><input type="radio" name="gender" value="m"/><small>Male </small></span>
                    <span><input type="radio" name="gender" value="f" className="other"/><small>Female </small></span>
                    <span><input type="radio" name="gender" value="o" className="other"/><small>Other </small></span>
                </div>
                <div className="form-input-div">
                    <label>Date of Birth</label>
                    <input type="date" name="dob" />
                </div>
                <div className="form-submit-div">
                    <input type="submit" value="Register"/>
                </div>
        </div>
    )
}

export default EmployeeForm;