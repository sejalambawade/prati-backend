import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/logForm.css"


const LoginForm = () => {
  const [collegeName, setCollegeName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);


  const handleCollegeNameChange = (e) => {
    setCollegeName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
   
};

  return (
    <div>
     

      <div style={{ background: "black" }}>
        <div className="illuminati-theme">
          <h2 data-aos="fade-up">PERFORMING ARTS</h2>
          <br />
          <p data-aos="fade-up">
            The goal of art is Expression. It is the journey of the free soul.
            It is the escapist fantasy to live as well as the grim reality to be
            felt. For every talented bone and every whisper of creativity,
            PratibimbVJTI is a cocooning hub and the best platform to showcase
            your zing and panache.
          </p>
          <p data-aos="fade-up">
            The Performance Arts Sector include all the events ranging from
            Drama, Dance, Vocals, Poetry to Instrumentals, Raps and Beatboxing,
            Artwork and Social-work. These events not only add fun to your life
            but also help build your personality as a whole.
          </p>
          <p data-aos="fade-up">
            Pratibimb also brings you the opportunity to interact with immensely
            talented peers from other colleges too, which in itself would be a
            great experience! When so many passionate and fierce people get
            together, it really is a sight to behold. So join us on this
            beautiful and enthralling ride full of fun and captivating
            experiences.
          </p>
          <br />
          <br />
        </div>
      </div>

      <div style={{ background: "black" }}>
      <h2 data-aos="fade-up" style={{ textAlign: "center"}}>Please Login to Register for Events!</h2>
      <br />
        <div className="box">
        <h2>Login</h2>      
          <form onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                name="college_name"
                required
                value={collegeName}
                onChange={handleCollegeNameChange}
              />
              <label>College Name</label>
            </div>
            <div className="inputBox">
              <input
                type="text"
                name="username"
                required
                value={username}
                onChange={handleUsernameChange}
              />
              <label>CC Code</label>
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <label>Password</label>
            </div>
            {/* {loginStatus && (<button>Check if authenticated</button>)} */}
            {error && <b><p style={{ color: 'red' }} className="error-message">{error}</p></b>}
            <div className="center-btn">
              <input
                type="submit"
                name="sign-in"
                value="Login"
                className="custom-btn btn-15"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;