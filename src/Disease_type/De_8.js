import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import De_8_img from './De_8.jpg'
export default function De_8() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='body_11'>
            <div style={{position:"relative" ,backgroundcolor: "deepskyblue",minheight:" 50vh"}}>

            
      <div className="custom-shape-divider-top-1680709654_1">
   
    <svg className='svg_1_curv' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill_1"></path>
        
    </svg>
    <h1 className='heading_de_strep'>Strep Throat</h1>
   </div>
</div>
    <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={De_8_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
            <ul className='main_solution_ul'>
                <li className='main_solution_li'>See a doctor: If you suspect that you have strep throat, see a doctor.</li>
                <li className='main_solution_li'> Rest: Get plenty of rest to allow your body to fight the infection.</li>
                <li className='main_solution_li'>Drink fluids: Drink plenty of fluids such as water, herbal teas, or clear broths to prevent dehydration.</li>
                <li className='main_solution_li'>Use a humidifier: Use a humidifier to moisten the air and soothe the throat. This can also help ease congestion and coughing.</li>
                <li className='main_solution_li'>Gargle with salt water: Gargling with warm salt water can help soothe the throat and reduce inflammation. Mix 1/4 to 1/2 teaspoon of salt in 8 ounces of warm water and gargle for 15-30 seconds before spitting it out.</li>
                <li className='main_solution_li'>ake pain relievers: Over-the-counter pain relievers such as acetaminophen (Tylenol) or ibuprofen (Advil) can help reduce pain and fever. Follow the recommended dosage instructions on the packaging.</li>
            </ul>
        </div>

    </div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
