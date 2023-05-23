import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import De_2_img from './De_2.jpg'

export default function De_2() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='body_11'>
            <div style={{position:"relative" ,backgroundcolor: "deepskyblue",minheight:" 50vh"}}>

            
      <div className="custom-shape-divider-top-1680709654_1">
   
    <svg className='svg_1_curv' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill_1"></path>
    </svg>
    <h1 className='heading_de_cold'>The Common Cold</h1>
   </div>
</div>
    <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={De_2_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
            <ul className='main_solution_ul'>
                <li className='main_solution_li'>Rest: Get plenty of rest to allow your body to recover from the infection.</li>
                <li className='main_solution_li'>Drink plenty of fluids: Drink lots of fluids such as water, herbal teas, or soup to stay hydrated.</li>
                <li className='main_solution_li'>Use a humidifier: Use a humidifier to add moisture to the air and soothe your irritated throat and nasal passages.</li>
                <li className='main_solution_li'>ake over-the-counter medications: Over-the-counter medications such as pain relievers, decongestants, and cough suppressants can help alleviate symptoms. Follow the recommended dosage instructions on the packaging.</li>
                <li className='main_solution_li'>Gargle with salt water: Gargle with warm salt water to relieve a sore throat and help reduce inflammation.</li>
                <li className='main_solution_li'>Use nasal saline drops or sprays: Nasal saline drops or sprays can help relieve nasal congestion and dryness.</li>
            </ul>
        </div>

    </div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
