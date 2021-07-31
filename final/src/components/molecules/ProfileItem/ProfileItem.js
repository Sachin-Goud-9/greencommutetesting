import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Icon from "@material-ui/core/Icon";
import { ListItemAvatar, StylesProvider, Typography } from "@material-ui/core";

import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import MyTypography from '../../atoms/MyTypography/MyTypography';
import MyImage from '../../atoms/MyImage/MyImage';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import customtheme from "../../theme";
import { grey } from "@material-ui/core/colors";
import clsx from "clsx";


export default function ProfileItem(){

    const useStyles = makeStyles((theme) => ({
        root: {
            display : 'inline-flex',
            paddingLeft:'500px'
        },
        arrowIcon : {
            paddingLeft : '10px',
            paddingRight : '20px'
        },
        subtitle22: {
            fontFamily: 'Montserrat',
            fontSize: '14px',
            fontWeight: 500,
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.29,
            letterSpacing: '0.1px',
            
        },
        iconStyle:{        
            width: '24px',
            height: '24px',  
        },
        imageIcon: {
            width:'40px',
            height:'40px'
        }
    }));

    const classes = useStyles();

    return (
        <ThemeProvider theme={ customtheme}>
        <div className={classes.root}>
            <ListItem>
                <ListItemIcon>
                    <MessageOutlinedIcon className = { classes.iconStyle} style = {{ color:'#9bbdcb'}} />
                </ListItemIcon>
                <ListItemIcon>
                    <NotificationsOutlinedIcon className = { classes.iconStyle } style = {{ color:'#9bbdcb'}}/>
                </ListItemIcon>
                <ListItemAvatar>
                    <MyImage 
                        style = {{ width: '40px', height: '40px'}}
                        src="https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/21469ead-aeb7-47f1-900e-6a85e9034b59-3x.png"
                        height="40px"
                        width="40px"
                        alt="PROFILE IMAGE"
                    />
                </ListItemAvatar>
                <ListItemText>
                    <Typography className = { classes.subtitle22 } style = {{ color: '#19293b'}}>Sara Joseph</Typography>
                </ListItemText>
                <ListItemIcon className={classes.arrowIcon}>
                    <KeyboardArrowDownIcon className = {clsx(classes.iconStyle)} style = {{ color: '#19293b'}}/>
                </ListItemIcon>
            </ListItem>
        </div>
        </ThemeProvider>
    );
}