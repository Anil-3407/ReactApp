import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <div className="nav">
           <div className="leftcontainer">
               <h2>React Routing Component</h2>
           </div>
           <div className="rightcontainer">
           <Link to="/">Home</Link>
           <Link to="/resume-upload">Resume Upload</Link>
            <a href="">Product</a>
            <a href="">Image</a>
            <a href="">Counter</a>
           </div>
        </div>
    </div>
  )
}

export default Nav

