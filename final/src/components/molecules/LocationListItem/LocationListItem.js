import React from "react";
import {
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";

import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MyTypography from "../../atoms/MyTypography/MyTypography";
import customtheme from "../../theme";
import { RoomOutlined } from "@material-ui/icons";
import CustomisedIcon from "../../atoms/icons/CustomisedIcon";



const useStyles = makeStyles((theme) => ({
  root: {
      display : 'inline-flex',
      flexDirection : 'row',
      alignItems : 'center',
  },
  typoStyle : {
    textOverflow : 'ellipsis',
    overflow : 'hidden'
  },
  outlinedIcon: {
    padding: "0px 0px 0px 20px",
    width: '24px', height:'24px', color: '#9bbdcb'
  },
}));


export default function LocationListItem({ locationName }){
  // const locationName = props.locationName

const classes = useStyles();

  return (
    <ThemeProvider theme= { customtheme }>
    <div className={classes.root}>
      <ListItem>
        <ListItemIcon>
        {/* <CustomisedIcon icon = { */}
          <RoomOutlined className = {classes.outlinedIcon}/>
        </ListItemIcon>
        <Typography variant = "subtitle1" className={classes.typoStyle}>{locationName}</Typography>
      </ListItem>
    </div>
    </ThemeProvider>
  );
}