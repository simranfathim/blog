import axios from "axios";

let url="http://localhost:7000";

const register=(formdata)=>{
    try{
        const res =axios.post(url+"/register",formdata)
        return res;
    }catch(e){
        console.log(e);
    }
}
const loginapi = (formdata)=>{
    try{
     const res=axios.post(url+"/login",formdata);
     return res
    }catch(e){
        console.log(e)
    }
}
export {register,loginapi};