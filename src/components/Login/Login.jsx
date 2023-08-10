import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import Signup1 from '../../assets/signup.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { LoginContext } from '../../components/Context/Context';

const Login = () => {
  const { setUsername, setProfile } = useContext(LoginContext);
  const navigate = useNavigate();

  function handleClickUser() {
    setUsername(); 
    setProfile(true);
    navigate('/'); 
  }

  return (
    <>
      <Navbar />

      <div className='main_signup'>
        <div className='img_background'>
          <img src={Signup1} alt='' />
        </div>

        <div className='signup_content'>
          <h2 className='heading_signup'>Login</h2>
          <br />
          <label htmlFor=''>User Name</label>
          <br />
          <input
            type='text'
            onChange={(e) => {
              setUsername(e.target.value);
              e.preventDefault();
              
            }}
          />
          <br />
          <label htmlFor=''>Password</label>
          <br />
          <input type='password' onChange={(e)=>{
            e.preventDefault();
          }}/>
          <br />
          <button onClick={handleClickUser}>Login</button>
          <br />
          <Link to='/signup'>Create a new account</Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
