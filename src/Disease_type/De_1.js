import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import './De_1.css'
import De_img from './De_1.jpg'

export default function De_1() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='body_11'>
            <div style={{position:"relative" ,backgroundcolor: "deepskyblue",minheight:" 50vh"}}>
      <div className="custom-shape-divider-top-1680709654_1">
    <svg className='svg_1_curv' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill_1"></path>
    </svg>
    <h1 className='heading_de_fever'>Fever</h1>
   </div>
</div>
    <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={De_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
            <ul className='main_solution_ul'>
                <li className='main_solution_li'>Rest: Take it easy and get plenty of sleep to allow your body to fight off the infection.</li>
                <li className='main_solution_li'>Drink fluids: Stay hydrated by drinking water or other clear fluids to prevent dehydration.</li>
                <li className='main_solution_li'> Take medicine: Over-the-counter fever reducers like acetaminophen (Tylenol) or ibuprofen (Advil) can help lower your fever and ease discomfort.</li>
                <li className='main_solution_li'>Apply a cool cloth: Place a damp cloth or cool pack on your forehead or other pulse points to help reduce your fever.</li>
                <li className='main_solution_li'>Wear light clothing: Wear loose, lightweight clothing to keep your body cool and prevent overheating.</li>
                <li className='main_solution_li'>Use a fan: Use a fan to circulate air in the room and help lower your body temperature.</li>
                <li className='main_solution_li'>Call a doctor: If your fever persists for more than 3 days, or if you have other symptoms like difficulty breathing or chest pain, seek medical attention.</li>
            </ul>
        </div>

    </div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
