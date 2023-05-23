import React from 'react'
import './Content2.css'
import { Link } from 'react-router-dom'

export default function Content2() {
  return (
<>
<div className='all'>
<div className="c">
         <div className="l">
            <div className="plus"></div>
            <div className="plus1"></div>
         </div>
         <Link to="/Cuts_wounds" className="msg">Cuts And Wounds</Link>
         
    </div> 
<div className="c">
         <div className="l">
            <div className="plus"></div>
            <div className="plus1"></div>
         </div>
         <Link to="/Skin_burns" className="msg">Skin And Burns</Link>
    </div> 
</div>
<div className='all'>
<div className="c">
         <div className="l">
            <div className="plus"></div>
            <div className="plus1"></div>
         </div>
         <Link to="/Bits_Stings" className="msg">Bites And Stings</Link>
    </div> 
<div className="c">
         <div className="l">
            <div className="plus"></div>
            <div className="plus1"></div>
         </div>
         <Link to="/Lifesavingskill" className="msg">Life Saving Skills</Link>
    </div> 
</div>
<div className='all'>
<div className="c">
         <div className="l">
            <div className="plus"></div>
            <div className="plus1"></div>
         </div>
         <Link to="/Emergencycontacts" className="msg">Emergency Contacts</Link>
    </div> 
<div className="c">
         <div className="l">
            <div className="plus"></div>
            <div className="plus1"></div>
         </div>
         <Link to="/Do&Dont" className="msg">Natural Disasters</Link>
    </div> 
</div>
</>
  )
}






