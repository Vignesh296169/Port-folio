import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiFillBehanceCircle } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.div
      initial={{ y: "-90px" }}
      transition={{ delay: ".3", type: "spring", damping: "8" }}
      animate={{ y: "0px" }}
    >
         
      <Container sx={{ padding: "2rem", mt: "5rem" }}>
      <Link style={{ fontSize: "1.5rem" ,textDecoration:"underline"}} to="/skills">
          Skills
        </Link>
        <Paper sx={{ px: "3rem", py: "2rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                textAlign="center"
                borderBottom={"1px solid gray"}
                variant="h4"
                component="h1"
              >
                I am Vignesh
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                sx={{ fontSize: "1.5rem", fontStyle: "initial" }}
              >
                Hello and welcome to my portfolio! , I am excited to share my
                journey with you and demonstrate my skills and experiences. I
                hope to demonstrate my passion, dedication, and growth in the
                development field through this portfolio. I hope you enjoy my
                work. Thank you for taking the time to look over my portfolio!
              </Typography>
            </Grid>
          </Grid>
        </Paper>

     
      </Container>
      <Container>
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <a href="https://github.com/Vignesh296169">
            {" "}
            <BsGithub style={{ fontSize: "2rem", color: "#4D455D" }} />
          </a>
          <a href="https://www.behance.net/vignesh296169">
            {" "}
            <AiFillBehanceCircle
              style={{ fontSize: "2rem", color: "#3E54AC" }}
            />
          </a>
          <a href="mailto:vignesh296169@gmail.com">
            {" "}
            <SiGmail style={{ fontSize: "2rem", color: "#EB455F" }} />
          </a>
        </Box>
      </Container>
    </motion.div>
  );
}
