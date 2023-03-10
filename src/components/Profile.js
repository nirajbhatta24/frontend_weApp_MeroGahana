import React, { useState } from 'react';
import './Profile.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';

const Profile = () => {
  const Navigate = useNavigate();
  const [firstName, setFirstName] = useState('Manish');
  const [lastName, setLastName] = useState('Malla');
  const [username, setUsername] = useState('Manish');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('id');
    Navigate('/login');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && username) {
      // save the data to the backend
      setSuccessMessage('Profile saved successfully!');
    } else {
      setSuccessMessage('');
      alert('Please fill in all the fields');
    }
  };
  return (
    <div>
  <form onSubmit={handleSubmit}>
    <label>
      First Name:
      <input
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
    </label>
    <br />
    <label>
      Last Name:
      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
    </label>
    <br />
    <label>
      Username:
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
    </label>
    <br />
    <button type="submit">Save</button>
    
  </form>
  <div className="button-container">
  <button
    type="button"
    className="logout-button"
    onClick={handleLogout}
  >
    Logout
  </button>
</div>

  {successMessage && <p>{successMessage}</p>}
</div>

  );
};

export default Profile;
