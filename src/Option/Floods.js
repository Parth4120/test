import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Floods.css'

export default function Floods() {
  return (
    <div>
    <div><Navbar/></div>
    <div style={{width:"100%"}}> 
      <section className='Floods'><h1 className='Floods_header'>FLOODS</h1></section>
      </div>
      <div className='container main_flood'>
        <div className='main_flood_1' >
        <div className='main_flood_2' >
              <div >
                <h1 className='main_flood_heading' >DO'S</h1>
              </div>
        </div>
        <div className='main_flood_content' >
        <ul className='main_flood_content_1'>
          <li>Move to higher ground or an elevated area if possible.</li>
          <li>Listen to local news or weather reports for updates and evacuation notices.</li>
          <li>Have an emergency kit prepared with essentials like food, water, and first-aid supplies.</li>
          <li>Turn off all electrical appliances and gas supply before evacuating.</li>
          <li>Follow the instructions of emergency personnel and authorities.</li>
        </ul>
        </div>
        </div>
        <div className='dont_flood_main' >
        <div className='dont_flood_main_1'>
    <div >
        <h1 className='dont_flood_heading' >DONT'S</h1>
    </div>
    </div>
    <div className='dont_flood_main_content'>
        <ul className='dont_flood_main_list' >
          <li>Don't try to drive or walk through floodwaters, as they can be deeper and stronger than they appear.</li>
          <li>Don't touch electrical equipment or appliances if you are standing in water.</li>
          <li>Don't stay in low-lying areas or near bodies of water during a flood.</li>
          <li> Don't drink floodwater, as it can be contaminated with bacteria and other harmful substances.</li>
          <li>Don't return home until authorities have confirmed that it is safe to do so.</li>
        </ul>
        </div>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  )
}
