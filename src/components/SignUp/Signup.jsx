import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './signup.css';
import Signup1 from '../../assets/signup.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';




const Signup = () => {
  return (
    <>
      <Navbar />

      <div className='main_signup'>

        <div className='img_background'>
          <img src={Signup1} alt='' />
        </div>

        <div className='signup_content'>
          <h2 className='heading_signup'>SignUp</h2>
          <br />
          <label htmlFor=''>Full Name</label>
          <br />
          <input type='text' />
          <br />
          <label htmlFor=''>Email</label>
          <br />
          <input type='email' />
          <br />
          <label htmlFor=''>Password</label>
          <br />
          <input type='password' />
          <br />
          <button>Signup</button>
          <br />
          <Link >Already a User</Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
