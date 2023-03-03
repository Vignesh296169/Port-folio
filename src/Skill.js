import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CodeIcon from "@mui/icons-material/Code";
import CssIcon from "@mui/icons-material/Css";
import { DiReact } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { SiAdobephotoshop} from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import JavascriptIcon from '@mui/icons-material/Javascript';

export default function Skill() {
  return (
    
    <Container sx={{marginTop:"2rem"}}> 
    <List sx={{ bgcolor: "background.paper",display:"grid",gridTemplateColumns:"1fr 1fr",borderRadius:"10px"}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
           <SiAdobephotoshop/> 
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary="PHOTO-SHOP" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CodeIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary="HTML" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CssIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary="CSS" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
           
            <JavascriptIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary="Java-script" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DiReact />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary="REACT-JS" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SiRedux />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary="REDUX-TOOLKIT" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
           <BsGithub />
          </Avatar>
        </ListItemAvatar>
       
        <ListItemText primary="GIT/GIT-HUB" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
           <SiTailwindcss />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary="TAILWIND" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
           <SiMaterialui />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary="MATERIAL-UI" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
           <SiMongodb />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary="MONGO-DB" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
         
         <SiNodedotjs />
          </Avatar>
        </ListItemAvatar>

        <ListItemText primary="NODE-JS" />
      </ListItem>
    </List>
     <Link to="/" style={{background:"#865DFF",position:"relative",left:"25rem",color:"white",top:"1rem"}}>HOME</Link>
    </Container>  
  );
}
