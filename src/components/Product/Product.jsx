import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import P1 from '../../assets/p1.jpg'
import P2 from '../../assets/p2.jpg'
import P3 from '../../assets/p3.jpg'
import P4 from '../../assets/p4.jpg'
import P5 from '../../assets/p5.jpg'
import P6 from '../../assets/p6.jpg'
import P7 from '../../assets/p7.jpg'
import P8 from '../../assets/p8.jpg'
import P9 from '../../assets/p9.jpg'
import P10 from '../../assets/p10.jpg'
import P11 from '../../assets/p11.jpg'
import P12 from '../../assets/p12.jpg'
import './product.css'

const Product = () => {

  function handelClick(){
    alert("Your Order is placed")
  }

  return (
    <>
    <Navbar/>
    <div className='sale_container'>

  
    <div className='sale_card'>

      <div className='img_container'>

      <img className='sale_img' src={P1} alt="sale1 pic" />

      </div>

      <div className='sale_content'>

      <h3>Women Tree Runner</h3>
      <p>30$</p>
      <Link className='prod_btn' onClick={handelClick} >Buy Now</Link>      

        </div>
      </div>


      <div className='sale_card'>

      <div className='img_container'>

      <img className='sale_img' src={P2} alt="sale1 pic" />

      </div>

      <div className='sale_content'>

      <h3>Women Tree Runner</h3>
      <p>30$</p>
      <Link className='prod_btn' onClick={handelClick} >Buy Now</Link> 

        </div>
      </div>


      <div className='sale_card'>

      <div className='img_container'>

      <img className='sale_img' src={P3} alt="sale1 pic" />

      </div>

      <div className='sale_content'>

      <h3>Women Tree Runner</h3>
      <p>30$</p>
      <Link className='prod_btn' onClick={handelClick} >Buy Now</Link> 

        </div>
      </div>


      <div className='sale_card'>

      <div className='img_container'>

      <img className='sale_img' src={P4} alt="sale1 pic" />

      </div>

      <div className='sale_content'>

      <h3>Women Tree Runner</h3>
      <p>30$</p>
      <Link className='prod_btn' onClick={handelClick} >Buy Now</Link> 

        </div>
      </div>



      <div className='sale_card'>

      <div className='img_container'>

      <img className='sale_img' src={P5} alt="sale1 pic" />

      </div>

      <div className='sale_content'>

      <h3>Women Tree Runner</h3>
      <p>30$</p>
      <Link className='prod_btn' onClick={handelClick} >Buy Now</Link> 

        </div>
      </div>



      <div className='sale_card'>

      <div className='img_container'>

      <img className='sale_img' src={P6} alt="sale1 pic" />

      </div>

      <div className='sale_content'>

      <h3>Women Tree Runner</h3>
      <p>30$</p>
      <Link className='prod_btn' onClick={handelClick} >Buy Now</Link> 

        </div>
      </div>



      <div className='sale_card'>

      <div className='img_container'>

      <img className='sale_img' src={P7} alt="sale1 pic" />

      </div>

      <div className='sale_content'>

      <h3>Women Tree Runner</h3>
      <p>30$</p>
      <Link className='prod_btn' onClick={handelClick} >Buy Now</Link> 

        </div>
      </div>


      <div className='sale_card'>

      <div className='img_container'>

      <img className='sale_img' src={P8} alt="sale1 pic" />

      </div>

      <div className='sale_content'>

      <h3>Women Tree Runner</h3>
      <p>30$</p>
      <Link className='prod_btn' onClick={handelClick} >Buy Now</Link> 

        </div>
      </div>


      <div className='sale_card'>

      <div className='img_container'>

      <img className='sale_img' src={P9} alt="sale1 pic" />

      </div>

      <div className='sale_content'>

      <h3>Women Tree Runner</h3>
      <p>30$</p>
      <Link className='prod_btn' onClick={handelClick} >Buy Now</Link> 

        </div>
      </div>

      <div className='sale_card'>

      <div className='img_container'>

      <img className='sale_img' src={P10} alt="sale1 pic" />

      </div>

      <div className='sale_content'>

      <h3>Women Tree Runner</h3>
      <p>30$</p>
      <Link className='prod_btn' onClick={handelClick} >Buy Now</Link> 

        </div>
      </div>


      <div className='sale_card'>

        <div className='img_container'>

        <img className='sale_img' src={P11} alt="sale1 pic" />

        </div>

        <div className='sale_content'>

        <h3>Women Tree Runner</h3>
        <p>30$</p>
        <Link className='prod_btn' onClick={handelClick} >Buy Now</Link> 

          </div>
        </div>


      <div className='sale_card'>

            <div className='img_container'>

            <img className='sale_img' src={P12} alt="sale1 pic" />

            </div>

            <div className='sale_content'>

            <h3>Women Tree Runner</h3>
            <p>30$</p>
            <Link className='prod_btn' onClick={handelClick} >Buy Now</Link> 

              </div>
            </div>

    </div>
    <Footer/>
    </>
  )
}

export default Product