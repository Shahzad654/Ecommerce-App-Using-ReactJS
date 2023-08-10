import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Video from '../../assets/video2.mp4';
import AboutImg from '../../assets/about2.gif';
import './about.css';

const About = () => {
  return (
    <>
      <Navbar />

      <div className='main_about'>
        <div className='video_background'>
          <video autoPlay muted loop>
            <source src={Video} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='video_paragraph_wrapper'>
          <p className='video_paragraph'>Life is short. Buy the shoes</p>
        </div>
      </div>

      <div className='about_making'>
        <div className='about_img'>
          <img src={AboutImg} alt='' />
        </div>

        <div className='about_making_row'>
          <div className='about_item'>
            <h2>SIMPLICITY IN DESIGN</h2>
            <p className='about_para'>No flashy logos. No senseless details. Just the world’s most comfortable shoes, made naturally and designed practically. It’s that simple.</p>
          </div>

          <div className='about_item'>
            <h2>CONFIDENCE IN COMFORT</h2>
            <p className='about_para'>Trying is believing. Give our shoes a shot for 30 days, and if you’re not walking on cloud nine, we’ll take them back—no questions asked.</p>
          </div>

          <div className='about_item'>
            <h2>MADE FROM NATURE</h2>
            <p className='about_para'>The footwear industry often overlooks Mother Nature’s materials in favor of cheaper, synthetic alternatives. We think it’s time to change that.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
