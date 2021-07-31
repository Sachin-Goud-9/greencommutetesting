import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyTypography from '../../atoms/MyTypography/MyTypography';
import Typography from '@material-ui/core/Typography';
import customtheme from '../../theme.jsx';
import {ThemeProvider } from '@material-ui/core/styles';
const DescriptionList= ({ title,text}) => {
const useStyles = makeStyles((theme) => ({
    
    root: {
        width: 400,
        filter: "blur(1px)"
      },
   

}));


    const classes = useStyles();
    const noBlur=text.slice(0,text.length-1);
    const blur=text[text.length-1];
 return (
     <div >
     <ThemeProvider theme={customtheme}>
        <Typography  variant="h2" data-testid = "titletypographyindescriptionlist">{title}</Typography>
        <ul data-testid = "ulforbodyindescriptionlist">
        {noBlur.map((bodyName)=>(
           <li data-testid = "liforbodyindescriptionlist"><Typography  variant="h1" data-testid = "bodynametypographyindescriptionlist">{bodyName}</Typography></li>
        ))}
       </ul>
       <div className={classes.root} data-testid = "blurdivindescriptionlist">
       <ul data-testid = "ulforblurindescriptionlist">
       <li data-testid = "liforblurindescriptionlist">
           <Typography variant="h1" component="h5" data-testid = "blurtypographyindescriptionlist">{blur}</Typography>
       </li>
       </ul>
        </div>
        </ThemeProvider>  
     </div>
 )

}
export default DescriptionList


