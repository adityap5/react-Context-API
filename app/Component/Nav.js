"use client"
import React, { useContext } from 'react'
import { MyContext } from '../Helper/Context'

const Nav = () => {
    const user =useContext(MyContext)
  return (
   <>
   <div className="navbar">
 {user}
   </div>
   </>
  )
}

export default Nav
