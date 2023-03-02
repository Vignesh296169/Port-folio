import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
  import { Link } from 'react-router-dom'
  import { BsGithub } from "react-icons/bs";
  import { AiFillBehanceCircle } from "react-icons/ai";
  import { SiGmail} from "react-icons/si";
export default function Profile() {



  return (
      <div >
        
      <Container sx={{padding:"2rem",mt:"5rem"}}>
   
     
      <Paper sx={{px:"3rem",py:"2rem"}}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
       <Typography textAlign="center" borderBottom={"1px solid gray"} variant='h4' component="h1">I am Vignesh</Typography>
       </Grid >
       <Grid item xs={12}>
      
        <Typography variant='h6' sx={{fontSize:"1.5rem",fontStyle:"initial"}}>Hello and thank you for visiting my portfolio! As a developer, I'm eager to demonstrate my abilities, projects, and knowledge of various programming languages and frameworks. Examples of my coding abilities can be found in my portfolio.
     
      </Typography>
        </Grid>  
        </Grid>
      </Paper>
       
         <Link style={{fontSize:"1.5rem"}} to="/skills">Skills</Link>  
        
      </Container>
      <Container >
        <Box sx={{display:"flex",gap:"2rem"}}>
      <a href='https://github.com/Vignesh296169'>   <BsGithub style={{fontSize:"2rem",color:"#4D455D"}} /></a>
      <a href='https://www.behance.net/vignesh296169'>   <AiFillBehanceCircle style={{fontSize:"2rem",color:"#3E54AC"}} /></a>
      <a href='mailto:vignesh296169@gmail.com'>   <SiGmail style={{fontSize:"2rem",color:"#EB455F"}} /></a>
      </Box>
      </Container>


      </div>
  )
}
