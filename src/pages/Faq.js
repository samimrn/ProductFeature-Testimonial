import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import '../App.css'
import { dataAccordion } from '../utils/Data'

function Faq() {

  const[clicked, setClicked]=useState(true)

  const toggle = index => {
    if(clicked === index){
      return setClicked(null)
    }

    setClicked(index)
  }
  let iconStyles = { color: "white", fontWeight: "bold", fontSize: "20" };

  return (
    
    <div className='faq'>
       <div class="banner">
        <img src="images/bg.jpg" alt=""/>
        <div class="bg-image">
          <div class="container">
            <div className='contact-topic'>
              <h2>FAQS</h2>
            </div>
            <div class="breadcrumb-menu">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active"><a href='#'>FAQ</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='accordion container-md mt-5'>
        {dataAccordion.map((item, index) => {
          return(
            <>
            <div className='wrapper ' onClick={() => toggle(index)} key={index}>
              <h6>{item.title}</h6>
              <span >{clicked === index ? <FiMinus style={iconStyles} /> : <FiPlus style={iconStyles} />}</span>
            </div>
            {clicked === index ? (
              <div className='dropdown'>
                <p>{item.content}</p>
              </div>
        ): null}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Faq
