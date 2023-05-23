import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import De_6_img from './De_6.jpg'

export default function De_6() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='body_11'>
            <div style={{position:"relative" ,backgroundcolor: "deepskyblue",minheight:" 50vh"}}>

            
      <div className="custom-shape-divider-top-1680709654_1">
   
    <svg className='svg_1_curv' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill_1"></path>
        
    </svg>
    <h1 className='heading_de_conjunctivitis'>Conjunctivitis</h1>
   </div>
</div>
    <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={De_6_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
            <ul className='main_solution_ul'>
                <li className='main_solution_li'>Practice good hygiene: Wash your hands frequently and avoid touching your eyes to prevent the spread of infection.</li>
                <li className='main_solution_li'>Use warm compresses: Soak a clean washcloth in warm water and place it over your closed eyes for 5-10 minutes to relieve inflammation and discomfort.</li>
                <li className='main_solution_li'>Use eye drops or ointment: Over-the-counter eye drops or ointments may help relieve symptoms and treat the infection.</li>
                <li className='main_solution_li'>Use a clean towel: Use a clean towel or tissue to wipe away any discharge from your eyes. Use a different towel for each eye to prevent the spread of infection.</li>
                <li className='main_solution_li'>Avoid wearing contact lenses: Avoid wearing contact lenses until the infection has resolved. If you must wear contact lenses, use daily disposables and replace them frequently.</li>
                <li className='main_solution_li'> Keep your hands away from your eyes: Avoid rubbing your eyes, as this can worsen the infection.</li>

            </ul>
        </div>

    </div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
