import * as React from "react";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import IconButton from '@mui/material/IconButton';
import { blue } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Navigate } from "react-router-dom";

export default function ButtonAppBar() {
  const fontSizeText = 18
  const context = useContext(UserContext)
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open);
  };

  const profileTitles = [["Profile", <AccountCircleIcon />], ["Settings", <SettingsIcon />]].map((title) =>
    <ListItemButton disabled>
      <ListItemIcon sx={{ minWidth: "35px" }}>
        {title[1]}
      </ListItemIcon>
      <ListItemText primary={title[0]} />
    </ListItemButton>
  )

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static" sx={{ paddingX: 10, borderRadius: "4px", background: blue[500] }}>
        <Toolbar>
          <Button href="/" color="inherit" sx={{ fontSize: fontSizeText }}>Home</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          {context?.isAuthorized ?
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar>{context?.user?.username[0].toUpperCase()}</Avatar>
                <IconButton sx={{ color: "white" }} size="small" onClick={handleClick}>
                  {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </IconButton>
              </Box>
              <Collapse in={open} timeout="auto" unmountOnExit sx={{ position: "absolute", color: 'black', width: "150px" }}>
                <List component="div" sx={{ background: grey[200], borderRadius: "4px", mt: "4px", border: 1, borderColor: 'grey.700', }} disablePadding>
                  <ListItem>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <Avatar sx={{ width: 24, height: 24 }}>{context?.user?.username[0].toUpperCase()}</Avatar>
                    </ListItemIcon>
                    <ListItemText primary={context?.user?.username} />
                  </ListItem>
                  <Divider variant="middle" />
                  {profileTitles}
                  <Divider variant="middle" />
                  <ListItemButton href="logout">
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Box> :
            <Button href="/login" color="inherit" sx={{ fontSize: fontSizeText }}></Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}