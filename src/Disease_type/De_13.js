import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import tub_img from './tub.jpg'

export default function De_13() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='body_11'>
            <div style={{position:"relative" ,backgroundcolor: "deepskyblue",minheight:" 50vh"}}>

            
      <div className="custom-shape-divider-top-1680709654_1">
   
    <svg className='svg_1_curv' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill_1"></path>
        
    </svg>
    <h1 className='heading_de_tuberculosis'>Tuberculosis</h1>
   </div>
</div>
      <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={tub_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
      <ul className='main_solution_ul'>
                <li className='main_solution_li'>Seek medical attention: If you suspect that you have TB, seek medical attention immediately.
</li>
                <li className='main_solution_li'>
    Cover your mouth: Cover your mouth and nose with a tissue or a mask when coughing or sneezing to prevent the spread of TB bacteria to others.
</li>
                <li className='main_solution_li'>
    Isolate yourself: If you have active TB, isolate yourself from others until your doctor determines that you are no longer contagious.
</li>
                <li className='main_solution_li'>    Take prescribed medications: Take prescribed medications as directed by your doctor for the entire length of treatment to ensure complete recovery and prevent the development of drug-resistant TB.

</li>
                <li className='main_solution_li'>
    Follow a healthy lifestyle: Follow a healthy lifestyle that includes a balanced diet, regular exercise, and adequate rest to support your body's immune system</li>
                <li className='main_solution_li'>    Avoid smoking: Avoid smoking or exposure to secondhand smoke, as smoking weakens the lungs and increases the risk of complications from TB.
</li>
            </ul>
      
    </div>
    </div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
