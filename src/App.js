import React from 'react'
import { useState } from 'react'

function App() {
  const [userInfo,setUserInfo]=useState({
    firstName:"",
    lastName:"",
    email:"",
    dob:"",
    gender:"",
  });

  const [prompts,setPrompts]=useState([{
      prompt:"",
      answer:"",
      timestamp:new Date().getTime()
    }])

  console.log(userInfo);

  const handleInput=e=>{
    const{name,value}=e.target;
    setUserInfo({
      ...userInfo,
      [name]:value
    });
  }

  const handlePrompt=(e,i)=>{
    const {name,value}=e.target;
    let newPrompts={...prompts};
    newPrompts[i][name]=value;
    setPrompts(newPrompts);
  }

  const handleAddPrompt=()=>{
    setPrompts([...prompts,{
      prompt:"",
      answer:"",
      timestamp:new Date().getTime()
    }])
  }
  return (
    <>
      <h1 className='text-3xl text-center my-4 py-2'
      >React Form 1</h1>
      <form className='w-5/6 max-w-xl mx-auto pt-4 pb-10'>
        <fieldset className='flex flex-col gap-2 border py-1 px-4'>
          <legend className='text-2xl font-semibold mb-2 text-gray-400'>About You</legend>
          <div>
          <label className='text-3xl font-semibold'>What's your name?</label>
          <input
            className='w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-7 focus:outline-indigo-200'
            id='firstName'
            name='firstName'
            type='text'
            placeholder='First name'
            onChange={handleInput}
          />
          <input
            className='w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-7 mb-3 focus:outline-indigo-200'
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Last name'
            onChange={handleInput}
          />
          </div>
          <div>
          <label className='text-3xl font-semibold'>What's your email?</label>
          <input
            className='w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-7 mb-3 focus:outline-indigo-200'
            id='email'
            name='email'
            type='email'
            placeholder='Email'
            onChange={handleInput}
          />
          </div>
          <div>
          <label className='text-3xl font-semibold'>What's your date of birth?</label>
          <input
            className='w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-7 mb-3 focus:outline-indigo-200'
            id='dob'
            name='dob'
            type='date'
            max='2006-01-01'
            placeholder='Date of birth'
            onChange={handleInput}
          />
          </div>
          <div>
            <label className='text-3xl font-semibold'>What's your gender?</label>
            <select 
              className='w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-7 mb-3 focus:outline-indigo-200 block'
              id='gender' name='gender' onChange={handleInput}
            >
              <option>Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
        </fieldset>
        <fieldset className='flex flex-col gap-2 border py-1 px-4'>
          <legend className='text-2xl font-semibold mb-2 text-gray-400'>Prompts</legend>
          {prompts.map((prompt,i)=>(
            <div key={prompt.timestamp}>
            <label>Select a prompt</label>
            <select className='w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-7 mb-3 focus:outline-indigo-200 block'
            id='prompt1' name='prompt1'
            onChange={e=>handlePrompt(e,i)}>
              <option value='Dating me is like...'>Dating me is like...</option>
              <option value='Fact about me that surprises people:'>Fact about me that surprises people:</option>
              <option value='I want someone who...'>I want someone who...</option>
              <option value='I spend most of my money on:'>I spend most of my money on:</option>
              <option value='The most spontaneous thing I have done:'>The most spontaneous thing I have done:</option>
              <option value="We're the ame type of weird if...">We're the ame type of weird if...</option>
            </select>
            <textarea
              className='w-full border border-dashed py-3 px-2'
              id='answer1'
              name='answer1'
              rows={5}
              placeholder='Let your true colors shine through'
              onChange={e=>handlePrompt(e,i)}
            />
          </div>
          ))}
          
          <div>
            <button
              className='border bg-indigo-400 py-1 px-2 rounded-lg text-white font-bold text-xl'  
              type='button'
              onClick={handleAddPrompt}
            >
              Add Prompt
            </button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default App
