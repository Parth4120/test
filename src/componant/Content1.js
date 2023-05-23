
import im from './firstaid.webp'
import './Content1.css'

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'
  
  
// Contains the value and text for the options
const languages = [
    { value: '', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'hi', text: "Hindi" },
    { value: 'bn', text: "Bengali" },
    { value: 'gu', text: "Gujarati" }
]
export default function Content1() {
  const { t } = useTranslation(); 
  
    const [lang, setLang] = useState('');
  
    // This function put query that helps to 
    // change the language
    const handleChange = e => { 
        setLang(e.target.value);
        let loc = "34.131.202.34";
        window.location.replace(loc + "?lng=" + e.target.value);
    }
  return (
    
      <div className="container first-aid-kit" >
      <div className='img_box_2'>
        <img className='img_2' src={im} alt="" />
      </div>
      <div className='text_box_2'>
        <p className='text_2'>
        
         <ul>
         <h1>{t('firstaidawarness')}</h1>
          <li className="word">{t('awarness_1')}</li>
          <li className="word">{t('awarness_2')}</li>
          <li className="word">{t('awarness_3')}</li>
         </ul>
        </p>
       
      </div>
    </div>
    
  )
}
