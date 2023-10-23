"use client"
import React, { createContext } from 'react'
export const MyContext = createContext()
              
const Context = ({children}) => {
    const usrename = "Bhatura IS BEST!!"
  return (
    <div>
      <MyContext.Provider value = {usrename}>
             {children}
      </MyContext.Provider>
    </div>
  )
}

export default Context
