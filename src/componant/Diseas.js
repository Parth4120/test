
import React from 'react'

import './Diseas.css'
import {Link } from 'react-router-dom'

export default function Diseas() {
 
  
  return (
    <>
      <div classNameName='container' id='alldisease' >
     <Link to="/Infectious_disease">
    <div className='diseas-1' >
      <div>
        <Link to="/Infectious_disease" className='diseas-box-1' >INFECTIOUS DISEASES</Link>
      </div>
      
    </div>
    </Link>
    <Link to="/breathing">
    <div className='diseas-2' >
    <p to="/breathing" className='diseas-box-2'>BREATHING PROBLEMS </p>
    </div>
    </Link>
    <Link to="/Bones_joint">
    <div className='diseas-3' >
    <Link to="/Bones_joint" className='diseas-box-3' >BONES AND JOINT PROBLEMS</Link>
    </div>
    </Link>
    <Link to="">
    <div className='diseas-4' >
    <Link to="/Common_Disease" className='diseas-box-4' >COMMON DISEASES</Link>
    </div>
    </Link>
    </div> 




       
     </>
  )
}





