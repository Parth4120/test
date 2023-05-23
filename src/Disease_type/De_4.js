import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import De_4_img from './De_4.jpg'

export default function De_4() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='body_11'>
            <div style={{position:"relative" ,backgroundcolor: "deepskyblue",minheight:" 50vh"}}>

            
      <div className="custom-shape-divider-top-1680709654_1">
   
    <svg className='svg_1_curv' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill_1"></path>
        
    </svg>
    <h1 className='heading_de_cholera'>Cholera</h1>
   </div>
</div>
    <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={De_4_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
            <ul className='main_solution_ul'>
                <li className='main_solution_li'>Seek medical attention: If you suspect that you have cholera, seek medical attention immediately. Cholera is a serious illness that requires prompt treatment.</li>
                <li className='main_solution_li'>Rehydrate: Drink plenty of fluids such as water, herbal teas, or oral rehydration solution (ORS) to prevent dehydration. ORS is a solution of salt, sugar, and water that is available at pharmacies and can help replace lost fluids and electrolytes.</li>
                <li className='main_solution_li'>Avoid solid foods: Avoid solid foods until your symptoms improve. Stick to clear liquids such as broth, coconut water, or weak tea.</li>
                <li className='main_solution_li'>Use antibiotics: Your doctor may prescribe antibiotics to treat the cholera infection. Follow the dosage instructions carefully and complete the entire course of medication.</li>
                <li className='main_solution_li'> Rest: Get plenty of rest to allow your body to recover from the infection.</li>

            </ul>
        </div>

    </div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
