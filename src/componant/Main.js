import React, { Suspense } from 'react'
import Carousel from './Carousel'
import Content from './Content'
import Content1 from './Content1'
import Diseas from './Diseas'
import Footer from './Footer'
import Navbar from './Navbar'
import Content2 from './Content2'
import Chatbot from './Chatbot'
import '../I18n.js'

export default function Main() {
  return (
    <div className='container'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Carousel/>
      </div>
      <div >
        <Diseas/>
      </div>
     <div>
      <Suspense fallback="...loading"><Content/>
      <div><Content1/></div>
   <div><Content2/></div>
   <div><Footer/></div>
      </Suspense>
      </div>
   
    
   {/* <div><Chatbot/></div> */}
 
    </div>
  )
}
