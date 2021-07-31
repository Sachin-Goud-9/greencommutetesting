import React from "react";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MyTypography from "../../atoms/MyTypography/MyTypography";
import MyImage from '../../atoms/MyImage/MyImage';
import CloseIcon from '@material-ui/icons/Close';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Grid, Typography } from "@material-ui/core";
import customtheme from "../../theme";
import clsx from "clsx";
import LocationListItem from "../LocationListItem/LocationListItem";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { RoomOutlined } from "@material-ui/icons";
// import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'inline-flex',
        width : '390px',
        flexDirection : 'column',
        alignItems: 'left'
    },
    headerDiv : {
        display : 'inline-flex',
        flexDirection : 'row',
        gap : '10px',
        // padding : '3%',
        // textAlign: 'left'
    },
    imageDiv : {
        padding : '5% 5% 5% 0',
    },
    listItemDiv : {
        display : 'flex',
        flexDirection : 'column',
        gap : '10px',
        width : '330px'
    },
    innerListItemDiv : {
        display : 'inline-flex',
        // flexDirection : 'row',
        alignItems : 'center',
        width: '330px',
        height: '50px',
        // margin: 19.8px 30px 10px;
        // padding: 13px 20px;
        // marginTop: '19.8px',
        // marginLeft: '30px',
        // marginRight: '30px',
        // marginBottom: '10px',
        borderRadius: '10px',
    },
    innerListItemDivStyling : {
        backgroundColor : '#e3f3f6',
        borderRadius : '10px',
    },
    typographyHeaderStyle : {
        color : '#19293b',
    },
    hide : {
        overflow : 'hidden',
        textOverflow : 'ellipsis'
    },
    srcLocationDiv : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        padding : '2% 5% 3% 5%'
    },
    locationTypo : {
        // padding : '2% 5% 0 4%'
        paddingLeft: '8px',
        color: '#19293b',
    },
    subtitle22:{
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.29,
        letterSpacing: '0.1px',
    },
    backArrowOutlinedIcon: {
        width: '24px',
        height: '24px',
        marginTop: '0px 8px 20px 30px',
    },
    closedOutlinedIcon: {
        margin: '0 0 0 10px',
        width: '24px', height:'24px', color: '#9bbdcb'
    },
    outlinedIcon: {
        padding: "0px 0px 0px 20px",
        width: '24px', height:'24px', color: '#9bbdcb'
    },
    circleIcon: {
        width: '16px',
        height: '24px',
        marginRight: '8px'
    },
    locationOutlinedIcon: {
        width: '16px',
        height: '24px',
        color: '#324552',
        marginRight: '8px'
    }
}));

export default function JobCardInfo({ mapImageSrc, srcLocation, destLocation     }) {
    // const mapImageSrc = props.mapImageSrc
    // const srcLocation = props.srcLocation
    // const destLocation = props.srcLocation
    const classes = useStyles();

  return (
      <ThemeProvider theme = { customtheme }>
    <Grid className={classes.root}>
        <Grid className= {classes.headerDiv}>
            <ArrowBackIcon className = {classes.backArrowOutlinedIcon}/>
            <Typography variant = "subtitle1" >Commute Routes</Typography>
        </Grid>
        <Grid className={classes.imageDiv}>
            <MyImage src={mapImageSrc} height="135.2px" width="330px" alt="Map Directions"/>
        </Grid>
        <Grid className={classes.listItemDiv}>
            <Grid className = {clsx (classes.innerListItemDiv, {[classes.innerListItemDivStyling]:true})}>
                <Grid className = {clsx (classes.srcLocationDiv, {[classes.hide]:true})}>
                    <FiberManualRecordIcon className = { classes.circleIcon }/>
                    <Typography noWrap className={clsx(classes.locationTypo,{[classes.subtitle22]:true})  }>{srcLocation}</Typography>
                    <CloseIcon className = { classes.closedOutlinedIcon } />
                    {/* <LocationListItem locationName = { srcLocation }></LocationListItem> */}
                </Grid>
            </Grid>
            <Grid className = {clsx (classes.innerListItemDiv, {[classes.innerListItemDivStyling]:true})}>
                <Grid className = {clsx (classes.srcLocationDiv, {[classes.hide]:true})}>
                    <RoomOutlined className = {classes.locationOutlinedIcon}/>                    
                    <Typography noWrap className={clsx(classes.locationTypo,{[classes.subtitle22]:true})  }>{destLocation}</Typography>
                    
                    {/* <LocationListItem locationName = { srcLocation }></LocationListItem> */}
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </ThemeProvider>
  );
}