import axios from 'axios';
import { API_URL } from "../config";

const BASE_URL=  API_URL+'/categories';


export const getCategory= async(category_id)=>{
  
  
  try
  {
    const  res =await  axios.get(`${BASE_URL}/${category_id}`)
    return   res.data
    
  }
  catch(err)
  {
    console.log(err)
  }

}
export const deleteCategory= async(category_id)=>{
  
  try
  {
    await  axios.delete(`${BASE_URL}/${category_id}`)    
  }
  catch(err)
  {
    console.log(err)
  }

}