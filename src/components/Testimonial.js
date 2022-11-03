import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
import Slider from 'react-slick';

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='testimonial py-3 '>
      <div className='container'>
        <div className='row'>
          <div className='topic'>
            <h3>What Our Client's Says</h3>
            <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          </div>
      </div>
        <div className='row mt-5'>
          <Slider {...settings}>
              <div className=' col'>
              <div className="testimonial-box"> 
                  <div className='row top'>
                    <div className='col-6'>
                      <div className='user-image'>
                          <img src='images/employee1.jpg' className='user-photo'alt='userimage'/>
                      </div>
                      </div>
                      <div className='col-6'>
                      <div className='user-rating justify-content-end'>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                      </div>
                      </div>
                  </div>
                  <div className='bottom'>
                      <p className='user-testimonial'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <h3 className='user-name'>Radhika Rai<br/>
                      <span>Accountant</span></h3>
                  </div>
                  </div>
              </div>
              <div className=' col'>
              <div className="testimonial-box"> 
                  <div className='row top'>
                    <div className='col-6'>
                      <div className='user-image'>
                          <img src='images/employee2.jpg' className='user-photo'alt='userimage'/>
                      </div>
                      </div>
                      <div className='col-6'>
                      <div className='user-rating justify-content-end'>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                      </div>
                      </div>
                  </div>
                  <div className='bottom'>
                      <p className='user-testimonial'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <h3 className='user-name'>Radhika Rai<br/>
                      <span>Accountant</span></h3>
                  </div>
                  </div>
              </div>
              <div className=' col'>
              <div className="testimonial-box"> 
                  <div className='row top'>
                    <div className='col-6'>
                      <div className='user-image'>
                          <img src='images/employee3.jpg' className='user-photo'alt='userimage'/>
                      </div>
                      </div>
                      <div className='col-6'>
                      <div className='user-rating justify-content-end'>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                      </div>
                      </div>
                  </div>
                  <div className='bottom'>
                      <p className='user-testimonial'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <h3 className='user-name'>Radhika Rai<br/>
                      <span>Accountant</span></h3>
                  </div>
                  </div>
              </div>
              <div className=' col'>
              <div className="testimonial-box"> 
                  <div className='row top'>
                    <div className='col-6'>
                      <div className='user-image'>
                          <img src='images/employee4.jpg' className='user-photo'alt='userimage'/>
                      </div>
                      </div>
                      <div className='col-6'>
                      <div className='user-rating justify-content-end'>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                      </div>
                      </div>
                  </div>
                  <div className='bottom'>
                      <p className='user-testimonial'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <h3 className='user-name'>Radhika Rai<br/>
                      <span>Accountant</span></h3>
                  </div>
                  </div>
              </div>
              <div className=' col'>
              <div className="testimonial-box"> 
                  <div className='row top'>
                    <div className='col-6'>
                      <div className='user-image'>
                          <img src='images/employee1.jpg' className='user-photo'alt='userimage'/>
                      </div>
                      </div>
                      <div className='col-6'>
                      <div className='user-rating justify-content-end'>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                      </div>
                      </div>
                  </div>
                  <div className='bottom'>
                      <p className='user-testimonial'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <h3 className='user-name'>Radhika Rai<br/>
                      <span>Accountant</span></h3>
                  </div>
                  </div>
              </div>
              <div className=' col'>
              <div className="testimonial-box"> 
                  <div className='row top'>
                    <div className='col-6'>
                      <div className='user-image'>
                          <img src='images/employee2.jpg' className='user-photo'alt='userimage'/>
                      </div>
                      </div>
                      <div className='col-6'>
                      <div className='user-rating justify-content-end'>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                        <p>⭐</p>
                      </div>
                      </div>
                  </div>
                  <div className='bottom'>
                      <p className='user-testimonial'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                      <h3 className='user-name'>Radhika Rai<br/>
                      <span>Accountant</span></h3>
                  </div>
                  </div>
              </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
