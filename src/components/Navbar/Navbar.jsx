import {React, useContext }from 'react'
import {Link } from 'react-router-dom'
import './navbar.css'
import { LoginContext } from '../../components/Context/Context';


const Navbar = () => {
  const {username} = useContext(LoginContext)
  return (
    <div className='nav_bar'>

        <div>

            
        <Link to='/' className='nav_menu'>Home</Link>
        <Link to='/about' className='nav_menu'>About</Link>
        <Link to='/product' className='nav_menu'>Products</Link>
        <Link to='/signup' className='nav_menu'>SignUp</Link>
        <Link to='/login' className='nav_menu'>Login</Link>


        </div>


        

        

    </div>
  )
}

export default Navbar