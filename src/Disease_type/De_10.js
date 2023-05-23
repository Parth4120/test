import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import asthma_img from './asthma.jpg'
export default function De_10() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='body_11'>
            <div style={{position:"relative" ,backgroundcolor: "deepskyblue",minheight:" 50vh"}}>

            
      <div className="custom-shape-divider-top-1680709654_1">
   
    <svg className='svg_1_curv' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill_1"></path>
        
    </svg>
    <h1 className='heading_de_asthma'>Asthma</h1>
   </div>
</div>
      <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={asthma_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
      <ul className='main_solution_ul'>
                <li className='main_solution_li'>Follow your asthma action plan: Work with your doctor to create an asthma action plan that outlines the steps to take during an asthma attack. Follow your plan closely.
</li>
                <li className='main_solution_li'>Use your inhaler: Use your inhaler as prescribed by your doctor to relieve symptoms and prevent attacks. Keep your inhaler with you at all times.
</li>
                <li className='main_solution_li'>Stay calm: Stay calm during an asthma attack and focus on breathing slowly and deeply.
</li>
                <li className='main_solution_li'>  Sit up straight: Sit up straight or stand up during an asthma attack to help open up your airways.

</li>
                <li className='main_solution_li'>Seek medical attention: If your symptoms worsen or you have difficulty breathing, seek medical attention immediately.
</li>
                <li className='main_solution_li'>Identify and avoid triggers: Identify and avoid triggers such as allergens, smoke, pollution, and exercise-induced asthma to prevent attacks. Work with your doctor to develop a plan to manage triggers.</li>
            </ul>
     
    </div>
    </div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
