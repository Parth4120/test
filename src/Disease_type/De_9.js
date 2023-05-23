import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'
import De_9_img from './De_9.jpg'
export default function De_9() {
  return (
    <div>
      <div><Navbar/></div>
      <div className='body_11'>
            <div style={{position:"relative" ,backgroundcolor: "deepskyblue",minheight:" 50vh"}}>

            
      <div className="custom-shape-divider-top-1680709654_1">
   
    <svg className='svg_1_curv' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill_1"></path>
        
    </svg>
    <h1 className='heading_de_stomach'>Stomach Flu</h1>
   </div>
</div>
    <div className='container main_de_1'>
        <div className='main_symptoms'>
            <div className='main_symptoms_img'>
                <img className='main_symptoms_img_1' src={De_9_img} alt="" />
            </div>
        </div>
        <div className='main_solution'>
        <h1 className='main_solution_h1'>First Aid Solution</h1>
            <ul className='main_solution_ul'>
                <li className='main_solution_li'>Rest: Get plenty of rest to allow your body to recover from the infection.</li>
                <li className='main_solution_li'>Drink fluids: Drink plenty of clear fluids such as water, herbal teas, or clear broths to prevent dehydration.</li>
                <li className='main_solution_li'>Eat light foods: Eat light foods such as crackers, toast, and bananas to help ease nausea and vomiting. Avoid dairy, spicy, and fatty foods until you feel better.</li>
                <li className='main_solution_li'>Use a hot water bottle: Placing a hot water bottle or heating pad on your stomach can help relieve stomach cramps.</li>
                <li className='main_solution_li'>Wash your hands: Wash your hands frequently to prevent the spread of infection. Use soap and warm water for at least 20 seconds.</li>
                <li className='main_solution_li'> Take over-the-counter medication: Over-the-counter medication such as acetaminophen (Tylenol) or ibuprofen (Advil) can help reduce fever and relieve pain. Follow the recommended dosage instructions on the packaging.</li>
            </ul>
        </div>

    </div>
    </div>
      <div><Footer/></div>
    </div>
  )
}
