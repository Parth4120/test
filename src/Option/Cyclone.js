import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Cyclone.css'

export default function Cyclone() {
  return (
    <div>
    <div><Navbar/></div>
    <div style={{width:"100%"}}> 
      <section className='Cyclone'><h1 className='Cyclone_header'>CYCLONE</h1></section>
      </div>
      <div className='container main_cyclone' >
        <div className='main_cyclone_1' >
        <div className='main_cyclone_2'  >
              <div >
                <h1 className='main_cyclone_heading'>DO'S</h1>
              </div>
        </div>
        <div className='main_cyclone_content'>
        <ul className='main_cyclone_content_1' >
          <li>Stay informed about weather updates and evacuation notices from authorities.</li>
          <li>Secure your home and belongings, such as by boarding up windows and doors and moving furniture to higher ground.</li>
          <li>Have an emergency kit prepared with essentials like food, water, and first-aid supplies.</li>
          <li>Turn off all electrical appliances and gas supply before evacuating.</li>
          <li>Listen to the radio or watch the news for further instructions and updates.</li>
        </ul>
        </div>
        </div>
        <div className='dont_cyclone_main' >
        <div className='dont_cyclone_main_1'>
    <div >
        <h1 className='dont_cyclone_main_heading'>DONT'S</h1>
    </div>
    </div>
    <div className='dont_cyclone_main_content' >
        <ul className='dont_cyclone_main_list' >
          <li>Don't stay in low-lying areas or near the coast during a cyclone.</li>
          <li>Don't use electrical appliances or devices during a cyclone, as power outages and surges can occur.</li>
          <li>Don't try to drive or walk through floodwaters, as they can be deeper and stronger than they appear.</li>
          <li>Don't leave your pet behind. Take them with you.</li>
          <li>Don't spread rumors or panic.</li>
        </ul>
        </div>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  )
}
