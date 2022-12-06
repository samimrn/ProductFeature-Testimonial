import React from 'react'
import { useRef, useState } from "react";
import { AiOutlineFolder, AiOutlineSearch } from 'react-icons/ai'
import { BiBookmark, BiChevronRight } from 'react-icons/bi'
import { FaRegCalendarAlt, FaReply } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi'
import { Swiper, SwiperSlide } from "swiper/react";

function Blog() {

  let iconStyles = { color: "#4e97fd", marginRight:"2px", fontSize: "15" };

  return (
    <div className='blog'>
      
      <div class="banner">
        <img src="images/bg.jpg" alt=""/>
        <div class="bg-image">
          <div class="container">
            <div className='contact-topic'>
              <h2>Blog Posts</h2>
            </div>
            <div class="breadcrumb-menu">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active"><a href='#'>Blog</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className='blog-main mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12'>

              <div className='blog-search'>
                <form className='blog-search-form'>
                  <input type='text' placeholder='Search...'/>
                  <div class="btn" type="button"><AiOutlineSearch/></div>
                </form>
              </div>

              <div className='blog-category mt-3'>
                <div className='blog-category-wrapper'>
                  <div className='blog-category-text'>
                    <h4>Categories</h4>
                    <hr/>
                    <div className='blog-category-list'>
                      <a><BiChevronRight/> Covid-19</a>
                      <span>(1)</span>
                    </div>
                    <div className='blog-category-list'>
                      <a><BiChevronRight/> Gallery</a>
                      <span>(1)</span>
                    </div>
                    <div className='blog-category-list'>
                      <a><BiChevronRight/> Medical</a>
                      <span>(1)</span>
                    </div>
                    <div className='blog-category-list'>
                      <a><BiChevronRight/> Sanitizer</a>
                      <span>(1)</span>
                    </div>
                    <div className='blog-category-list'>
                      <a><BiChevronRight/> Video</a>
                      <span>(1)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='blog-popularPost mt-3'>
                <div className='blog-popularPost-wrapper'>
                  <div className='blog-popularPost-text'>
                    <h4>Popular Posts</h4>
                    <hr/>
                    <div className='blog-popularPost-list'>
                      <img src='images/img-2.jpg'/>
                      <div className='popularPost-text'>
                        <p>Mirage Deep Dive Under anding Timin Response</p>
                        <span>SEPTEMBER 26, 2020</span>
                      </div>
                    </div>
                    <div className='blog-popularPost-list'>
                      <img src='images/img-2.jpg'/>
                      <div className='popularPost-text'>
                        <p>Mirage Deep Dive Under anding Timin Response</p>
                        <span>SEPTEMBER 26, 2020</span>
                      </div>
                    </div>
                    <hr/>
                    <p>But I must explain to you how all this mistaken idea</p>
                    <span>OCTOBER 6, 2020</span>
                  </div>
                </div>
              </div>

              <div className='single-banner'>
                <img src='images/single-banner.png'></img>
                <p>New Apple MacBook Air</p>
                <span>$999</span>
                <a>Buy Now <FiPlus/></a>
              </div>

              <div className='tags mt-3'>
                <div className='tags-wrapper'>
                  <div className='blog-popularPost-text'>
                    <h4>Tags</h4>
                    <hr/>
                    <div className='tags-list'>
                      <a>ecommerce</a>
                      <a>envato</a>
                      <a>theme</a>
                      <a>electronic</a>
                      <a>shop</a>
                      <a>slider</a>
                      <a>youtube</a>
                      <a>themeelectro</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='col-lg-8 col-md-12'>

              <div className='blog-info'>
                <div className='slider-img'>
                  <img src='images/img-2.jpg'/>
                </div>
                <div className='blog-text'>
                  <div className='blog-data'>
                    <span><FaRegCalendarAlt style={iconStyles}/> December 5, 2022</span>
                    <span><AiOutlineFolder style={iconStyles}/> Sanitizer</span>
                    <span><BiBookmark style={iconStyles}/>Medical Supplies</span>
                  </div>
                  <hr/>
                  <h4>How To Feel More Energe Even You’re Stuck</h4>
                  <div className='blog-feed'>
                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit</p>
                    <div className='jumbotron'>
                      <p className='lead'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <span>-Anonymous</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                  </div>
                </div>
              </div>
              <div className='blog-feedback'>
                <h2>One thought on “How To Feel More Energe Even You’re Stuck”</h2>
                <div className='feedback-box'>
                  <img src='images/user.webp'/>
                  <div className='feedback-text'>
                    <div className='feedback-title'>
                      <h5>John Doe</h5>
                      <span>OCTOBER 15, 2020</span>
                      <span className='reply'><FaReply/> Reply</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
              <hr/>
              <div className='blog-form'>
                <h4>Leave a Reply</h4>
                <span>Your email address will not be published. Required fields are marked</span>
                <form className='mt-4'>
                  <textarea placeholder='Comment'/>
                  <input type='text' placeholder='Name'/>
                  <input type='email' placeholder='Email'/>
                  <input type='text' placeholder='Website'/>
                  <input className='checkbox' type='checkbox'/><label> Save my name, email, and website in this browser for the next time I comment.</label>
                  <div className='blog-form-btn'>
                    <a>Post Comment</a>
                  </div>
                </form>
              </div>

            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Blog

