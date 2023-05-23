import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'

import head_img from './head.jpg'
import hiccup_img from './hicsup.jpg'
import blood_img from './blood.jpg'
import vic_img from './vic.jpg'
import vomiting_img from './vomiting.jpg'
import dir_img from './dir.jpg'
export default function Common_Disease() {
  return (
    <div>
    <div><Navbar/></div>
    <div className="container">
    <h1 className='main_heading_common_deisease'>Common Disease</h1>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={head_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Headache</h2>
      <p className="bits_p">Headache is a common discomfort that can occur in any part of the head or neck region, and it can range from mild to severe in intensity. There are various causes of headaches, including tension, migraine, sinusitis, and dehydration.</p>

      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
                  <li>Rest in a quiet, dark room with a cool cloth on your forehead or neck.</li>
                  <li>Drink plenty of water and avoid caffeine and alcohol.</li>
                  <li>Use over-the-counter pain relievers like ibuprofen or acetaminophen, if safe for you to take.</li>
                  <li>Apply a hot or cold compress to the painful area, depending on what works for you.</li>
                  <li>Massage the scalp, neck, and temples to help ease tension.</li>
                  <li>Try relaxation techniques such as deep breathing or meditation.</li>
                  <li>Seek medical attention if the headache is severe, lasts longer than usual, or is accompanied by other symptoms such as fever, neck stiffness, or vision changes.</li>
            </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={hiccup_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Hiccups</h2>
      <p className="bits_p">Hiccups are involuntary contractions of the diaphragm muscle that cause a sharp inhalation sound and can occur for various reasons such as overeating, drinking carbonated beverages, or sudden excitement.</p>
     
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
                  <li>Drinking a glass of water quickly</li>
                  <li>Holding your breath for a short period</li>
                  <li> Breathing into a paper bag</li>
                  <li>Gargling with ice water</li>
                  <li> Pulling your knees to your chest and leaning forward</li>
                  <li>Using smelling salts or biting a lemon (only in severe cases)</li>
                  <li>Seeking medical attention if hiccups persist for more than 48 hours or interfere with sleep or eating.</li>
            </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={blood_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Low Blood Sugar</h2>
      <p className="bits_p">Low blood sugar, also known as hypoglycemia, occurs when the level of glucose in the blood drops below normal. This can lead to symptoms such as shakiness, sweating, and confusion.</p>
      
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
                  <li>Give the person a fast-acting source of sugar such as fruit juice, candy, or glucose tablets.</li>
                  <li> If the person is unconscious, do not give them anything to eat or drink.</li>
                  <li>If the person is able to swallow, have them slowly eat or drink something with sugar.</li>
                  <li> Once the person's blood sugar level returns to normal, give them a snack or meal to maintain their blood sugar level.</li>
                  <li>  Monitor the person's condition and watch for signs of improvement or worsening.</li>
                  <li> If the person's condition does not improve or they continue to have low blood sugar, seek medical attention.</li>
          
            </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={vic_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Vertigo</h2>
      <p className="bits_p">Vertigo is a type of dizziness where a person feels like they or their surroundings are spinning or moving, often caused by inner ear problems or neurological conditions.</p>
    
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
                  <li>Have the person sit or lie down immediately and avoid sudden movements.</li>
                  <li>Encourage slow, deep breathing to help calm the person and prevent hyperventilation.</li>
                  <li>Provide a cool, damp cloth to place on the forehead.</li>
                  <li>Help the person drink fluids, such as water, to prevent dehydration.</li>
                  <li>If symptoms persist, seek medical attention.</li>
                  <li>Offer emotional support and reassurance to the person experiencing vertigo.</li>
                  <li>If the person experiences severe dizziness, loss of consciousness or seizure-like symptoms, seek emergency medical attention.</li>
            </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={vomiting_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Vomiting</h2>
      <p className="bits_p">Vomiting is the forceful expulsion of stomach contents through the mouth. It can be caused by various factors such as food poisoning, infections, motion sickness, and many others.</p>
   
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
      <ul className='bits_solution'>
                  <li>Stay hydrated by drinking clear fluids like water or sports drinks.</li>
                  <li> Avoid solid foods until vomiting subsides.</li>
                  <li> If vomiting persists, try sucking on ice chips or taking small sips of clear liquids.</li>
                  <li>Rest in a cool and quiet place.</li>
                  <li>Avoid alcohol, caffeine, nicotine, and spicy or fatty foods.</li>
                  <li>If vomiting is severe or accompanied by severe abdominal pain, seek medical attention.</li>
                  <li>Follow the advice of your healthcare provider, including taking any prescribed medication.</li>
            </ul>
      </div>
      </div>
      <div className='Bits_Stings_main'>
      <div className='bits_part_1'>
      <div className='card_bits'>
      <div className='imgbx_bits'>
      <img className='img_bits' src={dir_img} alt="" />
      </div>
      <div className='bits_content_main'>
      <h2 className="bits_h2">Diarrhea</h2>
      <p className="bits_p">Diarrhoea is a condition characterized by the frequent passing of loose or watery stools. It is often caused by viral or bacterial infections, food intolerances, or certain medications.</p>
 
      </div>
      </div>
      </div>
      <div className='bits_part_2'>
      <h2 className='bits_solution_headre'>First Aid Solution</h2>
            <ul className='bits_solution'>
                  <li>Stay hydrated by drinking plenty of fluids such as water, clear broths, or fruit juices without pulp.</li>
                  <li>Avoid foods that are high in fat, fiber, or dairy, and stick to easily digestible foods such as rice, bananas, and toast.</li>
                  <li> Use oral rehydration solutions or electrolyte replacement drinks to restore lost fluids, salts, and minerals.</li>
                  <li>Practice good personal hygiene, such as washing hands thoroughly and frequently, to prevent the spread of infections.</li>
                  <li>Seek medical attention if symptoms persist for more than a few days, or if the person experiences severe dehydration, abdominal pain, or bloody diarrhea.</li>
            </ul>
      </div>
      </div>
      
      </div>
      <div><Footer/></div>
    </div>
  )
}
