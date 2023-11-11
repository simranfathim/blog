import React, { useState } from 'react'
import Login from './Login'
import { useNavigate } from 'react-router-dom'
import Registerapi from './Registerapi'
import './page.css'
import { Typography } from '@mui/material'

const Page = () => {

  const [selectAcc,setselectAcc]=useState("login")
  const ondisplaytype = (type) =>{
    if (type  === "login"){
      setselectAcc("login")
    }else{
      setselectAcc("register")


    }
  }
  return (
    <div className='pagectn'>
      <Typography fontWeight={"bold"}
              padding={3}
              color="grey"
              variant="h3"
              textAlign={"center"}>Welcome to Blog </Typography>
      {selectAcc ==="login"?(
         <div className='userctn'>{/* <h1>hello page</h1> */}
         <Login/>
        <p>or</p>
        <p onClick={()=>ondisplaytype("register")} className='pck'>Create page</p>
      </div>
      ):(
        <div>
       <Registerapi/>
        <p>or</p>
         <p onClick={()=>ondisplaytype("login")}className='pck'>Already  have an login Account</p>
       </div>
      )}
    </div>
  ) 

   


    
      
        
   
      
}

export default Page 
