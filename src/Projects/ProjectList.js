import {  Paper } from "@mui/material";
import React from "react";
import projects from "../projectfile/Project.json";
import Projectitem from "./Projectitem";

import { Container } from "@mui/system";
import { motion } from "framer-motion";
export default function ProjectList() {
    const varian={
        hidden:{
            x:-100,
            opacity:0
        },visible:{
            y:10,
            x:0,
            opacity:1,
           

        }
    }
  return (
    <Container>
    <ul >
     
      {projects.projects.map((project) => {
        return (
               <motion.div key={project.id} variants={varian} initial="hidden" animate="visible" transition={{duration:".5"}}>
              <Paper  sx={{marginBottom:"3px"}}>
                <Projectitem value={project} />
              </Paper>
              </motion.div>
        );
      })}
      
    </ul>
    </Container>
  );
}
