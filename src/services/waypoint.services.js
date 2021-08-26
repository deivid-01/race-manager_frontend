import axios from 'axios'

import { API_URL } from "../config";

const BASE_URL=  API_URL+'/waypoints/';


export const deleteWaypoint = async (wpt)=>{
    try
    {
        await  axios.delete(BASE_URL+wpt.id);
        //Show success message
        console.log("Waypoint deleted");
    }
    catch(err)
    {
        console.log(err);
    }
 } 

export const updateWaypoint = async (wpt)=>{
    try
    {
       await  axios.put(BASE_URL+wpt.id,prepareWaypoint(wpt));
        //Show success message
        console.log("Waypoint updated");
    }
    catch(err)
    {
        console.log(err);
    }
 } 

export const createWaypoint = async (wpt)=>{
   try
   {
       await  axios.post(BASE_URL+wpt.id,prepareWaypoint(wpt));
       //Show success message
       console.log("Waypoint created");
   }
   catch(err)
   {
       console.log(err);
   }
}

const prepareWaypoint = (wpt) => {
    return {

        location: {
            type: wpt.type,
            coordinates:  [wpt.latitude, wpt.longitude]
                    },
        
        rule:{
            penalization: wpt.penalization,
            ratius: wpt.radius 
             }    

        }
}
