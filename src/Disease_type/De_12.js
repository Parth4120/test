import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import pne_img from './pne.jpg'
export default function De_12() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='body_11'>
            <div style={{position:"relative" ,backgroundcolor: "deepskyblue",minheight:" 50vh"}}>

            
      <div className="custom-shape-divider-top-1680709654_1">
   
    <svg className='svg_1_curv' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill_1"></path>
        
    </svg>
    <h1 className='heading_de_pneumonia'>Pneumonia</h1>
   </div>
</div>
      <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={pne_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
      <ul className='main_solution_ul'>
                <li className='main_solution_li'>Seek medical attention: If you suspect that you have pneumonia, seek medical attention immediately.
</li>
                <li className='main_solution_li'>
Get plenty of rest: Rest and avoid overexertion to allow your body to recover from the infection.
</li>
                <li className='main_solution_li'>Stay hydrated: Drink plenty of fluids such as water, herbal teas, or oral rehydration solution (ORS) to prevent dehydration.
</li>
                <li className='main_solution_li'>
Use pain relievers: Use pain relievers such as acetaminophen to alleviate fever and chest pain. Follow your doctor's instructions for dosing.
</li>
                <li className='main_solution_li'>
Use a humidifier: Use a humidifier to add moisture to the air and help ease breathing.
</li>
                <li className='main_solution_li'>Take prescribed medications: Take prescribed medications such as antibiotics, antiviral medications, or bronchodilators as directed by your doctor to treat the infection and relieve symptoms. Follow up with your doctor to ensure complete recovery.</li>
            </ul>
      
    </div>
    </div>
    </div>
    <div><Footer/></div>
    </div>
  )
}
