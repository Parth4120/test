import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import De_7_img from './De_7.jpg'
export default function De_7() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='body_11'>
            <div style={{position:"relative" ,backgroundcolor: "deepskyblue",minheight:" 50vh"}}>

            
      <div className="custom-shape-divider-top-1680709654_1">
   
    <svg className='svg_1_curv' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill_1"></path>
        
    </svg>
    <h1 className='heading_de_dengue'>Dengue</h1>
   </div>
</div>
    <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={De_7_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
            <ul className='main_solution_ul'>
                <li className='main_solution_li'>Seek medical attention: If you suspect that you have dengue, seek medical attention immediately. Dengue can be a serious illness that requires prompt treatment.</li>
                <li className='main_solution_li'>Stay hydrated: Drink plenty of fluids such as water, herbal teas, or oral rehydration solution (ORS) to prevent dehydration.</li>
                <li className='main_solution_li'>Rest: Get plenty of rest to allow your body to recover from the infection.</li>
                <li className='main_solution_li'>Use pain relievers: Use pain relievers such as acetaminophen to alleviate fever and joint pain. Avoid aspirin and non-steroidal anti-inflammatory drugs (NSAIDs) such as ibuprofen, as they can increase the risk of bleeding.</li>
                <li className='main_solution_li'>Control fever: Use a cool compress or take a cool bath to help reduce fever.</li>
                <li className='main_solution_li'>Use mosquito repellent: Use mosquito repellent to prevent further mosquito bites and reduce the risk of spreading the virus.</li>
            </ul>
        </div>

    </div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
