
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MyTypography from '../../atoms/MyTypography/MyTypography';
import ClearIcon from '@material-ui/icons/Clear';
import { Grid } from '@material-ui/core';
import customtheme from '../../theme.jsx';
import Mybutton from '../../atoms/button/CustomButton';


export default function  FilterOptions({selected})  {
  const useStyles = makeStyles((theme) => ({
    alignment: {
       
        display : 'flex',
        flexDirection : 'row',
        display:'inline-block',
       
    

       
    },
    
    typographyHeaderStyle : {
        fontFamily : 'Montserrat',
        color : '#19293b',
        fontSize : '16px',
        lineHeight : 1.5,
        letterSpacing : '0.1px'
    },
    typographyParagraphStyle : {
        fontFamily : 'Montserrat',
        color : '#5ac568' ,
        fontSize : '14px',
        lineHeight : 1.57,
        letterSpacing : '0.1px',
        textAlign:'left',
       
    },
 
    borderBox :
    {
    border: '2px solid #5ac568',
    borderRadius:'8px',
    display : 'inline-flex',
    flexDirection : 'row',
    alignItems : 'center',
    paddingLeft:'20px',
   /* margin:'20px auto',*/
   marginTop:'10px',

    

    },
    iconStyle:
    {
      width: '16px',
  height: '16px',
  color:'#5ac568',
    },
    clearButtonStyle:
    {
      fontFamily: 'Montserrat',
      fontSize: '14px',
      fontWeight: '600',
      fontstretch: 'normal',
      fontStyle: 'normal',
      lineHeight: '1.29',
      letterSpacing: '0.2px',

    },
    
   

}));
const [open, setOpen] = useState(true);
const handleClose = () => {
  
  
  setOpen(false);

};
const [select,setSelect]=useState(selected);
const getRemoved=()=>{
  setSelect([]);
  console.log(select);
   console.warn(select)

}

const getSelected=(e)=>{
  let data=select;
  
  data = data.filter(item => JSON.stringify(item)!== JSON.stringify(e));
  
  console.log(data);
  setSelect(data);
   console.warn(select)

}
useEffect(()=>{
console.log(select);
  }
  );
const classes = useStyles();
const len=selected.length;
    return (   
        <div data-testid = "maindivinfilteroptions">
          <ThemeProvider theme={customtheme}>
            <Grid container data-testid = "maingridinfilteroptions">
              { select.map(data=>
                  <Grid container  item  xs={12} sm={4} md={2} spacing={1} data-testid = "innergridinfilteroptions">          
                        <div className={classes.borderBox} data-testid = "innerdivinfilteroptions">          
                          <MyTypography children={data} variant="h6" component="h5" className={classes.typographyParagraphStyle}  />
                          <Button  value={data}  onClick={()=>getSelected(data)} data-testid = "buttoninfilteroptions"><ClearIcon className={classes.iconStyle} /></Button>
                        </div>         
                  </Grid>                     
                )
              }
                <Mybutton disabled={!len}  text="clear all" color='secondary'  onClick={getRemoved}/>        
            </Grid>             
          </ThemeProvider>
        </div>
     
    )
   
   }