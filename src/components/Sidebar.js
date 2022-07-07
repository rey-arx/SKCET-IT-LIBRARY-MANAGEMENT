import React from 'react'
import Forms from './Forms';

import './stylesidenav.css';
import Topbar from './Topbar';
import Topnav from './Topnav';

const Sidebar = () => {
  
    return (
    <div>
        <div>
            
        
    <div >
    <div class="topnav">
        
  <a class="display-5 text-light font-weight-bold">LIBRARY MANAGEMENT SYSTEM</a>
  <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><svg class="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg></button>
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><svg class="svg-inline--fa fa-user fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="profile.php">Profile</a></li>
                        <li><a className="dropdown-item" href="setting.php">Setting</a></li>
                        <li><a className="dropdown-item" href="logout.php">Logout</a></li>
                    </ul>
                </li>
            </ul>
            </form>
 
</div>
      <nav class="navbar navbar-expand flex-column active-nav" >
          <a  class="navbar-brand text-light mt-5">
              <div class="display-5 font-weight-bold">THANOS</div>
          </a>
          <ul class="navbar-nav d-flex flex-column mt-5 w-100">
              <li class="nav-item w-100">
                  <a href="#" class="nav-link text-light pl-4">Home</a>
              </li>
              <li class="nav-item w-100">
                  <a href="#" class="nav-link text-light pl-4">About</a>
              </li>
              <li class="nav-item w-100">
                  <a href="#" class="nav-link text-light pl-4">Blog</a>
              </li>
              <li class="nav-item dropdown w-100">
                  <a href="#" class="nav-link dropdown-toggle text-light pl-4" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Service</a>
                  <ul class="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                      <li><a href="#" class="dropdown-item text-light pl-4 p-2">Service 01</a></li>
                      <li><a href="#" class="dropdown-item text-light pl-4 p-2">Service 02</a></li>
                      <li><a href="#" class="dropdown-item text-light pl-4 p-2">Service 03</a></li>
                  </ul>
              </li>
              <li class="nav-item w-100">
                  <a href="#" class="nav-link text-light pl-4">Contact</a>
              </li>
          </ul>
      </nav>    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha2/js/bootstrap.min.js" integrity="sha384-5h4UG+6GOuV9qXh6HqOLwZMY4mnLPraeTrjT5v07o347pj6IkfuoASuGBhfDsp3d" crossorigin="anonymous"></script>
        
        <div class="col py-3">
        </div>
    </div>
</div>

       
    </div>
  
  )
}

export default Sidebar