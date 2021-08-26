import axios from "axios";
import { API_URL } from "../config";

const BASE_URL=  API_URL+'/results';




export const getResults = async (stage_id,category_id) => {
    try
    {
     
        const res = await axios.get(`${BASE_URL}/stage/${stage_id}/${category_id}`)
        
        return res.data;
    }
    catch(err)
    {
        console.log(err);
    }

  }

  export const getResultsByCategory = async (category_id) => {
    try
    {
        const res = await axios.get(`${BASE_URL}/category/${category_id}`)   
        return res.data;
    }
    catch(err)
    {
        console.log(err);
    }
  }


