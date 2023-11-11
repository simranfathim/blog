import React from 'react'
import { useState } from 'react';
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography}from '@mui/material'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [value,setvalue]=useState();
  return (
   <AppBar position='sticky'
   style={{background:"radial-gradient(circle, rgba(238,174,202,1) 5%, rgba(158,148,233,1) 91%"}}>
    <Toolbar>
      <Typography variant="h3">
        Blog
      </Typography>
      <Box display="flex" marginRight="auto"marginLeft="auto">
      <Tabs textColor="inherit"
       variant='Primary'
       value={value}
       onChange={(e,val)=>setvalue(val)}>
        <Tab  LinkComponent={Link} to="/blog"label="Blogs"></Tab>
      </Tabs>
      </Box>
     
     <Box display="flex" marginLeft="auto">
      <Button LinkComponent={Link} to="/register" color='warning' sx={{borderRadius:15, margin:1}} variant='contained'>Register</Button>
      <Button LinkComponent={Link} to="/login"color='warning' sx={{borderRadius:15 ,margin:1}} variant='contained'>login</Button>
      <Button LinkComponent={Link} to="/"color='warning' sx={{borderRadius:15 ,margin:1}} variant='contained'>log out</Button>
     </Box>
    </Toolbar>
   </AppBar>
  )
}

export default Navbar

