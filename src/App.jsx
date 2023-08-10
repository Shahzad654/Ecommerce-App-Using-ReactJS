import { React, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Product/Product';
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
import { LoginContext } from './components/Context/Context';

function App() {
  const [profile, setProfile] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <>
      <LoginContext.Provider value={{ profile, setProfile, username, setUsername }}>
        
          <Routes>
            <Route path='/' element={profile ? <Home /> : <Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
       
      </LoginContext.Provider>
    </>
  );
}

export default App;
