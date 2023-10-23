"use client"

import React, { useContext } from 'react'
import { MyContext } from './Helper/Context'
import Nav from './Component/Nav'

const page = () => {

  const user =  useContext(MyContext)
  return (
    <>
    <Nav/>
    <h1>HELLO!!!!{user}</h1>

    </>
    )
}

export default page
