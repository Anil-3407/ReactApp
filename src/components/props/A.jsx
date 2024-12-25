import React from 'react'
import { useState, useRef } from 'react'
import B from './B';
const A = () => {
    let [data, setData] = useState();
    let inputRef = useRef();
    console.log(data)
    const sendData = () => {
        setData(inputRef.current.value)
    }

    return (
        <div>
            <h2>A Component</h2>
            <input ref={inputRef} type="text" placeholder='text here' />
            <button  onClick={sendData}>Submit</button>
            <br />
            <hr />
            <br />
            <B abc={data}></B>
        </div>
    )
}

export default A