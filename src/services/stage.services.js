import axios from 'axios';

import { API_URL } from "../config";

const BASE_URL=  API_URL+'/stages';




export const getPartialResultsFromStageByCategory = async(stage_id,categorytype_id) => {

      
    try
    {
      const  res =await  axios.get(`${BASE_URL}/${stage_id}/${categorytype_id}`)
      
      var stage = res.data
      return stage.partialresults;

    }
    catch(err)
    {
      console.log(err)
    }
  }

export const getStage = async(stage_id)=>{
  
  try
  {
    const  res =await  axios.get(`${BASE_URL}/${stage_id}`)
    return   res.data
    
  }
  catch(err)
  {
    console.log(err)
  }
}

  
  export const deleteStage = async(stage_id)=>{
  
    try
    {
      await  axios.delete(`${BASE_URL}/${stage_id}`)
      
    }
    catch(err)
    {
      console.log(err)
    }
  
  }