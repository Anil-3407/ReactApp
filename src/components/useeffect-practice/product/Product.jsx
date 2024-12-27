import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Product = () => {
    let[products,setData]=useState([])
    useEffect(()=>{
        
        const response=axios.get("https://fakestoreapi.com/products").then((resp)=>{
           setData(resp.data)
        }).catch(
            (error)=>{
                alert("error")
                console.log(error)
            }
        )
        console.log
    },[])
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Product