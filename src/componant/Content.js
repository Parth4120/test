
import il from './health.jpg'
import './Cntent.css'

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

export default function Content() {
  
  const { t } = useTranslation(); 
  
    const [lang, setLang] = useState('');
  
    // This function put query that helps to 
    // change the language
   
  
  return (
    <div className="container mt-5 mb-5 health-awareness">
      <div className="img_box_1">
        <img src={il}  alt="" className="img_1"/>
      </div>
      <div className="text_box_1" >
        <p  className="text_1">
         <ul>
         <h1>{t('health')}</h1>
          <li className="word">{t('point_1')}</li>
          <li className="word">{t('point_2')}</li>
          <li className="word">{t('point_3')}</li>
         </ul>
        </p>
        
      </div>
    </div>
  )
}
