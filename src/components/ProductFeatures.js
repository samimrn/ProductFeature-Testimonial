import React from 'react'
import { Figure } from 'react-bootstrap'
import { BiCheckShield } from 'react-icons/bi'

function ProductFeatures() {
  return (
    <div className='featured'>

    <div className='product'>
      <div className='container'>
        <div className='heading row'>
          <div className='col-lg-6 col-md-12'> 
            <div className='top-left'>
              <h3>Featured Products</h3>
              <p>Lorem ipsum lorem ipsum lorem ipsum</p>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className='top-right'>
              <ul className='justify-content-start justify-content-lg-end'>
                <li><BiCheckShield/> Best Seller</li>
                <li><BiCheckShield/> Popular</li>
                <li><BiCheckShield/> Top Rated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className='container mt-4'>
        <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <Figure className='mb-45'>
                <img className='img-fluid' src='images/pic1.jpg'></img>
              </Figure>
            </div>
            <div className='col-lg-4 col-md-6'>
              <Figure className='mb-45'>
                <img className='img-fluid' src='images/pic2.jpg'></img>
              </Figure>            
            </div>
            <div className='col-lg-4 col-md-6'>
              <Figure className='mb-45'>
                <img className='img-fluid' src='images/pic3.jpg'></img>
              </Figure>            
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures
