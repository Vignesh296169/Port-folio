import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Paper, styled, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import profile from "./Route/fgf.jpg"

import Face6RoundedIcon from '@mui/icons-material/Face6Rounded';

export default function Appbar() {
    const Stylebar=(styled)(AppBar)({
        backgroundColor:"#7b1fa2",
        color:"white",
        boxShadow: "20px white",
        borderBottom: "1px solid #000000",
       
    })
    const [isName,setName]=useState(false)
    const mosuehandler=()=>{
        setName(true)
    }
   const leavehandler=()=>{setName(false)}
       const date = new Date(); // Create a new Date object
const day = date.toLocaleString('en-US', { weekday: 'long' }); // Get the full name of the day

  return (
    <>
 <Stylebar color='secondary' position='sticky' sx={{borderRadius:".3rem",opacity:"0.9"}}>
   <Toolbar variant= 'regular' sx={{display:"flex",justifyContent:"space-between"}}>
    <Box>
      <Typography variant='h4' sx={{cursor:"pointer","&:hover":{color:"bisque"}}}>  Portfolio</Typography>
    </Box>
      <Box sx={{display:"flex",alignItems:"center",cursor:"pointer",position:"relative"}} >
        <Typography variant='h6' component="a" mx="1em" sx={{"&:hover":{color:"bisque"}}}>Projects</Typography> 
       <div onMouseEnter={mosuehandler} onMouseLeave={leavehandler}><Avatar alt="vignesh prfile" src={profile} /></div>
        {isName && <Box py={"2px"} px={"4px"}sx={{position:"absolute",textAlign:"center",top:"4rem",right:"3px",bgcolor:"gray",color:"lightgreen",borderRadius:".5rem"}}>
        Hello,I am Vignesh..  <Face6RoundedIcon sx={{position:"relative",top:"4px"}}/>
         </Box>}
      </Box>
   </Toolbar>
  
 </Stylebar>
  <Paper elevation={0} sx={{ml:"4px"}}><Box textAlign="center" fontSize="1.5em">{day}</Box></Paper>
 </>
  )
}
