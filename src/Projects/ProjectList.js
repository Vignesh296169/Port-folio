import {  Paper } from "@mui/material";
import React from "react";
import projects from "../projectfile/Project.json";
import Projectitem from "./Projectitem";

import { Container } from "@mui/system";

export default function ProjectList() {
  return (
    <Container>
    <ul >
     
      {projects.projects.map((project) => {
        return (
          
              <Paper key={project.id} sx={{marginBottom:"3px"}}>
                <Projectitem value={project} />
              </Paper>
           
        );
      })}
      
    </ul>
    </Container>
  );
}
