import React from 'react'
import '../App.css'
import { BiSearch } from 'react-icons/bi'

function Error() 
{
  return (
    <div className='404Error'>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 col-md-10'>
           <div className='text-center'>
            <div className='error-txt'>404</div>
            <h5 className='mb-3'>oops! The page you requested was not found!</h5>
            <p className='error-para mb-4'>The page you are looking for was moved, removed, renamed or might never existed.</p>
            <div className='search-form'>
              <form>
                <input type='text' placeholder='Search'/>
                <button type='submit' className='search-icon'><BiSearch/></button>
              </form>
            </div>
            <a className='home-btn mt-5'>GO TO HOMEPAGE</a>
           </div>
          </div>
        </div>
      </div>

      <div className='instagram-link p-130 p-15'>
        <div className='container-fluid'>
          <div className='row g-0'>
           
            <div className='col-lg-2 col-md-2 col-sm-6 col-xs-12 '>
              <a>
                <img className='img-fluid' src='images/pic1.jpg'/>
              </a>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-6 col-xs-12'>
              <a>
                <img className='img-fluid' src='images/pic2.jpg'/>
              </a>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-6 col-xs-12'>
              <a>
                <img className='img-fluid' src='images/pic3.jpg'/>
              </a>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-6 col-xs-12'>
              <a>
                <img className='img-fluid' src='images/pic1.jpg'/>
              </a>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-6 col-xs-12'>
              <a>
                <img className='img-fluid' src='images/pic2.jpg'/>
              </a>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-6 col-xs-12'>
              <a>
                <img className='img-fluid' src='images/pic3.jpg'/>
              </a>
            </div>
          </div>
          
        </div>
    </div> 
    </div>
  )
}

export default Error
