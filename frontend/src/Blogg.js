import React from 'react'
import { deleteblog } from "./routes/Blogapi";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';

 
const Blogg = () => {
    const location =useLocation();
    const navigate =useNavigate();
    const [token,settoken]=useState(location?.state);
    const [blogsdata,setblogsdata]=useState([]);
     console.log(token,"1")
    const getAllblog=async ()=>{
        try{
            if(token ==null){
                navigate("/",{state:null});
            }else{
                const res=await axios.get("http://localhost:7000/blog", {
                    headers:{
                        "X-Token":token,
                       },
                })
                setblogsdata(res.data);
            }
        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        getAllblog();
    },[token]);

    const onCreateblog=()=>{
        navigate("/addblog",{state: token})
    }
   const ondeleteblog =async (id)=>{
    try{
        const res=await deleteblog(id);
        console.log("respond",res)
        if(res.data.message ==="blog is deleted"){
            
            navigate("/blog",{state: token})
        }
    }catch (e){
        console.log(e)
    }
   }
   const editblog =(x)=>{
    let action ="update"
    navigate("/addblog",{state:[x,action,token]})
    console.log(x,action,token,"token")
   
   };
   return(
    <div >
      <nav className="navContainer">
      <Button onClick={onCreateblog} sx={{ mt: 2, borderRadius: 4 }}
              variant="contained"
              color="info"
              type="submit" >CreateBlog</Button> 
        {/* <p onClick={onCreateblog} className="navItems m-2">
          Create Blog
        </p> */}
        {/* <p onClick={() => settoken(null)} className="navItems m-2">
          Log out
        </p> */}
      </nav>
      {blogsdata?.map((x)=>{
        return(
          
         <div>
            {""}
        <Box display={'flex'}
         ><IconButton sx={{marginLeft:"auto"}}onClick={() => editblog(x)}></IconButton>
            <Box>

            </Box>
          <Card sx={{ width:"60%",margin:"auto",mt:2,padding:2,boxShadow:"5px 5px 10px #ccc"}}>
           <CardMedia
          sx={{ height: 140 }}
          image={x.image}
        
          />
         <CardContent>
         <Typography gutterBottom variant="h5" component="div">
         {x.title}
         </Typography>
         <Typography variant="body2" color="text.secondary">
         {x.description}
         </Typography>
         </CardContent>
         <CardActions>
         <Button size="small"color='warning'sx={{borderRadius:15 ,margin:1}} variant='contained' onClick={() => editblog(x)}>Edit</Button>
         <Button size="small"color='warning'sx={{borderRadius:15 ,margin:1}} variant='contained' onClick={() =>  ondeleteblog (x?._id)}>Delete</Button>
         </CardActions>
         </Card>
       </Box>
    </div>


        )
   
     })}
    </div>)
}

export default Blogg
