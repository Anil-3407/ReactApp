import React from 'react'
import A from '../props/A'
import "./home.css"
import Name from '../context-api/name/Name'
import Details from '../context-api/details/Details'
import Product from '../useeffect-practice/product/Product'
const Home = () => {
  return (
    <div className='home'>
        <h2>Home Component</h2>
        
        <Product/>
      
    </div>
  )
}

export default Home