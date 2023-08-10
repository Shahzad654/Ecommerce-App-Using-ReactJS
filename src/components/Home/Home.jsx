import React from 'react'
import './home.css'
import {Link, Routes, Route} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Hero from '../../assets/hero1.jpg'
import Sale1 from '../../assets/sale1.webp'
import Sale2 from '../../assets/sale2.jpg'
import Sale3 from '../../assets/sale3.jpg'
import Sale4 from '../../assets/sale4.jpg'
import Sale5 from '../../assets/sale5.jpg'
import Sale6 from '../../assets/sale6.jpg'
import Footer from '../Footer/Footer'



const Home = () => {
  return (
    <>
    
    <Navbar/>
    

    <div className="hero_container">
        <img className="hero_image" src={Hero} alt="Hero Section Image" />

        <div className="hero_content">
          <p className="hero_paragraph">
            Meet the perfect travel shoes
          </p>
          <Link to='/product' className="hero_button">Shop Now</Link>
          
        </div>
      </div>

      <h3 className='sale_heading'>Now on Sale</h3>


      <div className='sale_container'>

        <div className='sale_card'>

            <div className='img_container'>

            <img className='sale_img' src={Sale1} alt="sale1 pic" />

            </div>
            
           <div className='sale_content'>

            <h3>Women Tree Runner</h3>
            <p>30$</p>

           </div>
        </div>


        <div className='sale_card'>

            <div className='img_container'>

            <img className='sale_img' src={Sale2} alt="sale1 pic" />

            </div>
            
           <div className='sale_content'>

            <h3>Men Tree Runner</h3>
            <p>20$</p>

           </div>
        </div>



        <div className='sale_card'>

            <div className='img_container'>

            <img className='sale_img' src={Sale3} alt="sale1 pic" />

            </div>
            
           <div className='sale_content'>

            <h3>Men Tree Dasher</h3>
            <p>50$</p>

           </div>
        </div>

        <div className='sale_card'>

            <div className='img_container'>

            <img className='sale_img' src={Sale4} alt="sale1 pic" />

            </div>
            
           <div className='sale_content'>

            <h3>Men Tree Dasher2</h3>
            <p>60$</p>

           </div>
        </div>


        <div className='sale_card'>

            <div className='img_container'>

            <img className='sale_img' src={Sale5} alt="sale1 pic" />

            </div>
            
           <div className='sale_content'>

            <h3>Men Trail SWT</h3>
            <p>100$</p>

           </div>
        </div>


        <div className='sale_card'>

            <div className='img_container'>

            <img className='sale_img' src={Sale6} alt="sale1 pic" />

            </div>
            
           <div className='sale_content'>

            <h3>Women Tree Breezer</h3>
            <p>90$</p>

           </div>
        </div>

      </div>

      <div>
        <Footer/>
      </div>

    </>
  )
}

export default Home