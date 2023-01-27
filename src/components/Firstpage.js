// import React from 'react'; 
// import Paper from '@material-ui/core/Paper'; 
// import Grid from '@material-ui/core/Grid'; 
import '../App.css'; 
//import { useEffect, useState } from 'react'; 
import React from 'react'; 
 
import Dropdown from "./Dropdown"; 
import Apidata from "./Apidata"; 
 
 
     
 
export default function FirstPage() { 
 const options=[ 
     
        {value:"asce", label:"Ascending"}, 
        {value:"desc", lable:"Descending"}, 
        {value:"normal",lable:"Normal"}  
     
 ]; 
 
 
  return ( 
    <> 
    <div style={{width:"50%",alignItems:"center", margin:"10%"}}> 
    <Dropdown placeHolder="Select..." options={options} /> 
     
   </div> 
   <Apidata /> 
    </> 
  ); 
}