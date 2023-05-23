import React from 'react'
import Navbar from '../componant/Navbar'
import Footer from '../componant/Footer'

import '../Disease_type/Infectious.css'
import yy from '../Disease_type/img_1.jpg'
import uu from '../Disease_type/br_1.jpg'
import { Link } from 'react-router-dom'

export default function Disease() {
  return (
    <div>
      <div><Navbar/></div>
      <div className="container">
     <div className='first_infectious_row'>
      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={yy} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Infectious diseases</h2>
      <p className="infectious_p">Infectious diseases are caused by pathogens such as bacteria, viruses, fungi, and parasites, and can be transmitted from person to person through various modes of transmission such as air, water, food, or bodily fluids</p>
      <Link className='infectious_a' to="/Infectious_disease">First aid Solution</Link>
      </div>
      </div>

      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={uu} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Breathing Problems</h2>
      <p className="infectious_p">Breathing diseases, also known as respiratory diseases, affect the lungs and respiratory system, causing symptoms such as coughing, wheezing, and shortness of breath.</p>
      <Link className='infectious_a' to="/breathing">First aid Solution</Link>
      </div>
      </div>


      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={yy} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Cuts and Wounds</h2>
      <p className="infectious_p">Cuts and wounds are injuries to the skin that can occur due to accidents or trauma. These injuries can vary in severity, from minor cuts and scrapes to deeper wounds that require medical attention.</p>
      <Link className='infectious_a' to="/Cuts_wounds">First aid Solution</Link>
      </div>
      </div>
      </div>

      <div className='first_infectious_row'>
      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={uu} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Bites and Stings</h2>
      <p className="infectious_p">Bites and stings from animals, insects, and other organisms can cause various degrees of pain, swelling, and allergic reactions. Proper prevention measures, such as avoiding contact with potentially harmful animals.</p>
      <Link className='infectious_a' to="/Bits_Stings">First aid Solution</Link>
      </div>
      </div>

      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={yy} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Skin and Burns</h2>
      <p className="infectious_p">Skin and burn injuries are damage to the skin that can occur due to various reasons such as heat, chemicals, radiation, or friction. These injuries can range from mild sunburns to severe burns that can be life-threatening and require immediate medical attention.</p>
      <Link className='infectious_a' to="/Skin_burns">First aid Solution</Link>
      </div>
      </div>


      <div className='card_infectious'>
      <div className='imgbx'>
      <img className='brathing_infectious' src={uu} alt="" />
      </div>
      <div className='infectious_content_main'>
      <h2 className="infectious_h2">Bones and joints Problem</h2>
      <p className="infectious_p">Bones and joint injuries can occur due to accidents or overuse, causing damage to the bones, joints, or surrounding tissues. These injuries can range from minor sprains and strains to fractures and dislocations.</p>
      <Link className='infectious_a' to="/Bones_joint">First aid Solution</Link>
      </div>
      </div>
      </div>
      <div><Footer/></div>
    </div>
    </div>
  )
}
