import axios from 'axios';

import { API_URL } from "../config";

const BASE_URL=  API_URL+'/admins';


export  const createUser = async (signupData) =>{
    try
    {
       await axios.post(BASE_URL,signupData)
     
    }
    catch(err)
    {
     console.log(err)
    }
 }

export const login =async (loginData) => {
    try{
      const res = await axios.post(  BASE_URL+'/login',loginData)          
        return res.data;

    }
    catch(err)
    {
   
    }
  }