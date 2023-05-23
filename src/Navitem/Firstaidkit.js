import React from 'react'
import Footer from '../componant/Footer'
import Navbar from '../componant/Navbar'
import './Firstaidkit.css'

export default function Firstaidkit() {
  return (
    <div>
    <div><Navbar/></div>
    <div style={{width:"100%"}}> 
      <section className='firstaidkit'><h1 className='firstaidkit_header'>FIRST AID KIT</h1></section>
      </div>
      <div className='container firstaidkit_content' >
          <h2 className='firstaidkit_heading' >What is First Aid Kit ?</h2>
          <p className='firstaidkit_p' >A first aid kit is a collection of supplies and equipment used to provide medical treatment in the event of an emergency or injury.</p>
          <h2 className='firstaidkit_heading'>well-stocked first aid kit should include the following items ?</h2>
          <li className='firstaidkit_p' >Adhesive bandages of various sizes</li>
          <li className='firstaidkit_p' >Sterile gauze pads and adhesive tape</li>
          <li className='firstaidkit_p' >Antiseptic wipes or solution</li>
          <li className='firstaidkit_p' > Sterile saline solution for wound irrigation</li>
          <li className='firstaidkit_p' >Tweezers and scissors</li>
          <li className='firstaidkit_p' >Disposable gloves</li>
          <li className='firstaidkit_p' >Instant cold packs</li>
          <li className='firstaidkit_p' >Hydrocortisone cream or other anti-itch ointment</li>
          <li className='firstaidkit_p' >Pain relievers such as acetaminophen or ibuprofen</li>
          <li className='firstaidkit_p' > Any necessary prescription medications</li>
          <li className='firstaidkit_p' > First aid manual or guide</li>
          <h2 className='firstaidkit_heading' >How To Maintain and Assemble First Aid Kit ?</h2>
          <p className='firstaidkit_p' >To assemble a first aid kit, start by purchasing a durable container with a secure lid, such as a plastic or metal box. Label the container clearly as a first aid kit, and keep it in a cool, dry place that is easily accessible in case of an emergency. When adding items to your kit, consider any specific health needs or conditions of those who will be using it.</p>
          <p className='firstaidkit_p' >It is important to regularly check and maintain your first aid kit to ensure that all items are in good condition and not expired. Replace any used or expired items, and check the kit's contents at least once every six months.</p>
          <p className='firstaidkit_p' >Remember that a first aid kit is not a substitute for professional medical care, and in the case of a serious injury or medical emergency, you should seek immediate medical attention.</p>
      </div>
      <div><Footer/></div>
    </div>
  )
}
