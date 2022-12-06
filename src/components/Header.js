import React from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}, dispatch] = useStateValue();

  return (
    <div className='header '>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <Link to='/'>
            <a class="navbar-brand" >LOGO</a>
          </Link>
          <Link to='/about'>
            <a class="navbar-brand" >About</a>
          </Link>
          <Link to='/blog'>
            <a class="navbar-brand" >Blog</a>
          </Link>
          <Link to='/error'>
            <a class="navbar-brand" >Error</a>
          </Link>
          <Link to='/faq'>
            <a class="navbar-brand" >FAQ</a>
          </Link>
          <Link to='/contact'>
            <a class="navbar-brand" >Contact</a>
          </Link>
          <Link to='/cart'>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-start justify-content-lg-end">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#"><BsCartPlus/> 
                  <span className='header-optionTwo header-basketCount'>
                    {basket?.length}
                  </span>
                </a>
              </li>
            </ul>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
