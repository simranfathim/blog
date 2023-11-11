import axios from "axios";

let url="http://localhost:7000"

const addblogapi =(formdata)=>{
    try{
        const res=axios.post(url +`/addblog`,formdata);
        return res;
    }catch (e){
        console.log(e)
    }
}

const updateblog =(id,fdata)=>{
    try{
        const res=axios.patch(url+`/addblog/${id}`,fdata);
        return res;
    }catch(e){
        console.log(e)
    }
}
const deleteblog=(id)=>{
    try{
        const res =axios.delete(url +`/delete/${id}`);
        return res;
    }catch(e){
        console.log(e)
    }
}
export {addblogapi,updateblog,deleteblog}