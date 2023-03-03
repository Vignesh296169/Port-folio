import {  Paper } from "@mui/material";
import React from "react";
import projects from "../projectfile/Project.json";
import Projectitem from "./Projectitem";
import styles from "./List.module.css"
import { Container } from "@mui/system";

export default function ProjectList() {
  return (
    <Container>
    <ul  className={styles.gridd} style={{textAlign:"center",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4px"}}>
     
      {projects.projects.map((project) => {
        return (
          
              <Paper key={project.id} >
                <Projectitem value={project} />
              </Paper>
           
        );
      })}
      
    </ul>
    </Container>
  );
}
