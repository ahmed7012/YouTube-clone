import React from 'react'
import { Link } from 'react-router-dom'

import {logo} from '../utils/constant'
import Searchbar from './Searchbar';
export default function Navbar() {
  return <>

  <nav class="navbar navbar-expand-lg navbar-light nav-style">
  <div class="container">

    <Link class="navbar-brand" to={''}>
        <img src={logo} alt="logo" className='w-100' style={{'height':'50px'}}/>
    </Link>

    <button class="navbar-toggler btn-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

            <li class="nav-item">
            <Searchbar/>
            </li>
    </ul>

    </div>
  </div>
</nav>
  
  
  
  </>
}
