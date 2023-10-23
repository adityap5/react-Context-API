"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext } from 'react'
import { MyContext } from './Helper/Context'
import Nav from './Component/Nav'

const page = () => {
const notify = ()=>{
  toast.success('Login Done!!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
 
}
  const user =  useContext(MyContext)
  return (
    <>
    <Nav/>
    <div>
    <button onClick={notify}>Login</button>
   <ToastContainer/>
    </div>
 
    </>
    )
}

export default page
