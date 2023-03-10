import React, { useState } from 'react';
import userService from '../services/userService';
import "./Register.css";


function RegisterForm() {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check that all fields are filled
    if (fname.trim() === '' || lname.trim() === '' || username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Check that password and confirm password match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Call the registration service
    userService.Register({ fname, lname, username, password}).then((res) => {
      console.log(res);
      alert("User Registered Successfully")
    }); 
  }
  

  return (
    <div className="background">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" value={fname} onChange={(e) => setFirstName(e.target.value)} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" value={lname} onChange={(e) => setLastName(e.target.value)} />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
