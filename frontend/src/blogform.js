import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addblogapi } from "./routes/Blogapi";
import { updateblog } from "./routes/Blogapi";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";




const CreateBlog=()=>{
    const navigate= useNavigate(); 
   
    const location=useLocation();
    const [token,settoken]=useState(location.state)
    
   
    // console.log("LOCATION DATA",location.state)
    let actionCheck=
    location.state && location.state[1]=="update"
    ? "update Blog"
    :"addblog";
    
   
    const[fdata,setfdata]=useState({
        title:"",
        description:"",
        image:""

    })

    const changeblog=(e)=>{


          const name=e.target.name;
          const value=e.target.value;
            setfdata((ps)=>({...ps,[name]:value}))
        
    };
    const actionCheckFun = () => {
        if (location.state && location.state[1] === "update") {
          document.getElementById("title").value = location.state[0].title;
          document.getElementById("description").value =  location.state[0].description;
          document.getElementById("image").value =
            location.state[0].image;
          setfdata({
            title: location.state[0].title,
            description: location.state[0].description,
            image: location.state[0].image
           

          });
         
        }
      };
      useEffect(()=>{
        actionCheckFun();
      },[])

    const postBlog=async()=>{
     try{
        if(actionCheck =="addblog"){
            await addblogapi(fdata)
            navigate("/blog",{state:token})
            console.log(token,"checkk")
        }else {
            const reqId = location.state[0]._id;
            const res = await updateblog(reqId, fdata);
            console.log(res.data,"data")
          
            if (res.data.m === "updated") {
              navigate("/blog", { state: location.state[2] });
              
              
            }
        }
     }catch (e){
        console.log(e)
       
     }
    
    }
    const onBlogSubmit = (e) => {
        e.preventDefault();
        
      };
      const dipsplayBlog = () => {
        if (token === null) {
          navigate("/", { state: null });
        }
      };
      useEffect(() => {
        dipsplayBlog();
      }, [token]);
    return(
        <div>
         <form onSubmit={onBlogSubmit}>
            <Box
            border={3}
            borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
            borderRadius={10}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin={"auto"}
            marginTop={3}
            display="flex"
            flexDirection={"column"}
            width={"80%"}>
               <Typography
              fontWeight={"bold"}
              padding={3}
              color="grey"
              variant="h3"
              textAlign={"center"}
            >
              Post Your Blog
            </Typography>
           <InputLabel>Title</InputLabel>
           <TextField
           name="title"
           type="text"
           id="title" onChange={changeblog}/>
           <InputLabel>Description</InputLabel>
           <TextField
           name="description"
           type="text"
           id="description" onChange={changeblog}/>
           <InputLabel>Image URL</InputLabel>
            <TextField
           name="image"
           type="text"
           id="image" onChange={changeblog}/>

            <Button onClick={postBlog} sx={{ mt: 2, borderRadius: 4 }}
              variant="contained"
              color="warning"
              type="submit" >{actionCheck}</Button>  
            </Box>
         </form>
        </div>
    )
}
export default CreateBlog;