import React, { useState } from 'react'
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsCheckCircle, BsPeople } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaPrayingHands, FaTwitter } from 'react-icons/fa';
import { FiHeart, FiPlus } from 'react-icons/fi';
import { GrGroup } from 'react-icons/gr';
import CountUp from 'react-countup';

function About() {

  let iconStyles = { color: "#4e97fd", fontWeight: "bold", fontSize: "20" };

  let iconStyle = { color: "#a9a9a9", backgroundColor: "#f3f8ff", borderRadius:"50%", padding:"10px", width:"40px", height:"40px", margin:"10px"};


  const [counter, setCounter] = useState(false);

  return (
    <div className='about'>
       <div class="banner">
        <img src="images/bg.jpg" alt=""/>
        <div class="bg-image">
          <div class="container">
            <div className='contact-topic'>
              <h2>About</h2>
            </div>
            <div class="breadcrumb-menu">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active"><a href='#'>About</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className='about-main container-md mt-5'>
        <div className='row'>
          <div className='col-sm-6 about-image'>
            <img src='images/about.jpg'></img>
          </div>
          <div className='col-sm-6 about-para'>
            <div className="about-title mb-5">
              <h2>What Our Client's Say</h2>
              <span>Sed ut perspiciatis unde omnis iste natus error</span>
            </div>
            <div className='about-text'>
              <h4 className='mb-3'><BsCheckCircle style={iconStyles}/>  Our Mission & Vision</h4>
              <p>Quis autem vel eum iure reprehenderit quin voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum</p>
              <h4 className='mb-3'><BsCheckCircle style={iconStyles}/> Treatment for Covid - 19</h4>
              <p>But I must explain to you how all this mistaken idea denouncing pleasure and praising pain was born and complete account</p> 
            </div>
            <div className='about-btn mt-5'>
              <a>Meet with doctors <FiPlus/></a>
            </div>
          </div>
        </div>
      </div>

      <div className='counter mt-5'>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-xs-12'>
                <div className='counter-icon'>
                  <FiHeart/>
                </div>
                <div className='counter-number mt-3'>
                  <h2>{<CountUp start={1000} end={2560} duration={2} delay={0} />}</h2>
                </div>
                <hr></hr>
                <div className='counter-text'>
                  <span>satisfied clients</span>
                </div>
              </div>
              <div className='col-lg-3 col-xs-12'>
                <div className='counter-icon'>
                  <FaPrayingHands/>
                </div>
                <div className='counter-number mt-3'>
                  <h2>{<CountUp start={1000} end={9862} duration={2} delay={0} />}</h2>
                </div>
                <hr></hr>
                <div className='counter-text'>
                  <span>finished workd</span>
                </div>
              </div>
              <div className='col-lg-3 col-xs-12'>
                <div className='counter-icon'>
                  <BsPeople/>
                </div>
                <div className='counter-number mt-3'>
                  <h2>{<CountUp start={1000} end={7563} duration={2} delay={0} />}</h2>
                </div>
                <hr></hr>
                <div className='counter-text'>
                  <span>covid - 19 specialist</span>
                </div>
              </div>
              <div className='col-lg-3 col-xs-12'>
                <div className='counter-icon'>
                  <AiOutlineGlobal/>
                </div>
                <div className='counter-number mt-3'>
                  <h2>{<CountUp start={1000} end={6534} duration={2} delay={0} />}</h2>
                </div>
                <hr></hr>
                <div className='counter-text'>
                  <span>global brands</span>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className='main-goal mt-5 center'>
        <div className='container'>
          <div className='goal-title pt-3' >
            <h4>Our Main Goals</h4>
            <span>Sed ut perspiciatis unde omnis iste natus error</span>
          </div>
          <div className=' goal-wrapper mt-5 '>
            <div className='row'>
              <div className='goal-card col-lg-3 col-sm-12'>
                <div className='card-info'>
                  <h6>Medical Accessories</h6>
                  <img src='images/sanitizer.png'></img>
                  <p>Sed ut perspiciatis unde omnis wste natsit volupta explic</p>
                </div>
              </div>
              <div className='col-lg-3 col-sm-12'>
                <div className='card-info'>
                  <h6>Covid - 19 Treatment Center</h6>
                  <img src='images/corona.png'></img>
                  <p>Sed ut perspiciatis unde omnis wste natsit volupta explic</p>
                </div>
              </div>
              <div className='col-lg-3 col-sm-12'>
                <div className='card-info'>
                  <h6>24/7 Hours Emergency Care</h6>
                  <img src='images/ambulance.png'></img>
                  <p>Sed ut perspiciatis unde omnis wste natsit volupta explic</p>
                </div>
              </div>
              <div className='col-lg-3 col-sm-12'>
                <div className='card-info'>
                  <h6>Online Free Consultations</h6>
                  <img src='images/camera.png'></img>
                  <p>Sed ut perspiciatis unde omnis wste natsit volupta explic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='another-goal mt-5'>
        <div className='container'>
          <div className='row goal-text'>
            <div className='col-lg-6 col-sm-12'>
              <h2>Our Main Goal</h2>
              <span> Sed ut perspiciatis unde omnis iste natus error</span>
            </div>
            <div className='col-lg-6 col-sm-12 mt-3 '>
              <div className='doctor-btn'>
                <a>View all doctors <FiPlus/></a>
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='goal-image col-lg-4 col-sm-12'>
              <img src='images/doc-1.jpg'/>
              <div className='goal-info'>
                <div className='goal-link'>
                  <FaFacebook style={iconStyle}/>
                  <FaTwitter style={iconStyle}/>
                  <FaInstagram style={iconStyle}/>
                </div>
                <div className='goal-id'>
                  <p>Dr. Michael Coleman</p>
                  <span>Covid - 19 Doctor</span>
                </div>
              </div>
            </div>
            <div className='goal-image col-lg-4 col-sm-12'>
              <img src='images/doc-2.jpg'/>
              <div className='goal-info'>
                <div className='goal-link'>
                  <FaFacebook style={iconStyle}/>
                  <FaTwitter style={iconStyle}/>
                  <FaInstagram style={iconStyle}/>
                </div>
                <div className='goal-id'>
                  <p>Dr. Michael Coleman</p>
                  <span>Covid - 19 Doctor</span>
                </div>
              </div>
            </div>
            <div className='goal-image col-lg-4 col-sm-12'>
              <img src='images/doc-3.jpg'/>
              <div className='goal-info'>
                <div className='goal-link'>
                  <FaFacebook style={iconStyle}/>
                  <FaTwitter style={iconStyle}/>
                  <FaInstagram style={iconStyle}/>
                </div>
                <div className='goal-id'>
                  <p>Dr. Michael Coleman</p>
                  <span>Covid - 19 Doctor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="doc-banner container my-5">
        <img src="images/doc-banner.jpg" alt=""/>
        <div class="doc-img">
          <div class="row">
            <div className='doc-topic col-md-6'>
              <span>Covid - 19</span>
              <h2>Needs for Consultations</h2>
              <div className='doc-btn  justify-content-start justify-content-lg-end'>
                <a>shop Now <FiPlus/></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
