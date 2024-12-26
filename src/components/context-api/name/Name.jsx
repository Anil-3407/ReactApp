import React from 'react'
import { useState,useRef } from 'react'
import { myContextStore } from '../store/MyStore';
import Details from '../details/Details';
const Name = () => {
    let[data,setData]=useState();
    let inRef=useRef();
    const submitData=()=>{
        setData(inRef.current.value)
    }
  return (
    <div>
        <h2>Name component</h2>
        <input ref={inRef} type="text" placeholder='text here' />
        <button onClick={submitData}>submit</button>
        <myContextStore.Provider value={data}>
            <Details/>
        </myContextStore.Provider>
    </div>
  )
}

export default Name