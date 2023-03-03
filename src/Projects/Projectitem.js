import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import React from "react";

export default function Projectitem({ value }) {
 
  return (
    <li >

        <Box sx={{p:"2rem", lineHeight:"2",textAlign:'center',}}>
           
          <Typography variant="h2" fontSize="35px" paddingBottom="4px" sx={{color:"#3E54AC"}}>
            {value.title}
          </Typography>
          
          <Typography variant="p">{value.description}</Typography>
          <Typography variant="p" >
            {" "}
            <a href={value.link ? value.link : ""} style={{color:"#95BDFF",fontWeight:"bolder"}}>Link</a>
          </Typography>

        </Box>
      
    </li>
  );
}
