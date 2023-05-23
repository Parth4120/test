import React from 'react'
import { Link } from 'react-router-dom'
import cc from './third.jpg'
import vv from './second.jpg'
import welcome_img from './wel.jpg'
import './Carouseal.css'

export default function Carousel() {
  return (
    <div className='container mb-4 carouseal'>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
              <Link to="/welcome_first_aid">
                <img className='carousel_img' src={welcome_img} alt="bootimg" />
                </Link>
            </div>
              <div class="carousel-item">
              <Link to="/important_first_aid">
                <img src={vv} alt="slider" class="d-block w-100 carousel_img"/>
                </Link>
              </div>
              <div class="carousel-item">
              <Link to="https://amzn.to/3KD8kmU">
                <img src={cc} alt="slider" class="d-block w-100 carousel_img"/>
                </Link>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>



    </div>
  )
}


