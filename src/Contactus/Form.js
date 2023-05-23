import { json } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useState } from 'react'
export default function Form() {
    const [form,setform] =useState({});
    const handleform =(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
       const response=await fetch('http://localhost:8080/demo',{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json();
        console.log(data);
    }
    const getuser=async()=>{
        const response=await fetch('http://localhost:8080/demo',{
            method:'GET',
        })
        const data=await response.json();
        console.log(data)
    }
    useEffect(()=>{
        getuser();
    },[])
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>

      <span>username</span>
        <input type="text" name='username' onChange={handleform} />
        <span>quarry</span>
        <input type="text" name='quarry' onChange={handleform} />
        <input type="submit" value="submit" />
      </form>

     
    </div>
  )
}
