import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Tsunami.css'

export default function Tsunami() {
  return (
    <div>
    <div><Navbar/></div>
     
      <div style={{width:"100%"}}> 
      <section className='tsunami'><h1 className='tsunami_header'>TSUNAMI</h1></section>
      </div>
      <div className='main_tsunami' >
        <div className='main_tsunami_1'>
        <div className='main_tsunami_2' >
              <div >
                <h1 className='main_tsunami_heading'>DO'S</h1>
              </div>
        </div>
        <div className='main_tsunami_content'>
        <ul className='main_tsunami_content_1' >
          <li>Move to higher ground or inland as quickly as possible.</li>
          <li>Follow evacuation notices and instructions from local authorities.</li>
          <li>Have an emergency kit prepared with essentials like food, water, and first-aid supplies.</li>
          <li>Stay away from beaches, harbors, and other low-lying areas.</li>
          <li>Listen to local news or weather reports for updates and further instructions.</li>
        </ul>
        </div>
        </div>
        <div className='dont_tsunami_main'>
        <div className='dont_tsunami_main_1'>
    <div >
        <h1 className='dont_tsunami_heading' >DONT'S</h1>
    </div>
    </div>
    <div className='dont_tsunami_main_content' >
        <ul className='dont_tsunami_main_list' >
          <li>Don't return to low-lying areas until authorities have confirmed that it is safe to do so.</li>
          <li>Don't touch downed power lines or electrical equipment if you are standing in water.</li>
          <li>Don't go to the coast to observe the tsunami, as it can be extremely dangerous.</li>
          <li>Don't try to drive through floodwaters, as they can be deeper and stronger than they appear.</li>
          <li>Don't drink or use contaminated water.</li>
        </ul>
        </div>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  )
}
