import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './Earthquakes.css'

export default function Earthquakes() {
  return (
    <div>
    <div><Navbar/></div>
    <section className='earthquake'><h1 className='do_dont_header'>EARTHQUAKE</h1></section>
    <div className='container earthquakes_main'>
    <div className='dos_earthquake'>
        <div className='dos_main' >
              <div >
                <h1 className='dos'>DO'S</h1>
              </div>
        </div>
        <div className='mt-3 dos_content_main'>
           <div className='indoor_main'>
              <h2 className='indoor_header'>Indoor</h2>
              <ul className='indoor_content'>
                <li>Stay calm and take cover under a sturdy desk or table, or against an interior wall away from windows.</li>
                <li>Hold onto your cover and protect your head and neck.</li>
                <li>Stay inside until the shaking stops and it is safe to exit the building.</li>
              </ul>
           </div>
           <div className='mt-3 outdoor_main'>
              <h2 className='outdoor_header'>Outdoor</h2>
              <ul className='outdoor_content'>
                <li> Move to an open area away from trees, buildings, or power lines.
</li>
                <li>Protect your head and neck with your arms.
</li>
                <li>Stay in the open until the shaking stops.
</li>
              </ul>
           </div>
        </div>
    </div>
    <div className='dos_earthquake_1'>
    <div className='dos_main_1'>
    <div >
        <h1 className='dont_header_1'>DONT'S</h1>
    </div>
    </div>
    <div className='mt-4 dont_content_main_1' >
    <div className='indoor_main_1'>
         <h2 className='indoor_header_1'>Indoor</h2>
         <ul className='indoor_content_1'>
            <li>Don't use elevators during an earthquake.

</li>
            <li>Don't stand near windows or exterior walls.
</li>
            <li> Don't try to leave the building until the shaking stops.
</li>
         </ul>
</div>
<div className='mt-2 outdoor_main_1'>
         <h2 className='outdoor_header_1'>Outdoor</h2>
         <ul className='outdoor_content_1'>
            <li>Don't try to enter a building during an earthquake.
</li>
            <li> Don't stand near buildings, trees, or power lines.
</li>
            <li> Don't drive your car during an earthquake, unless it is absolutely necessary</li>
         </ul>
</div>
        </div>
    </div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
