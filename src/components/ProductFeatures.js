import React from 'react'
import { Figure } from 'react-bootstrap'
import { BiCheckShield } from 'react-icons/bi'
import { VscHeart } from 'react-icons/vsc'
import { BsCartPlus } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import Product from './Product'

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
              <Product
                id='1'
                image='images/pic1.jpg'
                title='Polaroid Camera'
                prices={200}
                quantity={3}
              />
            </div>
            <div className='col-lg-4 col-md-6'>
              <Product
                id='2'
                image='images/pic2.jpg'
                title='Polaroid Camera'
                prices={200}
                quantity={3}
                />        
            </div>
            <div className='col-lg-4 col-md-6'>
              <Product
                id='3'
                image='images/pic3.jpg'
                title='speaker'
                prices={200}
                quantity={3}
                />      
            </div>
        </div>
      </div>
      <div className='container mt-2'>
        <div className='row'>
            <div className='col-lg-4 col-md-6'>
            <Product
              id='4'
              image='images/pic1.jpg'
              title='Polaroid Camera'
              prices={200}
              quantity={3}
              />
            </div>
            <div className='col-lg-4 col-md-6'>
              <Product
                id='5'
                image='images/pic2.jpg'
                title='Earphone'
                prices={200}
                quantity={3}
              />        
            </div>
            <div className='col-lg-4 col-md-6'>
            <Product
              id='6'
              image='images/pic3.jpg'
              title='Speaker'
              prices={200}
              quantity={3}
              />        
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures
