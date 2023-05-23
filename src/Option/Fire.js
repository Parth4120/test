import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Fire.css'

export default function Fire() {
  return (
    <div>
   <div><Navbar/></div>
      <div style={{width:"100%"}}> 
      <section className='fire'><h1 className='fire_header'>FIRE</h1></section>
      </div>
      <div className='main_fire' >
        <div className='main_fire_1' >
        <div className='main_fire_2' >
              <div >
                <h1 className='main_fire_heading' >DO'S</h1>
              </div>
        </div>
        <div className='main_fire_content'>
        <ul className='main_fire_content_1'>
          <li>Call the fire department or emergency services as soon as possible.</li>
          <li>If you can safely do so, try to extinguish small fires using a fire extinguisher or water.</li>
          <li>Stay low to the ground to avoid smoke and heat.</li>
          <li>Follow the evacuation procedures and emergency routes.</li>
          <li>Have an emergency kit prepared with essentials like food, water, and first-aid supplies.</li>
        </ul>
        </div>
        </div>
        <div className='dont_fire_main' >
        <div className='dont_fire_main_1' >
    <div >
        <h1 className='dont_fire_heading' >DONT'S</h1>
    </div>
    </div>
    <div className='dont_fire_main_content' >
        <ul className='dont_fire_main_list'>
          <li>Don't attempt to put out a large or uncontrollable fire.</li>
          <li> Don't use an elevator during a fire.</li>
          <li> Don't touch doorknobs or metal surfaces that may be hot.</li>
          <li>Don't return to the building until authorities have confirmed that it is safe to do so.</li>
          <li> Don't panic, and remain calm and focused.</li>
        </ul>
        </div>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  )
}
