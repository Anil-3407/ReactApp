import React from 'react'
import { useContext } from 'react'
import { myContextStore } from '../store/MyStore'
const Details = () => {
        let contextData=useContext(myContextStore)

  return (
    <div>
        <h2>Details Component</h2>
        <h4>value is here:{contextData}</h4>

    </div>
    
  )
}

export default Details