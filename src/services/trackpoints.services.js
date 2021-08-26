import axios from 'axios'
import { API_URL } from "../config";

const BASE_URL=  API_URL+'/trackpoints';



export const uploadTrackpoints = async(partialResult_id,file) => {

    const formData = new FormData();

    formData.append('file',file);
    formData.append('partialresult',partialResult_id);
    try
    {
      await axios.post(BASE_URL+'/file',formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }  
      });
    }
    catch(err)
    {
            
       console.log(err)
          
    }
 

  }

export const getTrackpoints =  async(competitor_id) =>
{
  try
  {
      const res = await axios.get(`${BASE_URL}/${competitor_id}`)
     
      return res.data
  
  }
  catch ( err)
  {
      console.log(err)
  }
}

