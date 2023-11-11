import React, { useState } from 'react'
import { loginapi } from './routes/Userapi';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

const Login = () => {
  const [formdata,setformdata]=useState({email:"",password:""})
  const [vmessage,setvmessage]=useState("");
  const navigate=useNavigate();

  const onFormSubmit=(e)=>{
    e.preventDefault();
  }

  const onchangefd=(e)=>{
    try{
      let name=e.target.name;
      let value=e.target.value;
       setformdata((ps)=>({...ps,[name]:value}))
          }catch(e) {
            console.log(e)
          }
  }

  const onSubmitfd=async ()=>{
    try{
      const res=await loginapi(formdata);
      console.log(res.data.token)

      let tokencheck =res?.data?.token;
      if (tokencheck){
        navigate("/blog",{state:tokencheck});
      }else{
        navigate("/",{state:null});
      }
    }catch(e){
      console.log(e);
      setvmessage(e.response.data.message);
    }
  }
  return (
    <div>
      {/* <p style={{ color: "red" }}>{vmessage}</p> */}
     
      <form onSubmit={onFormSubmit}>
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
            <Typography variant="h3" padding={3}>Login</Typography>
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
         <Button
            onClick={ onSubmitfd}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >Login</Button>

        </Box>
      </form>
     </div>
    
  )
}

export default Login
