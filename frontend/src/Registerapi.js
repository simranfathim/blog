import React, { useState } from 'react'
import {Userapi, register} from "./routes/Userapi"
import { Box, Button, TextField, Typography } from '@mui/material'

const Registerapi = () => {
  const [validationMessage, setValidationMessage] = useState("");
  const [formdata,setformdata]=useState({
    username:"",
    email:"",
    password:"",
    confirmpassword:"",
  })
  
  //onchnge //
   const onchangefd =(e)=>{
    let name =e.target.name;
    let value= e.target.value;
    setformdata((ps)=>({...ps,[name]:value}))
   
   }
   const  onsubmitform=async()=>{
    console.log("formdata",formdata)
    try {
      const res = await register(formdata);
      setValidationMessage("success");
    } catch (e) {
      console.log(e);
      setValidationMessage(e.response.data.message);
    }

  }  

  const onFormSubmit=(e)=>{
    e.preventDefault();
  }
    
  return (
    <div>
      {validationMessage === "success" ? (
        <p style={{ color: "green" }}>Registerd successfully please login !</p>
      ) : (
        <p style={{ color: "red" }}>{validationMessage}</p>
      )}
     <form onSubmit={onFormSubmit} >
       <Box maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
          backgroundColor="white"
       >
        <Typography variant="h3" padding={3}>Register</Typography>
        <TextField name="username"
            onChange={onchangefd}
            label={"username"}
            type={"username"}
            placeholder="username"
            margin="normal"></TextField>
        <TextField name="email"
            onChange={onchangefd}
            label={"email"}
            type={"email"}
            placeholder="Email"
            margin="normal"></TextField>
        <TextField name="password"
            onChange={onchangefd}
            label={"password"}
            type={"password"}
            placeholder="password"
            margin="normal"
        />
        <TextField name="confirmpassword"
            onChange={onchangefd}
            label={"confirmpassword"}
            type={"confirmpassword"}
            placeholder="confirmpassword"
            margin="normal"
        />
        <Button
            onClick={onsubmitform }
            sx={{ borderRadius: 3, marginTop: 3 }}
          
          >Register</Button>
       </Box>
      </form> 


    </div>
  )
}

export default Registerapi
