import { commonAPI } from "./commonAPI"
import SERVER_URL from "./serverUrl" 

// Register API
export const registerAPI = async(user)=>{
   return await commonAPI("POST",`${SERVER_URL}/register`,user,"") 
}

// Login API
export const loginAPI = async(user)=>{
   return await commonAPI("POST",`${SERVER_URL}/login`,user,"")                   
} 

// wallpages 
export const getWallData = async(searchkey)=>{
   return await commonAPI("GET",`${SERVER_URL}/wallpages-data?search=${searchkey}`,"","")
}

// details
export const getDetails = async(id)=>{
   return await commonAPI("GET",`${SERVER_URL}/details-data/${id}`,"","") 
}







