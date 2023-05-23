import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Landslide.css'

export default function Landslide() {
  return (
    <div>
    <div><Navbar/></div>
    <div style={{width:"100%"}}> 
      <section className='landslide'><h1 className='landslide_header'>LANDSLIDE</h1></section>
      </div>
      <div className='container main_landslide'>
        <div className='main_landslide_1' >
        <div className='main_landslide_2'  >
              <div >
                <h1 className='main_landslide_heading'>DO'S</h1>
              </div>
        </div>
        <div className='main_landslide_content'>
        <ul className='main_landslide_content_1'>
          <li>Move away from the area of the landslide as quickly as possible.</li>
          <li>Follow evacuation notices and instructions from local authorities.</li>
          <li>Have an emergency kit prepared with essentials like food, water, and first-aid supplies.</li>
          <li>Listen to local news or weather reports for updates and further instructions.</li>
          <li>Stay away from steep slopes and unstable terrain.</li>
        </ul>
        </div>
        </div>
        <div className='dont_landslide_main' >
        <div className='dont_landslide_main_1'>
    <div >
        <h1 className='dont_landslide_heading'>DONT'S</h1>
    </div>
    </div>
    <div className='dont_landslide_main_content' >
        <ul className='dont_landslide_main_list'>
          <li>Don't try to outrun a landslide or stay in the path of the debris.</li>
          <li> Don't touch downed power lines or electrical equipment if you are standing in water.</li>
          <li>Don't return to the affected area until authorities have confirmed that it is safe to do so.</li>
          <li>Don't use water from wells or other sources that may have been contaminated by the landslide.</li>
          <li>Don't spread rumors or panic.</li>
        </ul>
        </div>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  )
}
