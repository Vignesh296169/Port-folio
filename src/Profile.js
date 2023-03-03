import { Box, Container, Grid, Paper, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiFillBehanceCircle } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import{motion} from "framer-motion"

export default function Profile() {

  return (
    <motion.div initial={{y:"-90px"}} transition={{delay:".3",type:"spring",damping:"8"}} animate={{y:"0px"}}>
      <Container sx={{ padding: "2rem", mt: "5rem" }}>
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
                I am a newcomer to the development field, but I have worked hard
                to learn those skills. As a result of my coding abilities, I
                leave my works in the project section. I am eager to work with
                teams, contribute my skills, and continue to learn. Thank you
                for looking my portfolio!
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Link style={{ fontSize: "1.5rem" }} to="/skills">
          Skills
        </Link>
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
