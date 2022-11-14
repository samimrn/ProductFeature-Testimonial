import React from 'react'
import '../App.css'
import { GrMapLocation } from 'react-icons/gr'
import { BsTelephone } from 'react-icons/bs'
import { TbMailOpened } from 'react-icons/tb'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { TiPencil } from 'react-icons/ti'

function Contact() {
  return (
    <div className='contact'>
      <div class="banner">
        <img src="images/bg.jpg" alt=""/>
        <div class="bg-image">
          <div class="container">
            <div className='contact-topic'>
              <h2>Contact Us</h2>
            </div>
            <div class="breadcrumb-menu">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active"><a href='#'>Contact Us</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className='main-contact'>
        <div className='container'>
          <div className='row'>
            <div className='contact-txt col-lg-6 col-md-12'>
             <div className='contact-title mb-5'>
              <h3>Contact Us</h3>
              <p>Sed ut perspiciatis unde omnis natus error</p>
             </div>
             <div className='contact-address'>
              <div className='contact-address-join d-flex mb-3'>
                <div className='contact-address-icon '>
                  <GrMapLocation/>
                </div>
                <div className='contact-address-text'>
                  <span>Address</span>
                  <h4>Shankhamul Road,Kathmandu,<br/>
                      Nepal
                  </h4>
                </div>
              </div>
              <div className='contact-address-join d-flex mb-3'>
                <div className='contact-address-icon'>
                  <BsTelephone/>
                </div>
                <div className='contact-address-text'>
                  <span>Phone Number</span>
                  <h4>+977 9857583747<br/>
                      +977 9857846483
                  </h4>                
                </div>
              </div>
              <div className='contact-address-join d-flex mb-3'>
                <div className='contact-address-icon'>
                  <TbMailOpened/>
                </div>
                <div className='contact-address-text'>
                  <span>Email</span>
                  <h4>contact@gmail.com<br/>
                      info@gmail.com
                  </h4>
                </div>
              </div>
              <div className='contact-address-join d-flex mb-3'>
                <div className='contact-address-icon'>
                  <AiOutlineClockCircle/>
                </div>
                <div className='contact-address-text'>
                  <span>Working Hours</span>
                  <h4>Monday - Friday<br/>
                      09 am - 05 pm
                  </h4>
                </div>
              </div>
             </div>
            </div>
            <div className='contact-img col-lg-6 col-md-12'>
              <img className='img-fluid' src='images/pic3.jpg'/>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-map mb-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.125684725458!2d85.3297832750609!3d27.68445253120538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bfd910ffe9%3A0x66f431dda92f7629!2sShankhamul%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1668420381831!5m2!1sen!2snp"
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
         </iframe>
      </div>
      <div className='contact-form text-center'>
        <div className='contact-form-title mb-5'>
          <h2>Send Us a Message</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error</p>
        </div>
        <form className='form-table container'>
          <div className='form-top row'>
            <div className='col-md-12 col-lg-4 mb-4'>
            <div class="input-group col-mb-3">
              <input type='text' class="form-control border-right-0 border" placeholder="Your Name" aria-describedby="basic-addon2"/>
              <span class="input-group-append ">
                <div class="btn pt-3" type="button"><FaRegUser/></div>
              </span>
            </div>
            </div>
            <div className='col-md-12 col-lg-4 mb-4'>
            <div class="input-group col-mb-3">
              <input type='text' class="form-control border-right-0 border" placeholder="Your Email" aria-describedby="basic-addon2"/>
              <span class="input-group-append ">
                <div class="btn pt-3" type="button"><FiMail/></div>
              </span>
            </div>
            </div>
            <div className='col-md-12 col-lg-4'>
            <div class="input-group col-mb-3">
              <input type='text' class="form-control border-right-0 border" placeholder="Your Subject" aria-describedby="basic-addon2"/>
              <span class="input-group-append ">
                <div class="btn pt-3" type="button"><BsTelephone/></div>
              </span>
            </div>
            </div>
          </div>
          <div className='form-bottom row mt-4'>
            <div className='col-12'>
            <div class="input-group col-mb-3">
              <textarea class="form-control pt-3 border-right-0 border" placeholder="Your Message" aria-describedby="basic-addon2"/>
              <span class="input-group-append ">
                <div class="btn pt-3" type="button"><TiPencil/></div>
              </span>
            </div>
            </div>
          </div>
          <div className='send-btn mt-5'>
            <a>Send Message</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
